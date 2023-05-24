import { Router } from 'express';
import { getLeapScoreQuestions } from './LeapScoreController';

const router = Router()

router.get("/questions",getLeapScoreQuestions)

export default router;