"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tokenVerify_1 = require("../../middleware/tokenVerify");
const UserDetailsController_1 = require("./UserDetailsController");
const router = (0, express_1.Router)();
router.post('/create/userDetails', tokenVerify_1.verifyToken, UserDetailsController_1.createUserDetails);
router.put('/update/userDetail', tokenVerify_1.verifyToken, UserDetailsController_1.updateUserDetails);
exports.default = router;
