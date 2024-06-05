import express from "express";
import cookieParser from "cookie-parser";
import GameRouter from "./routes/game.router.js";
import UsersRouter from "./routes/user.router.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('./assets'));

const router = express.Router();

router.get('/', (req, res) => {
  return res.json({ message: 'Welcome to our futsal Online!!' });
});

app.use("/api", [router, GameRouter, UsersRouter]);

app.listen(PORT, () => {
  console.log(PORT, "포트로 서버가 열렸어요!");
});
