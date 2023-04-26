"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ConstantController_1 = require("./ConstantController");
const router = (0, express_1.Router)();
router.get("/diseases", ConstantController_1.getDiseases);
exports.default = router;
