import { Router } from "express";
import adminRouter from "./admin.routes";

const rootRouter = Router();

rootRouter.use(adminRouter);

export default rootRouter;
