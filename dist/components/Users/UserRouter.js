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
//update user
router.put('/update/:id', tokenVerify_1.verifyToken, isAdmin_1.isAdmin, userController.userUpdate);
//update mother
router.put('/updateMother', userController.updateMother);
//create new user
router.post('/createuser', tokenVerify_1.verifyToken, isAdmin_1.isAdmin, userController.createUser);
//delete user
router.delete('/delete/:id', tokenVerify_1.verifyToken, isAdmin_1.isAdmin, userController.deleteUser);
exports.default = router;
