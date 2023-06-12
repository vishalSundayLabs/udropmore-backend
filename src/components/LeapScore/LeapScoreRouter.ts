import { Router } from 'express';
import { verifyToken } from '../../middleware/tokenVerify';
import { getAllLeapScore, getArticalBasedOnLeapScoreAndStatus, getLeapScoreQuestions, updateLeapScoreQuestionnairDetails } from './LeapScoreController';

const router = Router()

router.get("/questions/:motherId", verifyToken, getLeapScoreQuestions)
router.put("/questions/:motherId", verifyToken, updateLeapScoreQuestionnairDetails)
router.get("/artical/:motherId", verifyToken, getArticalBasedOnLeapScoreAndStatus)
router.get("/all/score/:motherId", verifyToken, getAllLeapScore)

export default router;