import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { userDataClient } from "../utils/prisma/index.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import { validateID } from "../middlewares/userValidate.js";
import { validatePassword } from "../middlewares/userValidate.js";
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

// 회원가입 API (임시)
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
        username,
        password: hashedPassword,
        user_info: {
          create: {
            rank_score: 1000,
            wins: 0,
            loses: 0,
            draws: 0,
            money: 10000,
            have_club: false
          }
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
      type:"JWT",
      user_id: account.account_id,
    },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn:'60m', // 60분 후 만료
    }
  );

    
    return res.status(200).json({ message: "로그인" , authorization : `Bearer ${token}`});
  } catch (error) {
    console.error("로그인에 오류 발생!", error);
    return res.status(500).json("Server Error: 500");
  }
});

export default router;
