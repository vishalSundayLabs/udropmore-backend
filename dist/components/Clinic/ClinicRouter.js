"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const isAdmin_1 = require("../../middleware/isAdmin");
const tokenVerify_1 = require("../../middleware/tokenVerify");
const clinicController_1 = require("./clinicController");
const router = (0, express_1.Router)();
//create new clinic
router.post('/create', tokenVerify_1.verifyToken, isAdmin_1.isAdmin, clinicController_1.createClinic);
//update clinic
router.put('/update/:id', tokenVerify_1.verifyToken, isAdmin_1.isAdmin, clinicController_1.updateClinic);
//get all clinic
router.get('/getall', tokenVerify_1.verifyToken, clinicController_1.getAllClinic);
//delete clinic 
router.delete('/delete/:id', tokenVerify_1.verifyToken, isAdmin_1.isAdmin, clinicController_1.deleteClinic);
exports.default = router;
