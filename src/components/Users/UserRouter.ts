/**
 * userRouter.ts
 */

import { Router } from "express";
import { decodeToken } from "../../helpers/JwtHelper";
import * as userController from "./UserController";

const router = Router();

router.post("/", userController.createUser);
router.get("/", decodeToken, userController.getUser);

export default router;
