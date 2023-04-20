import { Router } from "express";
import { verifyToken } from "../../middleware/tokenVerify";
import { createUserDetails, updateUserDetails } from "./UserDetailsController";

const router = Router()

router.post('/create/userDetails',verifyToken,createUserDetails)
router.put('/update/userDetail',verifyToken,updateUserDetails)

export default router;