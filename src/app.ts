import cors from "cors";
import express from "express";
import { errorHandler } from "./middlewares/errorHandler";
import { notFoundHandler } from "./middlewares/notFound";
import rootRouter from "./routes";

export function createApp() {
  const app = express();

  app.use(cors());
  // parse body của request => object
  app.use(express.json());

  // parse body của request => object (cho phép chứa cả file)
  app.use(express.urlencoded({ extended: true }));

  // Routes
  app.use("/api", rootRouter);

  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}
