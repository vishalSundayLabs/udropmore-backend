import { Router } from 'express';
import { verifyToken } from '../../middleware/tokenVerify';
import { createAppointment, getAllAppointmentOfMother, getAllAppointments, getAllAppointmentsOfADay, rescheduleAppointment, rescheduleAppointmentByDoctorOfASlot, updateAppointment, updateAppointmentStatusByDoctorOfASlot } from './AppointmentController';

const router = Router()

router.post('/create', verifyToken, createAppointment);

router.post('/appointments', verifyToken, getAllAppointments)

router.put('/update', verifyToken, updateAppointment)

router.post('/reschedule', verifyToken, rescheduleAppointment)

router.post('/getAllAppointments', verifyToken, getAllAppointmentsOfADay)

router.post('/getappointments/mother', verifyToken, getAllAppointmentOfMother)

router.put('/slot/cancel', verifyToken, updateAppointmentStatusByDoctorOfASlot)

router.put('/slot/reschedule', verifyToken, rescheduleAppointmentByDoctorOfASlot)

export default router;