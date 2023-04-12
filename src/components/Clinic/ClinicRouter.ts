import { Router } from 'express'
import { isAdmin } from '../../middleware/isAdmin';
import { verifyToken } from '../../middleware/tokenVerify';
import { createClinic, deleteClinic, getAllClinic, updateClinic } from './clinicController'

const router = Router()
//create new clinic
router.post('/create', verifyToken, isAdmin, createClinic);
//update clinic
router.put('/update/:id', verifyToken, isAdmin, updateClinic);
//get all clinic
router.get('/getall', verifyToken, getAllClinic);
//delete clinic 
router.delete('/delete/:id', verifyToken, isAdmin, deleteClinic)

export default router;