/**
 * userRouter.ts
 */

import { Router } from "express";
import { decodeToken, refreshToken } from "../../helpers/JwtHelper";
import * as userController from "./UserController";

const router = Router();

router.post("/SignUp", userController.SignUp);
// router.post("/Login",refreshToken,userController)
router.get("/", decodeToken, userController.getUser);

export default router;
