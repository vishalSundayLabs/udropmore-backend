import { Router } from 'express';
import { createAppointment } from './AppointmentController';
const router = Router()

router.post('/create',createAppointment);

export default router;