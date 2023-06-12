import { Router } from 'express';
import { getAllLeapScore, getArticalBasedOnLeapScoreAndStatus, getLeapScoreQuestions, updateLeapScoreQuestionnairDetails } from './LeapScoreController';

const router = Router()

router.get("/questions/:motherId", getLeapScoreQuestions)
router.put("/questions/:motherId", updateLeapScoreQuestionnairDetails)
router.get("/artical/:motherId", getArticalBasedOnLeapScoreAndStatus)
router.get("/all/score/:motherId", getAllLeapScore)

export default router;