"use strict";
/**
 * userRouter.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// import { decodeToken, refreshToken } from "../../helpers/JwtHelper";
const userController = require("./UserController");
const router = (0, express_1.Router)();
router.post("/SignUp", userController.SignUp);
// router.get("/", decodeToken, userController.getUser);
exports.default = router;
