import express from "express";
import { gameDataClient } from "../utils/prisma/index.js";

const router = express.Router();

// 선수 생성 (임시)
router.post("/player", async (req, res) => {
  const { player_id, name, speed, goal_desicion, shoot_power, defense, stamina, rarity } = req.body;

  try {
    const newplayer = await gameDataClient.player.create({
      data: {
        player_id,
        name,
        speed,
        goal_desicion,
        shoot_power,
        defense,
        stamina,
        rarity,
      },
    });

    return res.status(200).json({ message: "캐릭터가 정상적으로 추가되었습니다." });
  } catch (error) {
    console.error("선수 생성중 에러 발생", error);
    return res.status(500).json({ message: "선수 생성 중 오류가 발생했습니다." });
  }
});

// 선수 데이터 DB 조회 API
router.get("/player", async (req, res) => {
  try {
    const player = await gameDataClient.player.findMany({
      select: {
        name: true,
        player_id: true,
      },
    });

    return res.status(200).json(player);
  } catch (error) {
    console.error("선수 목록 조회 중 에러 발생", error);
    return res.status(500).json({ message: "선수 목록 조회 중 오류가 발생했습니다." });
  }
});

// 선수 데이터 DB 상세 조회 API
router.get("/player/:player_id", async (req, res) => {
  const player_id = parseInt(req.params.player_id, 10);

  try {
    const player = await gameDataClient.player.findUnique({
      where: { player_id: player_id },
      select: {
        player_id: true,
        name: true,
        speed: true,
        goal_desicion: true,
        defense: true,
        stamina: true,
      },
    });

    if (!player) {
      return res.status(404).json({ message: "해당 id의 선수를 찾을 수 없습니다." });
    }

    return res.status(200).json(player);
  } catch (error) {
    console.error("선수 상세 조회 중 에러 발생:", error);
    return res.status(500).json({ message: "선수 상세 조회 중 오류가 발생했습니다." });
  }
});

// 선수 데이터 DB 선수 수정 API
router.put("/player/:player_id", async (req, res) => {
  const player_id = parseInt(req.params.player_id, 10);
  const { speed, goal_desicion, shoot_power, defense, stamina, rarity } = req.body;

  try {
    const existingPlayer = await gameDataClient.player.findUnique({
      where: { player_id: player_id },
    });
    if (!existingPlayer) {
      return res.status(404).json({ message: "해당 id의 선수를 찾을 수 없습니다." });
    }
    const updatedPlayer = await gameDataClient.player.update({
      where: { player_id: player_id },
      data: {
        speed,
        goal_desicion,
        defense,
        shoot_power,
        stamina,
        rarity,
      },
    });

    return res.status(200).json({ message: `${player_id} 선수가 정상적으로 수정되었습니다.` });
  } catch (error) {
    console.error("선수 수정 중 에러 발생:", error);
    return res.status(500).json({ message: " 선수 수정 중 오류가 발생했습니다." });
  }
});
//가챠 api
router.post('/gatcha', async (req, res) => {
  try {
      const { type } = req.body;
      const numGatcha = type === "10Gatcha" ? 10 : 1;
      let gatchaResult = [];
      let gatchaMessage= [];

      for (let i = 0; i < numGatcha; i++) {
          const players = await gameDataClient.player.findMany({
              where: {
                  rarity: {
                      in: ['bronze', 'silver', 'gold']
                  }
              }
          });

          if (players.length === 0) {
              return res.status(404).json({ message: "뽑을 수 있는 선수가 없습니다" });
          }

          const randomIndex = Math.floor(Math.random() * players.length);
          const selectedPlayer = players[randomIndex];
          //선수 이름과 메시지를 뽑을때 마다 출력
          //배열로 뽑은 선수 아이디를 저장, 레어도저장
          gatchaResult.push(selectedPlayer);
          
          if (selectedPlayer.rarity === 'bronze') {
            gatchaMessage.push(`Bronze 메시지 ${selectedPlayer.name}`)
          } else if (selectedPlayer.rarity === 'silver') {
            gatchaMessage.push(`Silver 메시지 ${selectedPlayer.name}`)
          } else if (selectedPlayer.rarity === 'gold') {
            gatchaMessage.push(`Gold 메시지 ${selectedPlayer.name}`)
          }
      }
      
      return res.status(200).json({ message: "테스트 성공, 선수를 뽑았습니다.", result: gatchaResult, gatchaMessage });
  } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "서버에서 오류가 발생했습니다." });
  }
});

export default router;
