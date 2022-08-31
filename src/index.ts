import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use(morgan("dev"));

app.get("/", async (req: Request, res: Response) => {
  try {
    res.status(200).json({ message: "Hello World" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

app.listen(PORT, () => console.log(`⚡Server is running on http://localhost:${PORT}/`));
