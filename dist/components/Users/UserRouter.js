"use strict";
/**
 * userRouter.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const isAdmin_1 = require("../../middleware/isAdmin");
const tokenVerify_1 = require("../../middleware/tokenVerify");
const userController = require("./UserController");
const router = (0, express_1.Router)();
//find all user 
router.get('/find', tokenVerify_1.verifyToken, userController.getUser);
//get user by id
router.get('/user/:id', tokenVerify_1.verifyToken, userController.getUserById);
//update user
router.put('/update/:id', tokenVerify_1.verifyToken, isAdmin_1.isAdmin, userController.userUpdate);
//update mother
router.put('/updateMother', tokenVerify_1.verifyToken, userController.updateMother);
//create new user
router.post('/createuser', tokenVerify_1.verifyToken, isAdmin_1.isAdmin, userController.createUser);
//delete user
router.delete('/delete/:id', tokenVerify_1.verifyToken, isAdmin_1.isAdmin, userController.deleteUser);
//get slots
router.post('/slots', tokenVerify_1.verifyToken, userController.getSlots);
//get all users
router.post('/getAllUsers', tokenVerify_1.verifyToken, userController.getAllUsers);
//mapped mother with doctor
router.post('/mother/map/doctor', tokenVerify_1.verifyToken, userController.mapMotherWithDoctor);
//get all patient of a doctor
router.get('/doctor/:doctorId/mothers', tokenVerify_1.verifyToken, userController.getPatientOfDoctorById);
//get doctor details of a mother
router.get('/mother/:motherId/doctor', tokenVerify_1.verifyToken, userController.getDoctorOfMotherById);
exports.default = router;
