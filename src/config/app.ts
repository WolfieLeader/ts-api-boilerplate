import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";

import appRoute from "../routes/appRoute";

import { errorMiddleware } from "../error/errorMiddleware";

const app: Application = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

app.use("/", appRoute);

app.use(errorMiddleware);

export default app;
