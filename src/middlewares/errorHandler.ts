import { NextFunction, Request, Response } from "express";
import logger from "../lib/logger";

export function errorHandler(
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction, // _next la bien bat buoc co mat nhung khong dung
): void {
  logger.error({ error }, "Unhandled error");
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
}
