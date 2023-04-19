import { Router } from 'express';
import { verifyToken } from '../../middleware/tokenVerify';
import { createAppointment, getAllAppointmentOfMother, getAllAppointments, getAllAppointmentsOfADay, rescheduleAppointment, updateAppointment } from './AppointmentController';
const router = Router()

router.post('/create', verifyToken, createAppointment);
router.post('/appointments', verifyToken, getAllAppointments)
router.put('/update', verifyToken, updateAppointment)
router.post('/reschedule', verifyToken, rescheduleAppointment)
router.post('/getAllAppointments', verifyToken, getAllAppointmentsOfADay)
router.post('/getappointments/mother', verifyToken, getAllAppointmentOfMother)
export default router;