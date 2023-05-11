"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tokenVerify_1 = require("../../middleware/tokenVerify");
const AwsFileUploader_1 = require("../../utils/AwsFileUploader");
const ConsultationController_1 = require("./ConsultationController");
const router = (0, express_1.Router)();
router.get("/tests/appointment", tokenVerify_1.verifyToken, ConsultationController_1.getWeeklyTestOrAppointmentsByLmp);
//currentObservastion 
router.post('/currentObservastion/create', tokenVerify_1.verifyToken, ConsultationController_1.createCurrentObservastion);
router.put('/currentObservastion/update', tokenVerify_1.verifyToken, ConsultationController_1.updateCurrentObservastion);
router.post('/currentObservastion/details', tokenVerify_1.verifyToken, ConsultationController_1.getCurrentObservastion);
//end
//antental test
router.post("/antenatalTest/create", tokenVerify_1.verifyToken, ConsultationController_1.createAntenatalTest);
router.put("/antenatalTest/update", tokenVerify_1.verifyToken, ConsultationController_1.updateAntenatalTest);
router.post("/antenatalTest/details", tokenVerify_1.verifyToken, ConsultationController_1.getAntenatalTest);
router.put("/antenatalTest/file/upload", AwsFileUploader_1.upload.array("file"), ConsultationController_1.uploadAntenatalTest);
//end
//treatment test
router.post("/treatment/create", tokenVerify_1.verifyToken, ConsultationController_1.createTreatment);
router.put("/treatment/update", tokenVerify_1.verifyToken, ConsultationController_1.updateTreatment);
router.post("/treatment/details", tokenVerify_1.verifyToken, ConsultationController_1.getTreatment);
//end
//next antenatal test
router.post("/nextAntenatalTest/create", tokenVerify_1.verifyToken, ConsultationController_1.createNextAntenatalTest);
router.put("/nextAntenatalTest/update", tokenVerify_1.verifyToken, ConsultationController_1.updateNextAntenatalTest);
router.post("/nextAntenatalTest/details", tokenVerify_1.verifyToken, ConsultationController_1.getNextAntenatalTest);
//end
exports.default = router;
