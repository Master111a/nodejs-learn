// pino: thư viện logging => nhanh ,nhẹ
import pino from "pino";
import { envConfig } from "../config/env";

const logger = pino({
  level: envConfig.logLevel, // Chỉ hiển thị log các level cao hơn
  redact: {
    // che dữ liệu nhạy cảm
    paths: ["req.headers.cookie"],
  },
  transport: envConfig.isProduction
    ? undefined
    : {
        target: "pino-pretty",
        options: { colorize: true, translateTime: "SYS:HH:MM:ss" },
      },
});

export default logger;
