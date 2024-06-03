import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { userDataClient } from "../utils/prisma/index.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import { validateID } from "../middlewares/userValidate.js";
import { validatePassword } from "../middlewares/userValidate.js";

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
      return res
        .status(409)
        .json({ message: "비밀번호 확인이 일치하지 않습니다." });

     // 계정 생성
     const [account, userInfo] = await userDataClient.$transaction(
      async (tx) => {
        const account = await tx.account.create({
          data: {
            account_id,
            username,
            password: hashedPassword,
          },
        });

        // UserInfos에 데이터 생성
        const userInfo = await tx.userInfos.create({
          data: {
            account_id: account.account_id,
          },
        });
        return [account, userInfo];
      },
      {
        isolationLevel: Prisma.TransactionIsolationLevel.ReadCommitted,
      }
    );
    return res.status(201).json({ message: "회원가입이 완료되었습니다." });
  } catch (error) {
    console.error("회원가입 중 에러 발생:", error);
    return res.status(500).json({ message: "회원가입 중 에러가 발생하였습니다." });
  }
});

// 로그인 API (임시)
router.post("/sign-in", async (req, res, next) => {
  try {
    const { account_id, password } = req.body;

   // 존재하는 계정인지 체크
   const account = await userDataClient.account.findFirst({
    where: { account_id },
  });
  if (!account)
    return res.status(401).json({ message: "존재하지 않는 계정입니다." });
  // 비밀번호 맞는지 체크
  if (!(await bcrypt.compare(password, account.password)))
    return res.status(401).json({ message: "비밀번호가 일치하지 않습니다." });

  // jwt token 생성
  const token = jwt.sign(
    {
      account: account_id,
    },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn:'60m',
    }
  );

    
    return res.status(200).json({ message: "로그인" , authorization : `Bearer ${token}`});
  } catch (error) {
    console.error("로그인 중 에러 발생:", error);
    return res.status(500).json({ message: "로그인 중 에러가 발생하였습니다." });
  }
});

export default router;
