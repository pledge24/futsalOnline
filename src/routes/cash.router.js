const express = require("express");
const { userPrisma } = require("../utils/prisma/index.js");
const authMiddleware = require("../middleware/auth.middleware");

const router = express.Router();
const Characters = userPrisma.characters;
const CashTransactions = userPrisma.cashTransactions; // 가상의 테이블로 충전 기록을 저장하는 예제

// 캐쉬 충전 엔드포인트
router.patch("/shop/charge/:Character_Id", authMiddleware, async (req, res) => {
  const Character_Id = +req.params.Character_Id;
  const { amount } = req.body; // 충전할 금액을 요청 본문에서 가져옵니다.

  if (!amount || typeof amount !== 'number' || amount <= 1000) {
    return res.status(400).json({ errorMessage: "충전 금액은 1,000원 보다 큰 숫자여야 합니다." });
  }

  try {
    // 캐쉬 충전
    const newBalance = character.cash + amount;

    await userClient.userinfo.update({
      data: {
        cash: newBalance,
      },
      where: {
        Character_Id,
      },
    });


    return res.status(200).json({
      message: `캐쉬가 성공적으로 충전되었습니다.`,
      newBalance: newBalance,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ errorMessage: "서버 오류가 발생했습니다. 나중에 다시 시도해주세요." });
  }
});

module.exports = router;
