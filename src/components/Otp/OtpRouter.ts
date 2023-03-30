/**
 * otpRouter.ts
 */

import { Router } from "express";
import * as path from "path";
import * as otpController from "./OtpController";

const router = Router();

router.post("/", otpController.confirmOtp);
router.post("/resend", otpController.resendOtp);

export default router;
