"use strict";
/**
 * Router file
 * index.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserRouter_1 = require("../components/Users/UserRouter");
const OtpRouter_1 = require("../components/Otp/OtpRouter");
const LoginRouter_1 = require("../components/Login/LoginRouter");
const UploadRouter_1 = require("../components/Upload/UploadRouter");
const router = (0, express_1.Router)();
router.use("/v1/users", UserRouter_1.default);
router.use("/v1/otp", OtpRouter_1.default);
router.use("/v1/login", LoginRouter_1.default);
router.use("/v1/upload", UploadRouter_1.default);
exports.default = router;
