"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AppointmentController_1 = require("./AppointmentController");
const router = (0, express_1.Router)();
router.post('/create', AppointmentController_1.createAppointment);
router.post('/appointments', AppointmentController_1.getAllAppointments);
router.put('/update', AppointmentController_1.updateAppointment);
router.post('/reschedule', AppointmentController_1.rescheduleAppointment);
exports.default = router;
