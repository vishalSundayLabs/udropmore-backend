"use strict";
/**
 * otpRouter.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tokenVerify_1 = require("../../middleware/tokenVerify");
const AuthController = require("./AuthController");
const router = (0, express_1.Router)();
//send otp
router.post("/sendotp", AuthController.sendOtp);
//verify the otp
router.post('/verifyOtp', AuthController.validateOtp);
//logout
router.put("/logout", tokenVerify_1.verifyToken, AuthController.logout);
exports.default = router;
