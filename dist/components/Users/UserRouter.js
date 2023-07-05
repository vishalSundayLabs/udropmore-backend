"use strict";
/**
 * userRouter.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController = require("./UserController");
const router = (0, express_1.Router)();
//update user
router.put('/update/:userId', userController.userUpdate);
//create new user
router.post('/createuser', userController.createUser);
router.get("/list", userController.getUserList);
//user list
router.get("/:userId", userController.getUserById);
router.get("/wallet/balance/:userId", userController.getUserWalletBalance);
exports.default = router;
