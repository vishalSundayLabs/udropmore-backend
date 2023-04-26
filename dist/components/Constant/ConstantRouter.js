"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ConstantController_1 = require("./ConstantController");
const router = (0, express_1.Router)();
router.get("/all", ConstantController_1.getAllConstant);
exports.default = router;
