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
router.get('/find', tokenVerify_1.verifyToken, userController.getUser);
router.put('/update', tokenVerify_1.verifyToken, userController.userUpdate);
router.post('/createuser', tokenVerify_1.verifyToken, isAdmin_1.isAdmin, userController.createUser);
exports.default = router;
