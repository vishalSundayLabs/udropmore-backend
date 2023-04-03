/**
 * otpRouter.ts
 */

import { Router } from "express";
import * as path from "path";
import * as otpController from "./AuthController";

const router = Router();

router.post("/resend", otpController.resendOtp);

export default router;
