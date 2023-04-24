"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DiseasesController_1 = require("./DiseasesController");
const router = (0, express_1.Router)();
router.get("/diseases", DiseasesController_1.getDiseases);
exports.default = router;
