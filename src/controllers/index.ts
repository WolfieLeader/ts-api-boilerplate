import { Request, Response } from "express";
import CError from "../error/CError";

export const sendMessage = (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello World" });
};

export const causeError = (req: Request, res: Response) => {
  throw new CError("This is an error", 418);
};
