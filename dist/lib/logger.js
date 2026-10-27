"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// pino: thư viện logging => nhanh ,nhẹ
const pino_1 = __importDefault(require("pino"));
const env_1 = require("../config/env");
const logger = (0, pino_1.default)({
    level: env_1.envConfig.logLevel, // Chỉ hiển thị log các level cao hơn
    redact: {
        // che dữ liệu nhạy cảm
        paths: ["req.headers.cookie"],
    },
    transport: env_1.envConfig.isProduction
        ? undefined
        : {
            target: "pino-pretty",
            options: { colorize: true, translateTime: "SYS:HH:MM:ss" },
        },
});
exports.default = logger;
