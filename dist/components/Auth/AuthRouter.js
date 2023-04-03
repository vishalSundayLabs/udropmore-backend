"use strict";
/**
 * otpRouter.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const otpController = require("./AuthController");
const router = (0, express_1.Router)();
router.post("/resend", otpController.resendOtp);
exports.default = router;
