"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllAppointments = exports.createAppointment = void 0;
const Constants_1 = require("../../utils/Constants");
const ResponseClass_1 = require("../../utils/ResponseClass");
const AppointmentModel_1 = require("./AppointmentModel");
const createAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const reqData = {
        appointmentDateAndTime: body.appointmentDate,
        appointmentType: body.appointmentType,
        motherId: body.motherId,
        doctorId: body.doctorId,
        clinicId: body.clinicId,
    };
    try {
        const appointment = yield AppointmentModel_1.default.create(reqData);
        return res.status(Constants_1.HTTP_CREATED).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "Appointment Book successfully.",
            result: appointment
        }));
    }
    catch (error) {
        let response = new ResponseClass_1.ResponseError({
            message: "Something went wrong",
            error: error.message,
        });
        return res.status(500).json(response);
    }
});
exports.createAppointment = createAppointment;
const getAllAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointment = yield AppointmentModel_1.default.find({ isDeleted: false });
        return res.status(Constants_1.HTTP_CREATED).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "get All appointemnt successfully",
            result: appointment
        }));
    }
    catch (error) {
        let response = new ResponseClass_1.ResponseError({
            message: "Something went wrong",
            error: error.message,
        });
        return res.status(500).json(response);
    }
});
exports.getAllAppointments = getAllAppointments;
