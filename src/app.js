import express from "express";
import GameRouter from "./routes/game.router.js";
import UserRouter from "./routes/user.router.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api", [GameRouter, UserRouter]);

app.listen(PORT, () => {
  console.log(PORT, "포트로 서버가 열렸어요!");
});
