"use strict";
/**
 * Router file
 * index.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserRouter_1 = require("../components/Users/UserRouter");
const AuthRouter_1 = require("../components/Auth/AuthRouter");
const ClinicRouter_1 = require("../components/Clinic/ClinicRouter");
const AppointmentRouter_1 = require("../components/Appointment/AppointmentRouter");
const UserDetailsRouter_1 = require("../components/UserDetails/UserDetailsRouter");
const ConsultationRouter_1 = require("../components/Consultation/ConsultationRouter");
const CMSRouter_1 = require("../components/CMS/CMSRouter");
const TemplateRouter_1 = require("../components/Template/TemplateRouter");
const router = (0, express_1.Router)();
router.use("/v1/users", UserRouter_1.default);
router.use('/v1/auth', AuthRouter_1.default);
router.use('/v1/clinic', ClinicRouter_1.default);
router.use('/v1/appointment', AppointmentRouter_1.default);
router.use('/v1/mother', UserDetailsRouter_1.default);
router.use("/v1/consultation", ConsultationRouter_1.default);
router.use("/v1/cms", CMSRouter_1.default);
router.use("/v1/prescription", TemplateRouter_1.default);
exports.default = router;
