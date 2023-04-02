"use strict";
/**
 * userRouter.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const JwtHelper_1 = require("../../helpers/JwtHelper");
const userController = require("./UserController");
const router = (0, express_1.Router)();
router.post("/SignUp", userController.SignUp);
// router.post("/Login",refreshToken,userController)
router.get("/", JwtHelper_1.decodeToken, userController.getUser);
exports.default = router;
