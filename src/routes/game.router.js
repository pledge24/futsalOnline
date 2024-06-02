import express from "express";
import jwt from "jsonwebtoken";
import { gameDataClient, userDataClient } from "../utils/prisma/index.js";
import authMiddleware from "../middlewares/auth.middleware.js";

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

// user_player(인벤토리)에 선수 넣기(임시)
router.post("/club_add", authMiddleware, async (req, res) => {
  const { player_id } = req.body;
  const userId = req.user.account_id;

  try {
    const account = await userDataClient.account.findUnique({
      where: {
        account_id: userId,
      },
    });

    if (!account) {
      return res.status(403).json({ message: "내 구단이 아닙니다." });
    }

    await userDataClient.user_player.create({
      data: {
        account_id: userId,
        player_id: player_id,
        count: 1,
      },
    });
    return res.status(200).json({ message: "선수가 성공적으로 추가되었습니다." });
  } catch (error) {
    console.error("선수 추가 중 오류:", error);
    return res.status(500).json({ message: "선수 추가 중 오류가 발생했습니다." });
  }
});

// 구단에 선수 추가 API
router.post("/club/equip", authMiddleware, async (req, res) => {
  const { player_id } = req.body;
  const userId = req.user.account_id;

  try {
    const account = await userDataClient.account.findFirst({
      where: {
        account_id: userId,
      },
    });

    if (!account) {
      return res.status(403).json({ message: "내 구단이 아닙니다." });
    }

    const userInventory = await userDataClient.user_player.findFirst({
      where: {
        account_id: account.account_id,
        player_id: player_id,
      },
    });

    if (!userInventory) {
      return res.status(400).json({ message: "인벤토리에 해당 선수가 없습니다." });
    }

    const clubPlayerCount = await userDataClient.user_club.count({
      where: {
        account_id: userId,
      },
    });

    if (clubPlayerCount >= 3) {
      return res.status(403).json({
        message: "클럽엔 3명이상 넣을 수 없습니다.",
      });
    }

    await userDataClient.user_club.create({
      data: {
        account_id: account.account_id,
        player_id: player_id,
      },
    });

    await userDataClient.user_player.delete({
      where: {
        account_id_player_id: {
          account_id: userId,
          player_id: player_id,
        },
      },
    });

    return res.status(200).json({ message: "선수가 추가되었습니다." });
  } catch (error) {
    console.error("선수 추가 중 에러 발생:", error);
    return res.status(500).json({ message: "선수 추가 중 오류가 발생했습니다." });
  }
});

// 구단에서 선수 제거 API
router.delete("/club/unequip", authMiddleware, async (req, res) => {
  const { player_id } = req.body;
  const userId = req.user.account_id;

  try {
    const account = await userDataClient.account.findFirst({
      where: {
        account_id: userId,
      },
    });

    if (!account) {
      return res.status(403).json({ message: "내 구단이 아닙니다." });
    }

    const userclub = await userDataClient.user_club.findFirst({
      where: {
        account_id: account.account_id,
        player_id: player_id,
      },
    });

    if (!userclub) {
      return res.status(400).json({ message: "구단에 해당 선수가 없습니다." });
    }

    await userDataClient.user_club.delete({
      where: {
        account_id: userId,
        player_id: player_id,
        id: userclub.id,
      },
    });

    await userDataClient.user_player.create({
      data: {
        account_id: account.account_id,
        player_id: player_id,
        count: 1,
      },
    });

    return res.status(200).json({ message: "선수가 제거되었습니다." });
  } catch (error) {
    console.error("선수 제거 중 에러 발생:", error);
    return res.status(500).json({ message: "선수 제거 중 오류가 발생했습니다." });
  }
});

export default router;
