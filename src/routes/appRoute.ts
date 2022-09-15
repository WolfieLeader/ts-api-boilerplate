import express from "express";
import { sendMessage } from "../controllers";

const appRoute = express.Router();

appRoute.get("/", sendMessage);

export default appRoute;
