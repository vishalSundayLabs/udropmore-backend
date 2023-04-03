/**
 * Router file
 * index.ts
 */

import { Router } from "express";
import userRouter from "../components/Users/UserRouter";
import otpRouter from "../components/Auth/AuthRouter";


const router = Router();

router.use("/v1/users", userRouter);
router.use("/v1/otp", otpRouter);

export default router;
