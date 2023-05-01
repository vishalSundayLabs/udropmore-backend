import { Router } from 'express';
import { verifyToken } from '../../middleware/tokenVerify';
import { createAntenatalTest, createCurrentObservastion, createNextAntenatalTest, createTreatment, getAntenatalTest, getCurrentObservastion, getNextAntenatalTest, getTreatment, getWeeklyTestOrAppointmentsByLmp, updateAntenatalTest, updateCurrentObservastion, updateNextAntenatalTest, updateTreatment } from './ConsultationController';
const router = Router()

router.get("/tests/appointment", verifyToken, getWeeklyTestOrAppointmentsByLmp)

//currentObservastion 
router.post('/currentObservastion/create', verifyToken, createCurrentObservastion)

router.put('/currentObservastion/update', verifyToken, updateCurrentObservastion)

router.get('/currentObservastion/details', verifyToken, getCurrentObservastion)
//end

//antental test
router.post("/antenatalTest/create", verifyToken, createAntenatalTest)

router.put("/antenatalTest/update", verifyToken, updateAntenatalTest)

router.get("/antenatalTest/details", verifyToken, getAntenatalTest)
//end

//treatment test
router.post("/treatment/create", verifyToken, createTreatment)

router.put("/treatment/update", verifyToken, updateTreatment)

router.get("/treatment/details", verifyToken, getTreatment)
//end

//next antenatal test
router.post("/nextAntenatalTest/create", verifyToken, createNextAntenatalTest)

router.put("/nextAntenatalTest/update", verifyToken, updateNextAntenatalTest)

router.get("/nextAntenatalTest/details", verifyToken, getNextAntenatalTest)
//end

export default router
