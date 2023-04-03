/**
 * userRouter.ts
 */

import { Router } from "express";
import { decodeToken, refreshToken } from "../../helpers/JwtHelper";
import * as userController from "./UserController";

const router = Router();

router.post("/SignUp", userController.SignUp);
router.get("/", decodeToken, userController.getUser);

export default router;
