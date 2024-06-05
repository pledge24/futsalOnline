import express from "express";
import jwt from "jsonwebtoken";
import { gameDataClient, userDataClient } from "../utils/prisma/index.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const CLUB_PLAYER_N = 3;

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

/** 가챠 api */ 

router.post('/gatcha', authMiddleware, async (req, res) => {try {
  const { tickets } = req.body;

  const userId= req.user.account_id;
  const numGatcha = +tickets === 10 ? 10 : (+tickets === 1 ? 1 : 0);
  //가챠 횟수 유효성 검사
  //만약, tickets가 10개면 numGatcha는 10, 티켓이 한개면, 가챠횟수도 하나 그 외에는 유효하지 않습니다.
  //가챠 실행전 가챠횟수 확인용
  //console.log("가챠횟수:"+numGatcha);
  if(!numGatcha){
    res.status(400).json({error: "falsy한 가챠횟수입니다"});
  }
  let gatchaResult = [];
  let gatchaMessage= [];
  //단하나 뿐인 플래티넘 카드, id로 접근해서 가져왔습니다
  const zlatan = await gameDataClient.player.findUnique({
    where: {
      player_id: 9
    }
  });
  const playerInfo = await userDataClient.user_info.findUnique({
    where: {
       account_id:userId
      }
  });
  //토큰에 저장된 유저의 남은 캐쉬를 변수에 저장합니다
  const cashRemainder= playerInfo.money;
  // console.log("뽑기 전 남은 돈 :"+ cashRemainder);
  
  //총 비용을 계산해서 변수에 저장합니다.
  const totalCost = numGatcha * 100;
  // console.log("뽑기 전 총 비용:"+totalCost);
  const cashAfterGatcha = cashRemainder - totalCost;
  //만약 돈이 없으면 가챠를 할 수 없도록 유효성 검사를 합니다.
  if(cashRemainder < totalCost){
  return res.status(400).json({ message: "게임머니가 부족해서 가챠를 진행할 수 없습니다."});
  }
  //위의 결격 사유에 걸리지 않는 다면, 가챠 횟수만큼 가챠를 실행합니다.
  //------------가챠 시작-------------
  for (let i = 0; i < numGatcha; i++) {
    //우선, 플래티넘찬스(1000분의 1확률로 플래티넘 찬스에 도달하면 즐라탄을 뽑을 수 있습니다)
    let platinumChance = Math.floor(Math.random() * 1000); 
    //플래티넘 찬스가 1~1000중 1000이 되면 즐라탄을 획득(0.1퍼센트 확률)
if (platinumChance === 1000) {
  //player_id:9번인 즐라탄 전용 메시지입니다. 가챠 메시지에 추가해줍니다.
  //즐라탄을 가챠결과에 추가해줍니다
  gatchaMessage.push(`${zlatan.name}이 당신을 뽑았습니다!`);
  gatchaResult.push(zlatan);
}
//플래티넘 카드 뽑기에 실패했다면 실행되는 브실골 뽑기입니다.
    else{
//브론즈, 실버, 골드의 선수들을 players 변수에 저장합니다.
      const players = await gameDataClient.player.findMany({
        where: {
          rarity: {
            in: ["bronze", "silver", "gold"],
          },
        },
      });
//만약 플레이어가 없으면 
      if (players.length === 0) {
        return res.status(404).json({ message: "뽑을 수 있는 선수가 없습니다" });
      }

      const randomIndex = Math.floor(Math.random() * players.length);
      const selectedPlayer = players[randomIndex];
      //가챠 결과: 결론적으로 user_player 테이블에 저장되는 배열
      gatchaResult.push(selectedPlayer);
      //가챠 메시지: 결론적으로 유저에게 띄워주는 메시지를 저장하는 배열
      if (selectedPlayer.rarity === "bronze") {
        gatchaMessage.push({message:`브론즈등급 선수 ${selectedPlayer.name}을(를) 뽑았습니다`});
      } else if (selectedPlayer.rarity === "silver") {
        gatchaMessage.push({message:`실버등급 선수 ${selectedPlayer.name}을(를) 뽑았습니다`});
      } else if (selectedPlayer.rarity === "gold") {
        gatchaMessage.push({message:`골드등급 선수 ${selectedPlayer.name}을(를) 뽑았습니다`});
      }
      
  }
}
//  gatcharesult = > 인벤토리 갖다 넣기 행(record) 찾고 없으면 1 있으면 ++ for문으로
//  for문이 돌다 멈추면 transaction필요
await userDataClient.$transaction(async (tx) => {
  await tx.user_info.update({
    where:{
      account_id:userId
    },
    data:{
      money: cashAfterGatcha
    }
  })
  for (const player of gatchaResult) {
    // 우선 이전 결과 탐색
    const isPlayerExist = await tx.user_player.findFirst({
        where: {
            account_id: userId,
            player_id: player.player_id,
          },
        });

        if (isPlayerExist) {
          await tx.user_player.update({
            where: {
              account_id_player_id: {
                account_id: userId,
                player_id: player.player_id,
              },
            },
            data: {
              count: {
                increment: 1,
              },
            },
          });
        } else {
          await tx.user_player.create({
            data: {
              account_id: userId,
              player_id: player.player_id,
              count: 1,
            },
          });
        }
      }
    });

    return res.status(200).json({ message: "테스트 성공, 선수를 뽑았습니다.", gatchaMessage });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "서버에서 오류가 발생했습니다." });
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

    const existingUserPlayer = await userDataClient.user_player.findUnique({
      where: {
        account_id_player_id: {
          account_id: userId,
          player_id: player_id,
        },
      },
    });

    if (existingUserPlayer) {
      await userDataClient.user_player.update({
        where: {
          account_id_player_id: {
            account_id: userId,
            player_id: player_id,
          },
        },
        data: {
          count: existingUserPlayer.count + 1,
        },
      });
    } else {
      await userDataClient.user_player.create({
        data: {
          account_id: userId,
          player_id: player_id,
          count: 1,
        },
      });
    }

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

    if (!userInventory || userInventory.count < 1) {
      return res.status(400).json({ message: "인벤토리에 해당 선수가 없습니다." });
    }

    const clubPlayerList = await userDataClient.user_club.findMany({
      where: {
        account_id: userId,
      },
    });


    const clubPlayerCodes = clubPlayerList.map(clubPlayerList => clubPlayerList.player_id);

    if(clubPlayerCodes.indexOf(player_id) !== -1){
      return res.status(409).json({
        message: "이미 해당 선수는 구단에 존재합니다.",
      });
    }
    else if (clubPlayerList.length >= 3) {
      return res.status(403).json({
        message: "클럽엔 3명이상 넣을 수 없습니다.",
      });

    }
    else if(clubPlayerList.length == 2){
      await userDataClient.user_info.update({
        data:{
          have_club: true
        },
        where:{
          account_id: userId
        }
      });
    }

    await userDataClient.user_club.create({
      data: {
        account_id: account.account_id,
        player_id
      },
    });

    if (userInventory.count > 1) {
      await userDataClient.user_player.update({
        where: {
          account_id_player_id: {
            account_id: userId,
            player_id: player_id,
          },
        },
        data: {
          count: userInventory.count - 1,
        },
      });
    } else {
      await userDataClient.user_player.delete({
        where: {
          account_id_player_id: {
            account_id: userId,
            player_id: player_id,
          },
        },
      });
    }


    return res.status(200).json({ message: "선수가 구단에 추가되었습니다." });

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

    const userClub = await userDataClient.user_club.findFirst({
      where: {
        account_id: account.account_id,
        player_id: player_id,
      },
    });

    if (!userClub) {
      return res.status(400).json({ message: "구단에 해당 선수가 없습니다." });
    }

    await userDataClient.user_club.delete({
      where: {
        id: userClub.id,
      },
    });

    // 구단에서 선수가 제거되었다면 완성된 구단이 존재하지 않으므로 구단 보유 여부를 false로 변경
    await userDataClient.user_info.update({
      data:{
        have_club: false
      },
      where:{
        account_id: userId
      }
    });

    // 유저 선수 인벤토리에 존재하는 해당 선수를 DB에서 가져옵니다.
    const userInventory = await userDataClient.user_player.findFirst({
      where: {
        account_id: userId,
        player_id: player_id,
      },
    });

    // 인벤토리에 해당 선수가 있다면 수량을 1 증가시키고,
    // 그렇지 않다면 해당 선수에 대한 새로운 레코드를 생성합니다.
    if (userInventory) {
      await userDataClient.user_player.update({
        where: {
          account_id_player_id: {
            account_id: userId,
            player_id: player_id,
          },
        },
        data: {
          count: userInventory.count + 1,
        },
      });
    } else {
      await userDataClient.user_player.create({
        data: {
          account_id: account.account_id,
          player_id: player_id,
          count: 1,
        },
      });
    }

    return res.status(200).json({ message: "선수가 구단에서 제거되었습니다." });
  } catch (error) {
    console.error("선수 제거 중 에러 발생:", error);
    return res.status(500).json({ message: "선수 제거 중 오류가 발생했습니다." });
  }
});

