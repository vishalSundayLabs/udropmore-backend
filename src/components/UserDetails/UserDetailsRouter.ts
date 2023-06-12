import { Router } from "express";
import { verifyToken } from "../../middleware/tokenVerify";
import { createUserDetails, deleteBookmarkedArticles, getBookmarkedArticles, getCurrentMedications, getPastHistoryMasterConstant, getUserDetailsbyId, getWeightByBmi, updateBookmarkedArticles, updateUserDetails } from "./UserDetailsController";

const router = Router()

router.post('/create/userDetails', verifyToken, createUserDetails)

router.put('/update/userDetail', verifyToken, updateUserDetails)

router.get('/getuser/details/:motherId', verifyToken, getUserDetailsbyId)

router.get('/:motherId/weights', verifyToken, getWeightByBmi)

router.get("/pastHistoryMaster", getPastHistoryMasterConstant)

router.get("/currentMedications/details/:motherId", verifyToken, getCurrentMedications)

router.get("/get/bookmarked/articles/:motherId", verifyToken, getBookmarkedArticles)

router.put("/add/bookmarked/articles/:motherId", verifyToken, updateBookmarkedArticles)

router.delete("/delete/bookmarked/articles/:motherId", verifyToken, deleteBookmarkedArticles)

export default router;