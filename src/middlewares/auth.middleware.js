// import jwt from "jsonwebtoken";
// import { userDataClient } from "../utils/prisma/index.js";

// export default async function (req, res, next) {
//   try {
//     const { authorization } = req.headers;
//     if (!authorization) throw new Error("토큰이 존재하지 않습니다.");

//     const [tokenType, token] = authorization.split(" ");

//     if (tokenType !== "Bearer") throw new Error("토큰 타입이 일치하지 않습니다.");

//     const decodedToken = jwt.verify(token, "jwt-secret");
//     const userId = decodedToken.userId;

//     const user = await userDataClient.account.findFirst({
//       where: { id: +userId },
//     });
//     if (!user) {
//       throw new Error("토큰 사용자가 존재하지 않습니다.");
//     }
//     req.user = user;

//     next();
//   } catch (error) {
//     switch (error.name) {
//       case "TokenExpiredError":
//         return res.status(401).json({ message: "토큰이 만료되었습니다." });
//       case "JsonWebTokenError":
//         return res.status(401).json({ message: "토큰이 조작되었습니다." });
//       default:
//         return res.status(401).json({ message: error.message ?? "비정상적인 요청입니다." });
//     }
//   }
// }


import jwt from 'jsonwebtoken';
import { userDataClient } from "../utils/prisma/index.js";
import dotenv from 'dotenv';

dotenv.config();

export default async function (req, res, next) {
  try {
    // 요청 헤더에 존재하는 Authorization 데이터를 저장합니다.
    const { authorization } = req.headers;

    //console.log(req.headers);
    //console.log(authorization);

    // 만약 Authorization 데이터가 존재하지 않는다면, 해당 사실을 반환합니다.
    if (!authorization) throw new Error('로그인이 필요합니다.');

    const [tokenType, token] = authorization.split(' ');

    if (tokenType !== 'Bearer')
      throw new Error('토큰 타입이 일치하지 않습니다.');

    const decodedToken = jwt.verify(token, "jwt-secret");

    console.log("decodedToken:", decodedToken);

    const userId = decodedToken.userId;
    const user = await userDataClient.account.findFirst({
      where: { account_id: userId },
    });

    console.log("user:", user);

    if (!user) {
      res.clearCookie("authorization");
      throw new Error("토큰 사용자가 존재하지 않습니다.");
    }

    // req.account에 사용자 정보를 저장합니다.
    req.account = account;

    next();
  } catch (error) {
    console.error("Error in authMiddleware:", error);

    res.clearCookie("authorization");
    switch (error.name) {
      case 'TokenExpiredError':
        return res.status(401).json({ message: '토큰이 만료되었습니다.' });
      case 'JsonWebTokenError':
        return res.status(401).json({ message: '토큰이 조작되었습니다.' });
      default:
        return res
          .status(401)
          .json({ message: error.message ?? '비정상적인 요청입니다.' });
    }
  }
}