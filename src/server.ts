import { createApp } from "./app";
import { envConfig } from "./config/env";
import logger from "./lib/logger";

const app = createApp();

app.listen(envConfig.port, () => {
  logger.info(`Server is running on port ${envConfig.port}`);
});
