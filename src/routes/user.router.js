import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { userDataClient } from "../utils/prisma/index.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import { validateID } from "../middlewares/userValidate.js";
import { validatePassword } from "../middlewares/userValidate.js";
import dotenv from "dotenv";


dotenv.config();

const router = express.Router();

// 회원가입 API
router.post("/sign-up", validateID, validatePassword, async (req, res, next) => {
  try {
    const { account_id, username, password, confirmPassword } = req.body;
    const isExistUser = await userDataClient.account.findFirst({
      where: {
        username,
      },
    });

    if (isExistUser) {
      return res.status(409).json({ message: "이미 존재하는 아이디입니다." });
    }

    // 비밀번호 암호화
    const hashedPassword = await bcrypt.hash(password, 10);
    // 비밀번호 확인
    if (password !== confirmPassword)
      return res.status(409).json({ message: "비밀번호 확인이 일치하지 않습니다." });

    // 계정 생성

    const account = await userDataClient.account.create({
      data: {
        account_id,
        username,
        password: hashedPassword,
        user_info:{
          create:{account_id}
        }
      }
    });

    return res.status(201).json({ message: "회원가입이 완료되었습니다." });
  } catch (error) {
    console.error("회원가입 중 에러 발생:", error);
    return res.status(500).json({ message: "회원가입 중 에러가 발생하였습니다." });
  }
});

// / 로그인 API /
router.post("/sign-in", async (req, res, next) => {
  try {
    // 요청받은 데이터 accountId, accountPassword를 저장합니다.
    const { username, password } = req.body;
    // 해당 계정 id와 일치하는 계정 id가 있는지 DB에서 찾아봅니다.
    const account = await userDataClient.account.findFirst({
      where: { username },
    });
    // 해당 계정id가 DB에 존재하지 않는 계정id라면, 해당 사실을 알립니다.
    if (!account) return res.status(401).json({ message: "존재하지 않는 계정입니다." });
    // 입력받은 사용자의 비밀번호와 데이터베이스에 저장된 비밀번호를 비교합니다.
    else if (!(await bcrypt.compare(password, account.password)))
      return res.status(401).json({ message: "비밀번호가 일치하지 않습니다." });

    // jwt token 생성
    const token = jwt.sign(
      {
        type: "JWT",
        user_id: account.account_id,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "60m", // 60분 후 만료
      }
    );

    return res.status(200).json({ 
      message: "로그인", 
      authorization: `Bearer ${token}`,
      acocunt_id: account.account_id
    });
  } catch (error) {
    console.error("로그인에 오류 발생!", error);
    return res.status(500).json("Server Error: 500");
  }
});

/**랭킹 api*/
router.get("/ranking", async (req, res) => {
  try {
    //userRank 배열에 10명의 점수가 가장 높은 유저부터 정렬해서 배치함
    const userRank = await userDataClient.user_info.findMany({
      orderBy: {
        rank_score: 'desc'
      },
      take: 10,
      include:{
        account:{
          select:{
          username:true
          }
        }
      }
    });
    //유저 정보 10개가 저장된 배열을 맵으로 펴서 승률을 연산하고, 정보가 알맞은 순서로 나타나게 지정한다.
    //전적이 없으면 승률을 0.00%로 지정, 전적이 있으면 승리 횟수를 총 게임 횟수로 나눠서 100을 곱해서,
    //출력할 떄 소숫점 두자리까지 표시하고 뒤에 %를 붙여서 출력하게 지정한다.
    const rankedUsers = userRank.map((user, index)=>{
      const totalGames = user.wins + user.draws + user.loses;
      // 승률 계산
      const winRate = totalGames > 0 ? (user.wins / totalGames) * 100 : 0;
      return {
      rank: index +1,
      username:user.account.username,
      rank_score:user.rank_score,
      winRate: winRate.toFixed(2) +"%",//소숫점 2자리까지 표시
      win:user.wins,
      draws:user.draws,
      loses:user.loses
    };
    });

    res.status(200).json(rankedUsers); 
  } catch (error) {
    console.error("랭크를 가져오는 중 오류가 발생했습니다.", error);
    res.status(500).json({ error: "서버에서 오류가 발생했습니다." }); 
  }
});



// 캐쉬 충전 엔드포인트
router.patch("/payment", authMiddleware, async (req, res) => {


  const { amount } = req.body; // 충전할 금액을 요청 본문에서 가져옵니다.
  const userId= req.user.account_id;//유저 아이디를 미들웨어에서 가져옵니다.

  //충전 금액 유효성 검사
  if (!amount || amount < 1000) {
    return res.status(400).json({ errorMessage: "충전 금액은 1,000원보다 큰 숫자여야 합니다." });
  }

  try {
    const account = await userDataClient.user_info.findUnique({
      where: { account_id: userId },
  });

    if (!account) {
      return res.status(404).json({ errorMessage: "캐릭터를 찾을 수 없습니다." });
    }
    
    // 캐쉬 충전
    const chargedCash = Math.floor(amount / 10);

    const updatedUserInfo =await userDataClient.user_info.update({
      data: {
        money: {
          increment:chargedCash
        },
      },
      where: {
        account_id:userId,
      },
      
    });

    return res.status(200).json({
      message: `${chargedCash}이 충전되었습니다.`,
      gamemoney: updatedUserInfo.money
    });
    
  } catch (error) {
    console.error("캐쉬를 가져오는 중 오류가 발생했습니다.", error);
    res.status(500).json({ error: "서버에서 오류가 발생했습니다." }); 
  }
});


export default router;
