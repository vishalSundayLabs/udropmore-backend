/**
 * otpRouter.ts
 */

import { Router } from "express";
import { verifyToken } from "../../middleware/tokenVerify";
import * as AuthController from "./AuthController";

const router = Router();
//send otp
router.post("/sendotp", AuthController.sendOtp);
//verify the otp
router.post('/verifyOtp', AuthController.validateOtp);
//logout
router.put("/logout", verifyToken, AuthController.logout)

export default router;
