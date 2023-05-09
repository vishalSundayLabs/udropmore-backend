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
import consultationRouter from '../components/Consultation/ConsultationRouter'
import cmsRouter from '../components/CMS/CMSRouter'
import prescriptionTemplateRouter from "../components/Template/TemplateRouter";

const router = Router();

router.use("/v1/users", userRouter);

router.use('/v1/auth', authRouter)

router.use('/v1/clinic', clinicRouter)

router.use('/v1/appointment', appointmentRouter)

router.use('/v1/mother', userDetailsRouter)

router.use("/v1/consultation", consultationRouter)

router.use("/v1/cms", cmsRouter)

router.use("/v1/prescription", prescriptionTemplateRouter)

export default router;
