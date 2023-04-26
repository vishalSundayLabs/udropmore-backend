/**
 * Router file
 * index.ts
 */

import { Router } from "express";
import userRouter from "../components/Users/UserRouter";
import authRouter from "../components/Auth/AuthRouter";
import clinicRouter from '../components/Clinic/ClinicRouter';
import appointmentRouter from '../components/Appointment/AppointmentRouter';
import userDetailsRouter from '../components/UserDetails/UserDetailsRouter';
import diseasesRouter from "../components/Constant/ConstantRouter";
const router = Router();

router.use("/v1/users", userRouter);
router.use('/v1/auth', authRouter)
router.use('/v1/clinic', clinicRouter)
router.use('/v1/appointment', appointmentRouter)
router.use('/v1/mother', userDetailsRouter)
router.use('/v1/constant', diseasesRouter)

export default router;
