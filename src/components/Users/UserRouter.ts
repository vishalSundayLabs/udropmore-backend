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
//get user by id
router.get('/user/:id', verifyToken, userController.getUserById)
//update user
router.put('/update/:id', verifyToken, isAdmin, userController.userUpdate)
//update mother
router.put('/updateMother', verifyToken, userController.updateMother)
//create new user
router.post('/createuser', verifyToken, isAdmin, userController.createUser)
//delete user
router.delete('/delete/:id', verifyToken, isAdmin, userController.deleteUser)
//get slots
router.post('/slots', verifyToken, userController.getSlots)
//get all users
router.post('/getAllUsers', verifyToken, userController.getAllUsers)
//mapped mother with doctor
router.post('/mother/map/doctor', verifyToken, userController.mapMotherWithDoctor)

export default router;
