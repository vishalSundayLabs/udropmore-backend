/**
 * userRouter.ts
 */

import { Router } from "express";
import { verifyToken } from "../../middleware/tokenVerify";
import * as userController from "./UserController";

const router = Router();

//update user
router.put('/update/:userId', userController.userUpdate)
//create new user
router.post('/createuser', userController.createUser)
router.get("/list", userController.getUserList)
//user list
router.get("/:userId",userController.getUserById)
router.get("/wallet/balance/:userId", userController.getUserWalletBalance)

export default router;
