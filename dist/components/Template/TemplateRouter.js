"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TemplateController_1 = require("./TemplateController");
const router = (0, express_1.Router)();
router.post("/template/create", TemplateController_1.createPrescriptionTemplate);
router.get("/template/get/:doctorId", TemplateController_1.getPrescriptionTemplate);
router.delete("/template/delete/:templateId", TemplateController_1.deletePrescriptionTemplate);
exports.default = router;
