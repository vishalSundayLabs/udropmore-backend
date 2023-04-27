import { Router } from "express";
import { verifyToken } from "../../middleware/tokenVerify";
import { createUserDetails, getPastHistoryMasterConstant, getUserDetailsbyId, getWeightByBmi, updateUserDetails } from "./UserDetailsController";

const router = Router()

router.post('/create/userDetails', verifyToken, createUserDetails)

router.put('/update/userDetail', verifyToken, updateUserDetails)

router.get('/getuser/details/:motherId', verifyToken, getUserDetailsbyId)

router.get('/:motherId/weights', verifyToken, getWeightByBmi)

router.get("/pastHistoryMaster", getPastHistoryMasterConstant)

export default router;