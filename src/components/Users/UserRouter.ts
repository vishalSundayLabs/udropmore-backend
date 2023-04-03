/**
 * userRouter.ts
 */

import { Router } from "express";
import * as userController from "./UserController";

const router = Router();

router.post("/SignUp", userController.SignUp);

export default router;