// user_player(인벤토리) 조회 API
router.get("/userinventory", authMiddleware, async (req, res) => {
  try {
    const user_player = await userDataClient.user_player.findMany({
      select: {
        player_id: true,
        count: true,
      },
    });

    const player = await gameDataClient.player.findMany({
      select: {
        player_id: true,
        name: true,
      },
    });

    if (user_player.length === 0) {
      return res.status(404).json({ message: "선수가 없습니다. 카드깡부터 하세요." });
    }

    const playerMap = player.reduce((map, obj) => {
      map[obj.player_id] = obj.name;
      return map;
    }, {});

    const user_players = user_player.map((up) => ({
      player_id: up.player_id,
      count: up.count,
      name: playerMap[up.player_id] || "Unknown",
    }));

    return res.status(200).json(user_players);
  } catch (error) {
    console.error("선수 조회 중 에러 발생:", error);
    return res.status(500).json({ message: "선수 조회 중 오류가 발생했습니다." });
  }
});

// 구단(club) 선수 조회 API
router.get("/clubs", async (req, res) => {
  try {
    const userId = parseInt(req.query.user_id);

    const userClubs = await userDataClient.user_club.findMany({
      where: { account_id: userId },
      select: {
        player_id: true,
      },
    });

    if (userClubs.length === 0) {
      return res.status(404).json({ message: "구단에 선수가 없습니다." });
    }

    const playerIds = userClubs.map((userClub) => userClub.player_id);

    const players = await gameDataClient.player.findMany({
      where: {
        player_id: { in: playerIds },
      },
      select: {
        name: true,
      },
    });

    const response = players.map((player) => player.name);

    return res.status(200).json(response);
  } catch (error) {
    console.error("선수 조회 중 에러 발생", error);
    return res.status(500).json({ message: "선수 조회 중 오류가 발생했습니다." });
  }
});

