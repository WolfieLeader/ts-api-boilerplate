import express from "express";
import { protect } from "../error/errorMiddleware";
import { causeError, sendMessage } from "../controllers";

const appRoute = express.Router();

appRoute.get("/", protect(sendMessage));
appRoute.get("/error", protect(causeError));

export default appRoute;
