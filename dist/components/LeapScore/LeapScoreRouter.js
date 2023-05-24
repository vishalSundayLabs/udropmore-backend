"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LeapScoreController_1 = require("./LeapScoreController");
const router = (0, express_1.Router)();
router.get("/questions", LeapScoreController_1.getLeapScoreQuestions);
exports.default = router;
