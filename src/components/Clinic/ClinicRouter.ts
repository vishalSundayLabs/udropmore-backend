import { Router } from 'express'
import { isAdmin } from '../../middleware/isAdmin';
import { verifyToken } from '../../middleware/tokenVerify';
import { createClinic, deleteClinic, getAllClinic, getAllDoctorOfClinic, getClinicById, getClinicByLatitudeAndLongitude, updateClinic } from './clinicController'

const router = Router()
//create new clinic
router.post('/create', verifyToken, isAdmin, createClinic);
//update clinic
router.put('/update/:id', verifyToken, isAdmin, updateClinic);
//get all clinic
router.get('/getall', verifyToken, getAllClinic);
//delete clinic 
router.delete('/delete/:id', verifyToken, isAdmin, deleteClinic)
//find all clinics by longitude and latitude
router.post('/clinics', verifyToken, getClinicByLatitudeAndLongitude)
//find all doctor of a clinic
router.post('/doctors', verifyToken, getAllDoctorOfClinic)
//find clinic by id 
router.get('/details/:clinicId', verifyToken, getClinicById)

export default router;
