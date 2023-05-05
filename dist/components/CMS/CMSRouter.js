"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CMSController_1 = require("./CMSController");
const router = (0, express_1.Router)();
router.post("/weekly/content/create", CMSController_1.createWeeklyContent);
router.put("/weekly/content/update", CMSController_1.updateWeeklyContent);
router.get("/weekly/content/details", CMSController_1.getWeeklyContent);
exports.default = router;
