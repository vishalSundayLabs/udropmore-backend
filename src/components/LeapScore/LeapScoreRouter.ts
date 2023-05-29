import { Router } from 'express';
import { createLeapScoreQuestions, getLeapScoreQuestions, updateLeapScoreQuestionnairDetails } from './LeapScoreController';

const router = Router()

router.post("/create", createLeapScoreQuestions)
router.get("/questions/:motherId", getLeapScoreQuestions)
router.put("/questions/:motherId", updateLeapScoreQuestionnairDetails)

export default router;