import { Router } from "express";
import { verifyToken } from "../../middleware/tokenVerify";
import { createUserDetails, updateUserDetails } from "./UserDetailsController";

const router = Router()

router.post('/create/userDetails', createUserDetails)
router.put('/update/userDetail', updateUserDetails)

export default router;