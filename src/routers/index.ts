/**
 * Router file
 * index.ts
 */

import { Router } from "express";
import userRouter from "../components/Users/UserRouter";
import otpRouter from "../components/Otp/OtpRouter";
import loginRouter from "../components/Login/LoginRouter";

const router = Router();

router.use("/v1/users", userRouter);
router.use("/v1/otp", otpRouter);
router.use("/v1/login", loginRouter);

export default router;
