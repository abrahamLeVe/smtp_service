import { Request, Response, NextFunction } from "express";

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { token } = req.body;
  
  const correctToken = process.env.SMTP_TOKEN!;

  if (!token || token !== correctToken) {
    return res.status(401).json({ error: "Autenticación fallida" });
  }

  next();
};