// 구단 선수 상세조회 API
router.get("/club", async (req, res) => {
  try {
    const userId = parseInt(req.query.user_id);
    const playerId = parseInt(req.query.player_id);

    if (isNaN(userId) || isNaN(playerId)) {
      return res.status(400).json({ message: "잘못된 사용자 ID 또는 선수 ID입니다." });
    }

    const userClubs = await userDataClient.user_club.findMany({
      where: { account_id: userId, player_id: playerId },
    });

    if (userClubs.length === 0) {
      return res.status(404).json({ message: "구단에 해당 선수가 없습니다." });
    }

    const player = await gameDataClient.player.findUnique({
      where: {
        player_id: playerId,
      },
      select: {
        player_id: true,
        name: true,
        speed: true,
        goal_desicion: true,
        shoot_power: true,
        defense: true,
        stamina: true,
      },
    });

    if (!player) {
      return res.status(404).json({ message: "선수를 찾을 수 없습니다." });
    }

    return res.status(200).json(player);
  } catch (error) {
    console.error("구단선수 조회 중 에러 발생", error);
    return res.status(500).json({ message: "구단선수 조회 중 오류가 발생했습니다." });
  }
});

/** 랭크 매치 시스템 함수
 * @params myUserInfo: 내 유저 정보 
 * @returns: 상대 구단 정보(opponentClub)
 * */   
