"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const env_1 = require("./config/env");
const logger_1 = __importDefault(require("./lib/logger"));
const app = (0, app_1.createApp)();
app.listen(env_1.envConfig.port, () => {
    logger_1.default.info(`Server is running on port ${env_1.envConfig.port}`);
});
