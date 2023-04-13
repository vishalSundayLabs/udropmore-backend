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
exports.appointmentBookValidations = exports.rescheduleAppointment = exports.updateAppointment = exports.getAllAppointments = exports.createAppointment = void 0;
const Constants_1 = require("../../utils/Constants");
const ResponseClass_1 = require("../../utils/ResponseClass");
const UserController_1 = require("../Users/UserController");
const UserModel_1 = require("../Users/UserModel");
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
        const bookedAppointment = yield AppointmentModel_1.default.find({ appointmentDateAndTime: body.appointmentDate, motherId: body.motherId, doctorId: body.doctorId, clinicId: body.clinicId, isDeleted: false });
        if (bookedAppointment.length > 0) {
            return res.status(Constants_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
                success: false,
                message: "Appointment already booked ."
            }));
        }
        yield (0, exports.appointmentBookValidations)(body, req, res);
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
    const body = req.body;
    let findData;
    if (body.doctorId)
        findData = { doctorId: body.doctorId, isDeleted: false };
    if (body.motherId)
        findData = { motherId: body.motherId, isDeleted: false };
    try {
        const appointment = yield AppointmentModel_1.default.find(findData);
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
const updateAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    try {
        const bookedAppointment = yield AppointmentModel_1.default.findOne({ _id: body.appointemntId, isDeleted: false });
        if (!bookedAppointment) {
            return res.status(Constants_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseSuccess({
                success: false,
                message: "Appointment not booked yet."
            }));
        }
        if (body.status)
            bookedAppointment.status = body.status;
        yield bookedAppointment.save();
        return res.status(Constants_1.HTTP_CREATED).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "Appointment Update successfully.",
            result: bookedAppointment
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
exports.updateAppointment = updateAppointment;
const rescheduleAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!body.appointmentId || !body.newDate) {
        return res.status(Constants_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad Request! , appointment id must be provide"
        }));
    }
    try {
        const bookedAppointment = yield AppointmentModel_1.default.findOne({ _id: body.appointmentId, isDeleted: false });
        if (!bookedAppointment) {
            return res.status(Constants_1.HTTP_NOT_FOUND).send(new ResponseClass_1.ResponseError({
                success: false,
                message: "Appointment not found!"
            }));
        }
        const newBookAppointmentDetails = {
            appointmentDateAndTime: body.newDate,
            appointmentType: bookedAppointment.appointmentType,
            motherId: bookedAppointment.motherId,
            doctorId: bookedAppointment.doctorId,
            clinicId: bookedAppointment.clinicId,
        };
        const tampData = {
            appointmentDate: body.newDate,
            appointmentType: bookedAppointment.appointmentType,
            motherId: bookedAppointment.motherId,
            doctorId: bookedAppointment.doctorId,
            clinicId: bookedAppointment.clinicId
        };
        yield (0, exports.appointmentBookValidations)(tampData, req, res);
        bookedAppointment.status = "CANCELLED";
        yield bookedAppointment.save();
        const rescheduledAppointment = yield AppointmentModel_1.default.create(newBookAppointmentDetails);
        return res.status(Constants_1.HTTP_CREATED).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "Appointment Reschedule successfully.",
            result: rescheduledAppointment
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
exports.rescheduleAppointment = rescheduleAppointment;
const appointmentBookValidations = (body, req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const doctor = yield UserModel_1.default.findOne({ _id: body.doctorId, isDeleted: false, isActive: true });
    const appointmentDate = (0, UserController_1.getDayOrTimeFromDate)(body.appointmentDate);
    let slots = doctor.availability.map(ele => {
        if (ele.clinic == body.clinicId)
            return ele;
    });
    const newSlots = [];
    for (let i = 0; i < slots[0].slots.length; i++) {
        if (slots[0].slots[i].type == body.appointmentType && slots[0].slots[i].day == appointmentDate.day) {
            newSlots.push(slots[0].slots[i]);
        }
    }
    const finalSlot = (0, UserController_1.MakeSlotesFormat)(newSlots);
    const BookedSlot = yield AppointmentModel_1.default.find({ clinicId: body.clinicId, doctorId: body.doctorId, status: { $ne: "CANCELLED" }, isDeleted: false });
    if (BookedSlot.length > 0) {
        for (let j = 0; j < BookedSlot.length; j++) {
            let bookedSlotIndex = -1;
            const bookedSlot = (0, UserController_1.getDayOrTimeFromDate)(BookedSlot[j].appointmentDateAndTime);
            for (let i = 0; i < finalSlot.length; i++) {
                const singleSlot = finalSlot[i];
                if (singleSlot.day == bookedSlot.day && singleSlot.time == bookedSlot.time) {
                    bookedSlotIndex = i;
                    break;
                }
            }
            if (bookedSlotIndex != -1) {
                finalSlot[bookedSlotIndex].status = "BOOKED";
            }
        }
    }
    let count = 0;
    for (let i = 0; i < finalSlot.length; i++) {
        if (finalSlot[i].day == appointmentDate.day && finalSlot[i].time == appointmentDate.time) {
            count++;
        }
        if (finalSlot[i].day == appointmentDate.day && finalSlot[i].time == appointmentDate.time && finalSlot[i].status == "BOOKED") {
            throw new Error("This slot is not available.");
        }
    }
    if (count == 0) {
        throw new Error("This time doctor is not available.");
    }
});
exports.appointmentBookValidations = appointmentBookValidations;
