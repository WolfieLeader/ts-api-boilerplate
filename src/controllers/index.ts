import { Request, Response } from "express";

export const sendMessage = (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello World" });
};
