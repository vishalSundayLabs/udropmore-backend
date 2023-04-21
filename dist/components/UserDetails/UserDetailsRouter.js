"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserDetailsController_1 = require("./UserDetailsController");
const router = (0, express_1.Router)();
router.post('/create/userDetails', UserDetailsController_1.createUserDetails);
router.put('/update/userDetail', UserDetailsController_1.updateUserDetails);
exports.default = router;
