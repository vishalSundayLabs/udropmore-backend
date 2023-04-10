/**
 * userRouter.ts
 */

import { Router } from "express";
import { isAdmin } from "../../middleware/isAdmin";
import { verifyToken } from "../../middleware/tokenVerify";
import * as userController from "./UserController";

const router = Router();

router.get('/find', verifyToken, userController.getUser)
router.put('/update', verifyToken, userController.userUpdate)
router.post('/createuser', verifyToken, isAdmin , userController.createUser)

export default router;