const find_opponent = async (myUserInfo) => {
  let ratingRange = 100;                      // 초기 레이팅 범위
  const rating = myUserInfo.rank_score;       // 내 레이팅 점수
  const myAccountId = myUserInfo.account_id;  // 내 계정 id

  // 내 레이팅의 -1000~+1000인 상대를 찾습니다.
  // 상대를 찾았다면 상대 구단 정보를 반환하고, 더 이상 찾지 않고 while문을 종료합니다.
  while (ratingRange < 1000) {
    // 현재 레이팅 범위에 상대가 있는지 찾는다(당연히 나는 제외).  
    const opponentUserList = await userDataClient.user_info.findMany({
      where: {
        NOT:{
          account_id: myAccountId,
        },
        rank_score: {
          gte: rating - ratingRange,
          lte: rating + ratingRange,
        },
        have_club: true,
      },
    });

    // 찾은 상대 리스트 출력
    //console.log("------------------------\n",opponentUserList);

    // 상대가 존재하지 않는다면, 레이팅 범위를 2배로 늘린다.
    // 상대를 찾았다면 상대 구단 정보를 반환한다.
    if (opponentUserList.length === 0) ratingRange *= 2;
    else {
      // 상대가 여러 명인 경우, 랜덤으로 상대를 골라 상대 구단 정보를 반환한다. 
      const randomValue = Math.floor(Math.random() * opponentUserList.length);
      const opponentClub = await userDataClient.user_club.findMany({
        where: {
          account_id: opponentUserList[randomValue].account_id,
        },
      });
      return opponentClub;
    }
  }

  // 상대를 찾지 못한 경우, undefined를 반환한다.
  console.log("NOT FOUND");
  return undefined;
};

