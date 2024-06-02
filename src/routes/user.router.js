import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { userDataClient } from "../utils/prisma/index.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

// 회원가입 API (임시)
router.post("/sign-up", async (req, res, next) => {
  try {
    const { account_id, username, password } = req.body;
    const isExistUser = await userDataClient.account.findFirst({
      where: {
        username,
      },
    });

    if (isExistUser) {
      return res.status(409).json({ message: "이미 존재하는 아이디입니다." });
    }

    const user = await userDataClient.account.create({
      data: {
        account_id,
        username,
        password,
      },
    });

    return res.status(200).json({ message: "회원가입 완료." });
  } catch (error) {
    console.error("회원가입 중 에러 발생:", error);
    return res.status(500).json({ message: "회원가입 중 에러가 발생하였습니다." });
  }
});

// 로그인 API (임시)
router.post("/sign-in", async (req, res, next) => {
  try {
    const { account_id, password } = req.body;

    const user = await userDataClient.account.findFirst({ where: { account_id } });

    if (!user) return res.status(401).json({ message: "존재하지 않는 아이디입니다." });
    console.log(process.env.JWT_SECRET_KEY);
    const token = jwt.sign(
      {
        userId: user.id,
      },
      "customized_secret_key"
    );

    return res.status(200).json({ message: "로그인 성공", token:`Bearer ${token}` });
  } catch (error) {
    console.error("로그인 중 에러 발생:", error);
    return res.status(500).json({ message: "로그인 중 에러가 발생하였습니다." });
  }
});

export default router;
