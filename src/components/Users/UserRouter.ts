/**
 * userRouter.ts
 */

import { Router } from "express";
import { isAdmin } from "../../middleware/isAdmin";
import { verifyToken } from "../../middleware/tokenVerify";
import * as userController from "./UserController";

const router = Router();
//find all user 
router.get('/find', verifyToken, userController.getUser)
//update user
router.put('/update/:id', verifyToken, isAdmin, userController.userUpdate)
//update mother
router.put('/updateMother', verifyToken, userController.updateMother)
//create new user
router.post('/createuser', verifyToken, isAdmin, userController.createUser)
//delete user
router.delete('/delete/:id', verifyToken, isAdmin, userController.deleteUser)
//get slots
router.post('/slots', userController.getSolts)
//get all users
router.post('/getAllUsers', verifyToken, userController.getAllUsers)
export default router;