/** 매치 플레이 API */ 
router.post("/play", authMiddleware, async (req, res) => {
  const { opponent_id, play_mode } = req.body;
  const user = req.user;

  try {
    // 내 유저 정보를 DB에서 가져옵니다.
    const myUserInfo = await userDataClient.user_info.findFirst({
      where: {
        account_id: user.account_id,
      },
    });

    // 만약, 내가 구단을 편성하지 않았다면 해당 사실을 클라이언트에 전달합니다.
    if (!myUserInfo.have_club) {
      return res.status(404).json({ message: "내 완성된 구단이 없습니다. 완성된 구단을 편성해주세요" });
    };

    // 내 구단 정보를 DB에서 가져옵니다.
    const myClub = await userDataClient.user_club.findMany({
      where: {
        account_id: user.account_id,
      },
    });

    // 내 구단 정보 체크용
    // console.log("myUserInfo:", myClub);

    // 게임 플레이 모드에 따른 상대의 구단 정보를 가져오는 함수.
    // 특정 이유로 구단 정보를 가져오지 못하면, 해당 사유도 메세지로 반환한다.
    async function getOpponentClubAndCauseMsg(play_mode) {
      
      if (play_mode === "rank") {               // 랭크 모드인 경우
        // 랭크 상대를 찾습니다.
        const opponentClub = await find_opponent(myUserInfo);

        //console.log("async 접근 완료. 상대 구단 정보:", opponentClub);

        // 랭크 상대를 찾지 못했다면, 해당 사실을 메세지에 저장해 반환하고,
        // 랭크 상대를 찾았다면, 랭크 상대 구단 정보를 반환합니다.
        if (!opponentClub) return [opponentClub, "현재 매칭 가능한 상대가 없습니다..."];
        else return [opponentClub, "매칭 상대 발견!"];
      } else if (play_mode === "custom") {      // 커스텀 모드인 경우
        // body 데이터에 상대 id를 입력받지 못했다면, 해당 사실을 클라이언트에 전달합니다.
        if (!opponent_id) {                     
          return [undefined, "Invalid Request: opponent_id is required"];
        }
    
        // 상대의 구단 정보를 DB에서 가져옵니다
        const opponentClub = await userDataClient.user_club.findMany({
          where: {
            account_id: +opponent_id,
          },
        });
    
        // 상대가 플레이 할 수 있는 상황이 아니라면 해당 사실을 메세지에 저장해 반환합니다.
        if (!opponentClub || opponentClub.length < CLUB_PLAYER_N) {
          return [undefined, `해당 유저(user_id : ${user_id}) 또는 유저가 편성한 완성된 구단이 존재하지 않습니다.`];
        }
        
        // 상대를 찾았다면 상대 구단 정보와 찾았다는 메세지를 반환합니다.
        return [opponentClub, "매칭 상대 발견!"];
      } else {                                  // 그 외 모드를 입력한 경우
        return [undefined, "해당 게임 플레이 모드를 찾을 수 없습니다."];
      }
    }
    
    // 상대 구단 정보를 가져옵니다.
    const [opponentClub, causeMsg] = await getOpponentClubAndCauseMsg(play_mode);

    // Test용
    //console.log("getOpponentClubAndCauseMsg함수 호출 결과", opponentClub, causeMsg);
    
    // 상대를 찾을 때 문제가 발생하면, 해당 사유를 클라이언트에게 전달합니다.
    if (!opponentClub) {
      return res.status(404).json({ causeMsg: causeMsg });
    }


    // ------------- 게임 시작 ---------------
    let myClubScore = 0.0;
    let opponentClubScore = 0.0;

    /**
     * 구단의 점수를 계산하는 함수
     * @param {*} club 구단 정보
     * @returns 구단 총 점수
     */
    async function getClubScore(club) {
      const playerIds = club.map(player => player.player_id);
      
      // 클럽에 존재하는 선수 데이터를 가져옵니다.
      const playerInfos = await gameDataClient.player.findMany({
        where: {
          player_id: {
            in: playerIds
          }
        }
      });

      // Test용
      // console.log(playerInfos);

      // 스텟 가중치 설정.
      const weight = {
        speed: 0.1,
        goal_decision: 0.25,
        show_power: 0.15,
        defense: 0.3,
        stamina: 0.2,
      };
    
      let totalScore = 0.0;
    
      // 가중치에 따른 선수 점수를 계산하고 구단 총 점수를 계산합니다.
      playerInfos.forEach(player => {
        let playerScore = 0.0;
        for (const key in weight) {
          if (weight.hasOwnProperty(key) && player.hasOwnProperty(key)) {
            playerScore += weight[key] * player[key];
          }
        }
        //console.log(playerScore);
        totalScore += playerScore;
      });
    
      return totalScore;
    }
    
    // Test용
    //console.log("myClub, opponentClub:", myClub, opponentClub );

    // 나와 상대의 구단 점수를 구합니다.
    myClubScore = await getClubScore(myClub);
    opponentClubScore = await getClubScore(opponentClub);
    

    // Test용
    // console.log("myClubScore", myClubScore);
    // console.log("opponentClubScore", opponentClubScore);

    // 각 유저의 골 점수를 계산합니다. 점수 비율이 높을 수록 득점 할 확률이 높으며,
    // 설정한 골 시도 횟수(goalTries)만큼 반복합니다.
    let totalScore = myClubScore + opponentClubScore;   // 나의 구단 총 점수 + 상대 구단 총 점수
    let myGameScore = 0, opponentGameScore = 0;         // 내 골 점수, 상대 골 점수
    let goalTries = 10;                                 // 골 시도 횟수
    for (let goal_try = 0; goal_try < goalTries; goal_try++) {
      const randomValue = Math.random() * totalScore;
      if (randomValue < myClubScore) myGameScore++;
      else opponentGameScore++;
    }

    // Test용
    // console.log("sssssss", myGameScore, opponentGameScore);
  

    // 게임 결과를 정산하고, 결과에 따른 메세지를 gameResult에 저장합니다.
    const gameResult = {};
    if (myGameScore > opponentGameScore) {            // 나의 승리
      gameResult.result = `승리하였습니다! ${myGameScore} : ${opponentGameScore}`;
      
      // 랭크모드일 경우, 승리 결과에 따라 유저 정보를 수정합니다.
      if (play_mode === "rank") {
        const [updatedMyInfo, updatedOpponentInfo] = await userDataClient.$transaction(
          async (tx) => {
            // 내 레이팅 점수를 올리고 승리횟수를 1 증가시킵니다.
            const updatedMyInfo = await tx.user_info.update({
              where: {
                account_id: myClub[0].account_id,
              },
              data: {
                wins: {
                  increment: 1,
                },
                rank_score: {
                  increment: 100,
                },
              },
            });
            // 상대방의 레이팅 점수를 내리고 패배횟수를 1 증가시킵니다.
            const updatedOpponentInfo = await tx.user_info.update({
              where: {
                account_id: opponentClub[0].account_id,
              },
              data: {
                loses: {
                  increment: 1,
                },
                rank_score: {
                  decrement: 100,
                },
              },
            });

            return [updatedMyInfo, updatedOpponentInfo];
          }
        );

        // Test용
        // console.log("updatedMyInfo, updatedOpponentInfo", updatedMyInfo, updatedOpponentInfo);
        gameResult.rank_score = `랭크 점수 ${myUserInfo.rank_score}으로 100 상승`;
      }
      
    } else if (myGameScore < opponentGameScore) {     // 나의 패배
      gameResult.result = `패배하였습니다... ${myGameScore} : ${opponentGameScore}`;
      
      // 랭크모드일 경우, 게임 결과에 따라 유저 정보를 수정합니다.
      if (play_mode === "rank") {
        const [updatedMyInfo, updatedOpponentInfo] = await userDataClient.$transaction(
          async (tx) => {
            // 내 레이팅 점수를 내리고 패배횟수를 1 증가시킵니다.
            const updatedMyInfo = await tx.user_info.update({
              where: {
                account_id: myClub[0].account_id,
              },
              data: {
                loses: {
                  increment: 1,
                },
                rank_score: {
                  decrement: 100,
                },
              },
            });
            // 상대방의 레이팅 점수를 올리고 승리횟수를 1 증가시킵니다.
            const updatedOpponentInfo = await tx.user_info.update({
              where: {
                account_id: opponentClub[0].account_id,
              },
              data: {
                wins: {
                  increment: 1,
                },
                rank_score: {
                  increment: 100,
                },
              },
            });
            return [updatedMyInfo, updatedOpponentInfo];
          }
        );

        // Test용
        // console.log(updatedMyInfo, updatedOpponentInfo);
        gameResult.rank_score = `랭크 점수 ${myUserInfo.rank_score}으로 100 하락...`;
      }
      
    } else {                                          // 무승부
      gameResult.result = `무승부 ${myGameScore} : ${opponentGameScore}`;
      
      // 랭크모드일 경우, 게임 결과에 따라 유저 정보를 수정합니다.
      if (play_mode === "rank") {
        // 상대와 내 무승부 횟수를 1 증가시킵니다.
        const updatedInfos = await userDataClient.user_info.updateMany({
          where:{
            account_id : {
              in : [myClub[0].account_id, opponentClub[0].account_id]
            }
          },
          data: {
            draws:{
              increment: 1
            },
          },
        });
        gameResult.rank_score = `랭크 점수 ${myUserInfo.rank_score}으로 변동없음`;

        //console.log(updatedInfos);
      }


    }
    
    return res
      .status(201)
      .json({ message: "게임이 정상적으로 종료되었습니다", gameResult: gameResult });
  } catch (error) {
    console.error("게임 플레이 실행 중 에러 발생", error);
    return res.status(500).json({ message: "게임 플레이 실행 중 오류가 발생했습니다." });
  }
});

export default router;
