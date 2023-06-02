import { Router } from 'express';
import { createLeapScoreQuestions, getArticalBasedOnLeapScoreAndStatus, getLeapScoreQuestions, updateLeapScoreQuestionnairDetails } from './LeapScoreController';

const router = Router()

router.post("/create", createLeapScoreQuestions)
router.get("/questions/:motherId", getLeapScoreQuestions)
router.put("/questions/:motherId", updateLeapScoreQuestionnairDetails)
router.get("/artical/:motherId", getArticalBasedOnLeapScoreAndStatus)

export default router;