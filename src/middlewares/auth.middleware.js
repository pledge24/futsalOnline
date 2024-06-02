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

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY );
    const userId = decodedToken.userId;

    //console.log(accountId);

    const account = await userDataClient.account.findFirst({
      where: { userId },
    });
    if (!account) {
      //res.clearCookie('authorization');
      throw new Error('토큰 사용자가 존재하지 않습니다.');
    }

    // req.account에 사용자 정보를 저장합니다.
    req.account = account;

    next();
  } catch (error) {
    // res.clearCookie('authorization');

    // 토큰이 만료되었거나, 조작되었을 때, 에러 메시지를 다르게 출력합니다.
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