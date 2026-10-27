import { Router } from "express";

const adminRouter = Router();

adminRouter.get("/admin", (_req, res) => {
  res.send("Admin");
});

export default adminRouter;
