"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
const logger_1 = __importDefault(require("../lib/logger"));
function errorHandler(error, _req, res, _next) {
    logger_1.default.error({ error }, "Unhandled error");
    res.status(500).json({
        success: false,
        message: "Internal Server Error",
    });
}
