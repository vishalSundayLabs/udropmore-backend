import { Router } from "express";
import { verifyToken } from "../../middleware/tokenVerify";
import { createUserDetails, getUserDetailsbyId, updateUserDetails } from "./UserDetailsController";

const router = Router()

router.post('/create/userDetails', verifyToken, createUserDetails)
router.put('/update/userDetail', verifyToken, updateUserDetails)
router.get('/getuser/details/:motherId', verifyToken, getUserDetailsbyId)

export default router;