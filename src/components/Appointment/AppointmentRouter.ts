import { Router } from 'express';
import { verifyToken } from '../../middleware/tokenVerify';
import { createAppointment, getAllAppointments, rescheduleAppointment, updateAppointment } from './AppointmentController';
const router = Router()

router.post('/create',createAppointment);
router.post('/appointments',getAllAppointments)
router.put('/update', updateAppointment)
router.post('/reschedule',rescheduleAppointment)
export default router;