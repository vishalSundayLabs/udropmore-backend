/**
 * userRouter.ts
 */

import { Router } from "express";
import { verifyToken } from "../../middleware/tokenVerify";
import * as userController from "./UserController";

const router = Router();

router.get('/find', verifyToken, userController.getUser)
router.put('/update', verifyToken, userController.userUpdate)

export default router;
