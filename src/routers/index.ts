/**
 * Router file
 * index.ts
 */

import { Router } from "express";
import userRouter from "../components/Users/UserRouter";
import authRouter from "../components/Auth/AuthRouter"
import clinicRouter from '../components/Clinic/ClinicRouter'
const router = Router();

router.use("/v1/users", userRouter);
router.use('/v1/auth',authRouter)
router.use('/v1/clinic',clinicRouter)

export default router;
