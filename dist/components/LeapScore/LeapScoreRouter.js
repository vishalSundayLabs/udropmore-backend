"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LeapScoreController_1 = require("./LeapScoreController");
const router = (0, express_1.Router)();
router.post("/create", LeapScoreController_1.createLeapScoreQuestions);
router.get("/questions/:motherId", LeapScoreController_1.getLeapScoreQuestions);
router.put("/questions/:motherId", LeapScoreController_1.updateLeapScoreQuestionnairDetails);
exports.default = router;
