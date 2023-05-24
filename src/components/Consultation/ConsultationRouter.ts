import { Router } from 'express';
import { verifyToken } from '../../middleware/tokenVerify';
import { upload } from '../../utils/AwsFileUploader';
import { createAntenatalTest, createCurrentObservastion, createNextAntenatalTest, createTreatment, getAntenatalTest, getCurrentObservastion, getNextAntenatalTest, getNextConsultationDateAndTests, getTreatment, getWeeklyTestOrAppointmentsByLmp, updateAntenatalTest, updateCurrentObservastion, updateNextAntenatalTest, updateTreatment, uploadAntenatalTest } from './ConsultationController';
const router = Router()

router.get("/tests/appointment", verifyToken, getWeeklyTestOrAppointmentsByLmp)

//currentObservastion 
router.post('/currentObservastion/create', verifyToken, createCurrentObservastion)

router.put('/currentObservastion/update', verifyToken, updateCurrentObservastion)

router.post('/currentObservastion/details', verifyToken, getCurrentObservastion)
//end

//antental test
router.post("/antenatalTest/create", verifyToken, createAntenatalTest)

router.put("/antenatalTest/update", verifyToken, updateAntenatalTest)

router.post("/antenatalTest/details", verifyToken, getAntenatalTest)

router.put("/antenatalTest/file/upload", verifyToken, upload.array("file"), uploadAntenatalTest)
//end

//treatment test
router.post("/treatment/create", verifyToken, createTreatment)

router.put("/treatment/update", verifyToken, updateTreatment)

router.post("/treatment/details", verifyToken, getTreatment)

//end

//next antenatal test
router.post("/nextAntenatalTest/create", verifyToken, createNextAntenatalTest)

router.put("/nextAntenatalTest/update", verifyToken, updateNextAntenatalTest)

router.post("/nextAntenatalTest/details", verifyToken, getNextAntenatalTest)
//end

//next consultation 

router.get("/recommendation", verifyToken, getNextConsultationDateAndTests)

export default router
