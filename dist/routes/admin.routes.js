"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const adminRouter = (0, express_1.Router)();
adminRouter.get("/admin", (_req, res) => {
    res.send("Admin");
});
exports.default = adminRouter;
