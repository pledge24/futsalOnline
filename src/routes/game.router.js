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
        shoot_power: true,
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

router.post("/gatcha", authMiddleware, async (req, res) => {
  try {
    const { tickets } = req.body;
    console.log(tickets);

    const userId = req.user.account_id;
    const numGatcha = +tickets === 10 ? 10 : +tickets === 1 ? 1 : 0;
    //가챠 횟수 유효성 검사
    //만약, tickets가 10개면 numGatcha는 10, 티켓이 한개면, 가챠횟수도 하나 그 외에는 유효하지 않습니다.
    //가챠 실행전 가챠횟수 확인용
    //console.log("가챠횟수:"+numGatcha);
    if (!numGatcha) {
      res.status(400).json({ error: "falsy한 가챠횟수입니다" });
    }
    let gatchaResult = [];
    let gatchaMessage = [];
    //단하나 뿐인 플래티넘 카드, id로 접근해서 가져왔습니다
    const zlatan = await gameDataClient.player.findUnique({
      where: {
        player_id: 9,
      },
    });
    const playerInfo = await userDataClient.user_info.findUnique({
      where: {
        account_id: userId,
      },
    });
    //토큰에 저장된 유저의 남은 캐쉬를 변수에 저장합니다
    const cashRemainder = playerInfo.money;
    // console.log("뽑기 전 남은 돈 :"+ cashRemainder);

    //총 비용을 계산해서 변수에 저장합니다.
    const totalCost = numGatcha * 100;
    // console.log("뽑기 전 총 비용:"+totalCost);
    const cashAfterGatcha = cashRemainder - totalCost;
    //만약 돈이 없으면 가챠를 할 수 없도록 유효성 검사를 합니다.
    if (cashRemainder < totalCost) {
      return res.status(400).json({ message: "게임머니가 부족해서 가챠를 진행할 수 없습니다." });
    }
    //위의 결격 사유에 걸리지 않는 다면, 가챠 횟수만큼 가챠를 실행합니다.
    //------------가챠 시작-------------
    for (let i = 0; i < numGatcha; i++) {
      //우선, 플래티넘찬스(1000분의 1확률로 플래티넘 찬스에 도달하면 즐라탄을 뽑을 수 있습니다)
      let platinumChance = Math.floor(Math.random() * 1000+1);
      //플래티넘 찬스가 1~1000중 1000이 되면 즐라탄을 획득(0.1퍼센트 확률)
      if (platinumChance === 1000) {
        //player_id:9번인 즐라탄 전용 메시지입니다. 가챠 메시지에 추가해줍니다.
        //즐라탄을 가챠결과에 추가해줍니다
        gatchaMessage.push(`🎉🎉🎉🏆${zlatan.name}🏆이 당신을 뽑았습니다!🎉🎉🎉`);
        gatchaResult.push(zlatan);
      }
      //플래티넘 카드 뽑기에 실패했다면 실행되는 브실골 뽑기입니다.
      else {
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
          gatchaMessage.push({
            message: `브론즈등급 선수 ${selectedPlayer.name}을(를) 뽑았습니다`,
          });
        } else if (selectedPlayer.rarity === "silver") {
          gatchaMessage.push({
            message: `💪실버등급 선수 ${selectedPlayer.name}을(를) 뽑았습니다💪`,
          });
        } else if (selectedPlayer.rarity === "gold") {
          gatchaMessage.push({
            message: `⭐️⭐️⭐️골드등급 선수 ${selectedPlayer.name}을(를) 뽑았습니다⭐️⭐️⭐️`,
          });
        }
      }
    }
    //  gatcharesult = > 인벤토리 갖다 넣기 행(record) 찾고 없으면 1 있으면 ++ for문으로
    //  for문이 돌다 멈추면 transaction필요
    await userDataClient.$transaction(async (tx) => {
      await tx.user_info.update({
        where: {
          account_id: userId,
        },
        data: {
          money: cashAfterGatcha,
        },
      });
      for (const player of gatchaResult) {
        // 우선 이전 결과 탐색
        const isPlayerExist = await tx.user_player.findFirst({
          where: {
            account_id: userId,
            player_id: player.player_id,
            enhancement_level:0
          },
        });

        if (isPlayerExist) {
          await tx.user_player.update({
            where: {
              account_id_player_id_enhancement_level: {
                account_id: userId,
                player_id: player.player_id,
                enhancement_level: 0,
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

    return res
      .status(200)
      .json({
        message: "테스트 성공, 선수를 뽑았습니다.",
        gatchaMessage,
        cash_remainder: cashAfterGatcha + " 게임머니 남았습니다.",
      });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "서버에서 오류가 발생했습니다." });
  }
});

// // user_player(인벤토리)에 선수 넣기(임시)
// router.post("/inventory", authMiddleware, async (req, res) => {
//   const { player_id } = req.body;
//   const account_id = req.user.account_id;

//   try {
//     const account = await userDataClient.account.findUnique({
//       where: {
//         account_id: account_id,
//       },
//     });

//     const existingUserPlayer = await userDataClient.user_player.findUnique({
//       where: {
//         account_id_player_id: {
//           account_id: account_id,
//           player_id: player_id,
//         },
//       },
//     });

//     if (existingUserPlayer) {
//       await userDataClient.user_player.update({
//         where: {
//           account_id_player_id: {
//             account_id: account_id,
//             player_id: player_id,
//           },
//         },
//         data: {
//           count: existingUserPlayer.count + 1,
//         },
//       });
//     } else {
//       await userDataClient.user_player.create({
//         data: {
//           account_id: account_id,
//           player_id: player_id,
//           count: 1,
//         },
//       });
//     }

//     return res.status(200).json({ message: "선수가 성공적으로 추가되었습니다." });
//   } catch (error) {
//     console.error("선수 추가 중 오류:", error);
//     return res.status(500).json({ message: "선수 추가 중 오류가 발생했습니다." });
//   }
// });

/** 구단 선수 추가 API */
router.post("/club", authMiddleware, async (req, res) => {
  const { player_id, enhancement_level } = req.body;
  const account_id = req.user.account_id;

  try {
    // 구단에 넣을 선수를 인벤토리DB에서 가져옵니다.
    const playerInInventory = await userDataClient.user_player.findFirst({
      where: {
        account_id,
        player_id,
      },
    });

    // 해당 선수가 인벤토리에 존재하지 않다면, 해당 사실을 클라이언트에 전달합니다.
    if (!playerInInventory) {
      return res.status(404).json({ message: "인벤토리에 해당 선수가 없습니다." });
    }

    // 내 구단 정보를 DB에서 가져옵니다
    const clubPlayerList = await userDataClient.user_club.findMany({
      where: {
        account_id,
      },
    });

    // 내 구단의 선수 번호를 추출합니다.
    const clubPlayerCodes = clubPlayerList.map((clubPlayerList) => clubPlayerList.player_id);

    // 예외 상황이 발생하면, 해당 사실을 클라이언트에 전달합니다.
    if (clubPlayerCodes.includes(player_id)) {
      return res.status(409).json({
        message: "이미 해당 선수는 구단에 존재합니다.",
      });
    } else if (clubPlayerList.length >= 3) {
      return res.status(403).json({
        message: "클럽엔 3명이상 넣을 수 없습니다.",
      });
    }

    // 구단에서 해당 선수를 추가하는 트랜잭션을 실행합니다.
    await userDataClient.$transaction(async (tx) => {
      // 선수를 추가함으로써 완벽한 구단(3명)이 만들어지면 have_club을 true로 변경합니다.
      if (clubPlayerList.length == 2) {
        await tx.user_info.update({
          data: {
            have_club: true,
          },
          where: {
            account_id,
          },
        });
      }

      // 구단에 해당 선수를 추가합니다.
      await tx.user_club.create({
        data: {
          account_id,
          player_id,
          enhancement_level: playerInInventory.enhancement_level,
        },
      });

      // 인벤토리에 해당 선수의 수량이 2이상이면 수량을 1 감소시키고,
      // 수량이 1이라면 해당 레코드를 삭제합니다.
      if (playerInInventory.count > 1) {
        await tx.user_player.update({
          where: {
            account_id_player_id_enhancement_level: {
              account_id,
              player_id,
              enhancement_level: +enhancement_level,
            },
          },
          data: {
            count: {
              decrement: 1,
            },
          },
        });
      } else {
        await tx.user_player.delete({
          where: {
            account_id_player_id_enhancement_level: {
              account_id,
              player_id,
              enhancement_level: +enhancement_level,
            },
          },
        });
      }
    });

    return res
      .status(200)
      .json({ message: `player_id: ${player_id} 선수가 구단에 추가되었습니다.` });
  } catch (error) {
    console.error("선수 추가 중 에러 발생:", error);
    return res.status(500).json({ message: "선수 추가 중 오류가 발생했습니다." });
  }
});

/** 구단 선수 제거 API */
router.delete("/club", authMiddleware, async (req, res) => {
  const { player_id } = req.body;
  const account_id = +req.user.account_id;

  try {
    // 내 구단 정보를 DB에서 가져옵니다.
    const club = await userDataClient.user_club.findMany({
      where: {
        account_id,
      },
    });

    // 만약 구단에 선수가 한 명도 없다면, 해당 사실을 클라이언트에게 전달합니다.
    if (club.length === 0) {
      return res.status(404).json({ message: "내 구단에 선수가 존재하지 않습니다." });
    }

    // 내 구단에서 해당 플레이어가 있는지 확인합니다.
    const unequippingPlayer = await userDataClient.user_club.findFirst({
      where: {
        account_id,
        player_id,
      },
    });

    // 만약 내 구단에 해당 선수가 편성되지 않았다면, 해당 사실을 클라이언트에 전달합니다.
    if (!unequippingPlayer) {
      return res.status(404).json({ message: "구단에 해당 선수가 없습니다." });
    }

    // 구단에서 해당 선수를 제거하는 트랙젝션을 실행합니다.
    // 유저 선수 인벤토리(user_player)에 해당 선수가 있다면 수량 1증가.
    // 그렇지 않다면 새로운 레코드를 생성합니다.
    await userDataClient.$transaction(async (tx) => {
      await tx.user_info.update({
        where: {
          account_id,
        },
        data: {
          have_club: false,
        },
      });

      // 내 구단에서 해당 선수를 제거합니다.
      await tx.user_club.delete({
        where: {
          account_id_player_id: {
            account_id,
            player_id: unequippingPlayer.player_id,
          },
        },
      });

      // 인벤토리에 해당 선수가 있는지 확인합니다.
      const existingPlayer = await tx.user_player.findFirst({
        where: {
          account_id,
          player_id: unequippingPlayer.player_id,
          enhancement_level: unequippingPlayer.enhancement_level,
        },
      });

      // 인벤토리에 해당 선수가 있으면 count를 증가시키고, 없으면 새로운 레코드를 생성합니다.
      if (existingPlayer) {
        await tx.user_player.update({
          where: {
            account_id_player_id_enhancement_level: {
              account_id,
              player_id: unequippingPlayer.player_id,
              enhancement_level: unequippingPlayer.enhancement_level,
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
            account_id,
            player_id: unequippingPlayer.player_id,
            count: 1,
            enhancement_level: unequippingPlayer.enhancement_level,
          },
        });
      }
    });

    return res
      .status(200)
      .json({ message: `player_id: ${player_id}선수를 구단에 제거하였습니다.` });
  } catch (error) {
    console.error("선수 제거 중 에러 발생:", error);
    return res.status(500).json({ message: "선수 제거 중 오류가 발생했습니다." });
  }
});

/** user_player(인벤토리) 조회 API */
router.get("/inventory", authMiddleware, async (req, res) => {
  const account_id = req.user.account_id;

  try {
    // 내 account_id로 내 인벤토리를 조회합니다.
    const user_player = await userDataClient.user_player.findMany({
      where: {
        account_id,
      },
    });

    // 선수 게임 데이터를 가져옵니다.
    const player = await gameDataClient.player.findMany({
      select: {
        player_id: true,
        name: true,
      },
    });

    // 만약 선수 인벤토리에 선수가 하나도 없다면, 해당 사실을 클라이언트에 전달합니다.
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
      enhancement_level: up.enhancement_level,
      name: playerMap[up.player_id] || "Unknown",
    }));

    return res.status(200).json(user_players);
  } catch (error) {
    console.error("인벤토리 조회 중 에러 발생:", error);
    return res.status(500).json({ message: "인벤토리 조회 중 오류가 발생했습니다." });
  }
});

/** 구단(club) 선수 조회 API */
router.get("/club", async (req, res) => {
  try {
    const userId = +req.query.user_id;
    const playerId = +req.query.player_id;

    //console.log("ssssss", userId, playerId);

    // query데이터로 userId가 입력되지 않았다면, 해당 사실을 클라이언트에 전달합니다.
    if (!userId) {
      return res.status(400).json({ message: "Invalid Request: user_id is required" });
    }

    // 유저의 구단 정보를 DB에서 가져옵니다.
    const club = await userDataClient.user_club.findMany({
      where: { account_id: userId },
    });

    // 만약 구단에 선수가 없다면, 해당 사실을 클라이언트에 전달합니다.
    if (club.length === 0) {
      return res.status(404).json({ message: "구단에 선수가 없습니다." });
    }

    // 내 구단 선수들의 player_id를 추출합니다.
    const playerIds = club.map((userClub) => userClub.player_id);

    // 내 구단 선수들의 정보를 선수 데이터 DB에서 가져옵니다.
    const players = await gameDataClient.player.findMany({
      where: {
        player_id: { in: playerIds },
      },
    });

    if (!playerId) {
      // 구단 선수 전체 조회
      const playersNameList = players.map((player) => player.name);
      return res.status(200).json({
        message: `선수 조회 완료`,
        playersNameList,
      });
    } else {
      // 구단 선수 상세 조회
      // 만약 입력받은 playerId가 해당 유저 구단에 존재하지 않으면, 해당 사실을 클라이언트에 전달합니다.
      if (playerIds.indexOf(playerId) === -1) {
        return res
          .status(404)
          .json({ message: `player_id: ${playerId}선수가 구단에 존재하지 않습니다.` });
      }

      const userPlayer = await userDataClient.user_club.findFirst({
        where: {
          player_id: playerId,
          account_id: userId,
        },
      });

      if (!userPlayer) {
        return res.status(404).json({ message: "구단에 해당 선수가 없습니다." });
      }

      if (userPlayer.enhancement_level === 0) {
        // 해당 선수의 정보를 선수 데이터 DB에서 가져옵니다.
        const player = await gameDataClient.player.findFirst({
          where: {
            player_id: playerId,
          },
        });
        if (!player) {
          return res.status(404).json({ message: "선수를 찾을 수 없습니다." });
        }
        return res.status(200).json({
          message: `선수 조회 완료`,
          player_info: player,
        });
      } else {
        // 해당 선수의 강화 정보 가져오기
        const enhancedPlayer = await gameDataClient.enhanced_player.findFirst({
          where: {
            player_id: playerId,
            enhancement_level: userPlayer.enhancement_level,
          },
        });

        if (!enhancedPlayer) {
          return res.status(404).json({ message: "강화된 선수를 찾을 수 없습니다." });
        }

        return res.status(200).json({
          message: `선수 조회 완료`,
          player_info: enhancedPlayer,
        });
      }
    }
  } catch (error) {
    console.error("구단 선수 조회 중 에러 발생", error);
    return res.status(500).json({ message: "구단 선수 조회 중 오류가 발생했습니다." });
  }
});

// 강화 선수 데이터 생성 (dev) 선수 0 ~ 10강까지 한번에
router.post("/enhanced_players_batch", async (req, res) => {
  const { player_id } = req.body;

  try {
    // 선수 기본 데이터 조회
    const player = await gameDataClient.player.findUnique({
      where: { player_id: player_id },
    });

    if (!player) {
      return res.status(404).json({ message: "선수가 존재하지 않습니다." });
    }

    // 강화된 선수 데이터 생성
    const enhancedPlayers = [];

    for (let i = 0; i < 11; i++) {
      const enhancement_level = i;

      // 강화 값 조회
      const increment = await gameDataClient.enhanced_value.findFirst({
        where: {
          rarity: player.rarity,
          enhancement_level: enhancement_level,
        },
      });

      if (!increment) {
        return res.status(404).json({ message: "강화 값이 존재하지 않습니다." });
      }

      const enhancedPlayer = await gameDataClient.enhanced_player.create({
        data: {
          player_id: player.player_id,
          enhancement_level: enhancement_level,
          name: player.name,
          speed: player.speed + increment.increment,
          goal_desicion: player.goal_desicion + increment.increment,
          shoot_power: player.shoot_power + increment.increment,
          defense: player.defense + increment.increment,
          stamina: player.stamina + increment.increment,
        },
      });

      enhancedPlayers.push(enhancedPlayer);
    }

    return res.status(200).json({
      message: "강화된 선수가 정상적으로 추가되었습니다.",
      enhancedPlayers,
    });
  } catch (error) {
    console.error("선수 생성 중 에러 발생", error);
    return res.status(500).json({
      message: "선수 생성 중 오류가 발생했습니다.",
      error: error.message,
    });
  }
});

// 강화 선수 데이터 생성 (dev) 선수 0 ~ 10 강까지 하나씩
router.post("/enhanced_player", async (req, res) => {
  const { player_id, enhancement_level } = req.body;

  try {
    // 선수 기본 데이터 조회
    const player = await gameDataClient.player.findUnique({
      where: { player_id: player_id },
    });

    if (!player) {
      return res.status(404).json({ message: "선수가 존재하지 않습니다." });
    }

    // 강화 값 조회
    const increment = await gameDataClient.enhanced_value.findFirst({
      where: {
        rarity: player.rarity,
        enhancement_level: enhancement_level,
      },
    });

    if (!increment) {
      return res.status(404).json({ message: "강화 값이 존재하지 않습니다." });
    }

    // 강화된 선수 데이터 생성
    const enhancedPlayer = await gameDataClient.enhanced_player.create({
      data: {
        player_id: player.player_id,
        enhancement_level: enhancement_level,
        name: player.name,
        speed: player.speed + increment.increment,
        goal_desicion: player.goal_desicion + increment.increment,
        shoot_power: player.shoot_power + increment.increment,
        defense: player.defense + increment.increment,
        stamina: player.stamina + increment.increment,
      },
    });

    return res.status(200).json({
      message: "강화된 선수가 정상적으로 추가되었습니다.",
      enhancedPlayer,
    });
  } catch (error) {
    console.error("선수 생성 중 에러 발생", error);
    return res.status(500).json({
      message: "선수 생성 중 오류가 발생했습니다.",
      error: error.message,
    });
  }
});

// 선수 강화 API
router.post("/enhance", authMiddleware, async (req, res) => {
  const { player_id, enhancement_level } = req.body;
  const userId = req.user.account_id;

  if (!player_id || !enhancement_level) {
    return res
      .status(400)
      .json({ message: "Invliad Request: player_id, enhancement_level are required" });
  }

  try {
    // 내가 가진 선수들을 내 인벤토리에서 가져옵니다.
    const myPlayers = await userDataClient.user_player.findMany({
      where: {
        account_id: +userId,
        player_id: +player_id,
      },
    });

    const enhancingPlayer = myPlayers.find(
      (player) => player.enhancement_level === +enhancement_level
    );
    const defaultPlayer = myPlayers.find((player) => player.enhancement_level === 0);

    //console.log("havePlayer", enhancingPlayer);

    // 만약 해당 강화 수치를 가진 선수가 인벤토리에 없다면, 해당 사실을 클라이언트에 전달합니다.
    if (!enhancingPlayer) {
      return res.status(404).json({ message: "인벤토리에 해당 선수가 존재하지 않습니다." });
    }

    // 필요한 카드 개수는 강화 레벨 + 1
    const requiredCardCount = +enhancement_level + 1;

    //console.log("requiredCardCount", requiredCardCount)

    // 카드 개수가 충분한지 확인
    // 0레벨 강화인 경우 최소 2개 필요, 1레벨 이상 강화인 경우 최소 레벨+1개 필요.
    if (
      !defaultPlayer ||
      (+enhancement_level === 0 && defaultPlayer.count < 2) ||
      defaultPlayer.count < requiredCardCount
    ) {
      return res.status(400).json({ message: "강화에 필요한 선수 카드가 부족합니다." });
    }

    // ---------- 강화에 따른 인벤토리 변경 -----------

    const updatedPlayer = await userDataClient.$transaction(async (tx) => {
      // 강화된(+1) 카드를 하나 추가. 레코드가 있으면 수량 1 증가, 없으면 레코드 새로 생성
      const updatedPlayer = await tx.user_player.upsert({
        where: {
          account_id_player_id_enhancement_level: {
            account_id: userId,
            player_id: +player_id,
            enhancement_level: +enhancement_level + 1,
          },
        },
        update: {
          count: { increment: 1 },
        },
        create: {
          account_id: userId,
          player_id: +player_id,
          enhancement_level: +enhancement_level + 1,
          count: 1,
        },
      });

      // 강화가 되었으니 강화로 사용한 타켓 카드는 수량 1 감소, 0이되면 레코드 삭제
      if (
        myPlayers.find(
          (player) => player.enhancement_level === +enhancement_level && player.count > 1
        )
      ) {
        await tx.user_player.update({
          where: {
            account_id_player_id_enhancement_level: {
              account_id: userId,
              player_id: +player_id,
              enhancement_level: +enhancement_level,
            },
          },
          data: {
            count: { decrement: 1 },
          },
        });
      } else {
        await tx.user_player.delete({
          where: {
            account_id_player_id_enhancement_level: {
              account_id: userId,
              player_id: +player_id,
              enhancement_level: +enhancement_level,
            },
          },
        });
      }

      // dmadmadma
      const dp = await tx.user_player.findFirst({
        where: {
          account_id: +userId,
          player_id: +player_id,
          enhancement_level: 0,
        },
      });

      // 강화 재료로 사용한 카드(+0강) 수량 사용한 만큼 감소, 0이되면 레코드 삭제
      if (dp.count > requiredCardCount) {
        await tx.user_player.update({
          where: {
            account_id_player_id_enhancement_level: {
              account_id: userId,
              player_id: +player_id,
              enhancement_level: 0,
            },
          },
          data: {
            count: { decrement: requiredCardCount },
          },
        });
      } else {
        await tx.user_player.delete({
          where: {
            account_id_player_id_enhancement_level: {
              account_id: userId,
              player_id: +player_id,
              enhancement_level: 0,
            },
          },
        });
      }

      return updatedPlayer;
    });

    // 강화 성공 여부에 따라 응답을 다르게 처리할 수 있습니다.
    // 예시로 성공 시에는 성공 메시지와 강화된 선수 데이터를 응답합니다.
    return res.status(200).json({
      message: "강화가 성공적으로 완료되었습니다.",
      updatedPlayer: updatedPlayer,
    });
  } catch (error) {
    console.error("Error enhancing player:", error);
    return res.status(500).json({ message: "강화 중 오류가 발생했습니다." });
  }
});

/** 랭크 매치 시스템 함수
 * @params myUserInfo: 내 유저 정보
 * @returns: 상대 구단 정보(opponentClub)
 * */
const find_opponent = async (myUserInfo) => {
  let ratingRange = 100; // 초기 레이팅 범위
  const rating = myUserInfo.rank_score; // 내 레이팅 점수
  const myAccountId = myUserInfo.account_id; // 내 계정 id

  console.log("rating, myAccountId", rating, myAccountId);
  // 내 레이팅의 -1000~+1000인 상대를 찾습니다.
  // 상대를 찾았다면 상대 구단 정보를 반환하고, 더 이상 찾지 않고 while문을 종료합니다.
  while (ratingRange <= 1600) {
    // 현재 레이팅 범위에 상대가 있는지 찾는다(당연히 나는 제외).
    const opponentUserList = await userDataClient.user_info.findMany({
      where: {
        NOT: {
          account_id: myAccountId,
        },
        rank_score: {
          gte: rating - ratingRange > 0 ? rating - ratingRange : 0,
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

      console.log("랜덤이 문제였니???", opponentUserList, randomValue, opponentClub);
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
      return res
        .status(404)
        .json({ message: "내 완성된 구단이 없습니다. 완성된 구단을 편성해주세요" });
    }

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
      if (play_mode === "rank") {
        // 랭크 모드인 경우
        // 랭크 상대를 찾습니다.
        const opponentClub = await find_opponent(myUserInfo);

        //console.log("async 접근 완료. 상대 구단 정보:", opponentClub);

        // 랭크 상대를 찾지 못했다면, 해당 사실을 메세지에 저장해 반환하고,
        // 랭크 상대를 찾았다면, 랭크 상대 구단 정보를 반환합니다.
        if (!opponentClub) return [opponentClub, "현재 매칭 가능한 상대가 없습니다..."];
        else return [opponentClub, "매칭 상대 발견!"];
      } else if (play_mode === "custom") {
        // 커스텀 모드인 경우
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
          return [
            undefined,
            `해당 유저(user_id : ${user_id}) 또는 유저가 편성한 완성된 구단이 존재하지 않습니다.`,
          ];
        }

        // 상대를 찾았다면 상대 구단 정보와 찾았다는 메세지를 반환합니다.
        return [opponentClub, "매칭 상대 발견!"];
      } else {
        // 그 외 모드를 입력한 경우
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
      const playerInfos = [];

      // 클럽에 존재하는 선수 데이터를 가져옵니다.
      for (const player of club) {
        const playerInfo = await gameDataClient.enhanced_player.findFirst({
          where: {
            player_id: player.player_id,
            enhancement_level: player.enhancement_level,
          },
        });

        playerInfos.push(playerInfo);
      }

      // Test용
      // console.log(playerInfos);

      // 스텟 가중치 설정.
      const weight = {
        speed: 0.1,
        goal_decision: 0.25,
        shoot_power: 0.15,
        defense: 0.3,
        stamina: 0.2,
      };

      let totalScore = 0.0;

      // 가중치에 따른 선수 점수를 계산하고 구단 총 점수를 계산합니다.
      playerInfos.forEach((player) => {
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
    // 최대 설정한 골 시도 횟수(goalTries)만큼 반복합니다.
    let totalScore = myClubScore + opponentClubScore; // 나의 구단 총 점수 + 상대 구단 총 점수

    console.log("myClubScore", myClubScore / totalScore);
    console.log("opponentClubScore", opponentClubScore / totalScore);

    let myGameScore = 0,
      opponentGameScore = 0; // 내 골 점수, 상대 골 점수
    const maxGoals = 10; // 최대 골 시도 횟수
    let goalTries = Math.floor(Math.random() * maxGoals); // 지금 게임 최대 골 랜덤 설정
    //console.log(goalTries);
    for (let goal_try = 0; goal_try < goalTries; goal_try++) {
      const randomValue = Math.random() * totalScore;
      if (randomValue < myClubScore) myGameScore++;
      else opponentGameScore++;
    }

    // Test용
    // console.log("sssssss", myGameScore, opponentGameScore);

    const opponentAccount = await userDataClient.account.findFirst({
      where:{
        account_id: opponentClub[0].account_id
      }
    });

    const opponentUserInfo = await userDataClient.user_info.findFirst({
      where:{
        account_id: opponentClub[0].account_id
      }
    })


    // 게임 결과를 정산하고, 결과에 따른 메세지를 gameResult에 저장합니다.
    const gameResult = {};
    gameResult.opponent = `상대: ${opponentAccount.username}, account_id: ${opponentAccount.account_id}`;
    gameResult.myGoalRate = myClubScore / totalScore;
    gameResult.OppGoalRate = opponentClubScore / totalScore;
    if (myGameScore > opponentGameScore) {
      // 나의 승리
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

            //console.log("opponentClubopponentClub", opponentClub);
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
                  decrement: opponentUserInfo.rank_score - 100 >= 0 ? 100 : 0,
                },
              },
            });

            return [updatedMyInfo, updatedOpponentInfo];
          }
        );

        // Test용
        // console.log("updatedMyInfo, updatedOpponentInfo", updatedMyInfo, updatedOpponentInfo);
        gameResult.rank_score = `랭크 점수 ${updatedMyInfo.rank_score}으로 100 상승`;
      }
    } else if (myGameScore < opponentGameScore) {
      // 나의 패배
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
                  decrement: myUserInfo.rank_score - 100 >= 0 ? 100 : 0,
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
        gameResult.rank_score = `랭크 점수 ${updatedMyInfo.rank_score}으로 100 하락...`;
      }
    } else {
      // 무승부
      gameResult.result = `무승부 ${myGameScore} : ${opponentGameScore}`;

      // 랭크모드일 경우, 게임 결과에 따라 유저 정보를 수정합니다.
      if (play_mode === "rank") {
        // 상대와 내 무승부 횟수를 1 증가시킵니다.
        const updatedInfos = await userDataClient.user_info.updateMany({
          where: {
            account_id: {
              in: [myClub[0].account_id, opponentClub[0].account_id],
            },
          },
          data: {
            draws: {
              increment: 1,
            },
          },
        });
        gameResult.rank_score = `랭크 점수 ${myUserInfo.rank_score}으로 변동없음`;

        //console.log(myUserInfo);
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

/** 유저 정보 조회 API */
router.get("/user/:username", async (req, res) => {
  const { username } = req.params;
  console.log(username);
  if (!username) {
    return res.status(400).json({ message: "Bad Request: username is required" });
  }

  try {
    // 입력받은 username을 가지는 계정 정보를 DB에서 가져옵니다.
    const account = await userDataClient.account.findFirst({
      where: {
        username,
      },
    });

    // 만약 계정이 존재하지 않다면, 해당 사실을 클라이언트에 전달합니다.
    if (!account) {
      return res.status(404).json({ message: "해당 이름을 가진 계정이 존재하지 않습니다" });
    }

    // 해당 계정의 유저 정보를 DB에서 가져옵니다.
    const user_info = await userDataClient.user_info.findFirst({
      where: {
        account_id: account.account_id,
      },
    });

    return res.status(200).json({
      message: `유저 정보 조회 완료`,
      user_info: user_info,
    });
  } catch (error) {
    console.error("유저 정보 조회 중 에러 발생", error);
    return res.status(500).json({ message: "유저 정보 조회 중 오류가 발생했습니다." });
  }
});

// 강화 수치 생성 API(dev)
router.post("/increment", async (req, res, next) => {
  const { rarity, enhancement_level, increment } = req.body;
  console.log("any");
  try {
    const createdIncrement = await gameDataClient.enhanced_value.create({
      data: {
        rarity,
        enhancement_level,
        increment,
      },
    });

    return res.status(200).json({ message: "강화 수치를 정상적으로 생성했습니다." });
  } catch (error) {
    console.error("강화 수치 생성 중 오류:", error);
    return res.status(500).json({ message: "강화 수치 생성 중 오류가 발생했습니다." });
  }
});
export default router;
