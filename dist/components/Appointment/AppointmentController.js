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
exports.appointmentBookValidations = exports.updateAppointmentStatusByDoctorOfASlot = exports.rescheduleAppointmentByDoctorOfASlot = exports.rescheduleAppointment = exports.updateAppointment = exports.getAllAppointmentOfMother = exports.getAllAppointmentsOfADay = exports.getAllAppointments = exports.createAppointment = void 0;
const pagination_1 = require("../../helpers/pagination");
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
    const query = req.query;
    let findData;
    if (body.doctorId)
        findData = { doctorId: body.doctorId, isDeleted: false };
    if (body.motherId)
        findData = { motherId: body.motherId, isDeleted: false };
    const { limit, skips } = (0, pagination_1.pagination)(query);
    try {
        const appointment = yield AppointmentModel_1.default.find(findData).skip(skips).limit(limit);
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
const getAllAppointmentsOfADay = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const query = req.query;
    if (!body.doctorId || !body.clinicId || !body.date) {
        return res.status(Constants_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            message: "Bad Request! doctor id , clinic id or date must be provide."
        }));
    }
    const { limit, skips } = (0, pagination_1.pagination)(query);
    const dates = (0, UserController_1.getDayOrTimeFromDate)(body.date);
    try {
        const appointments = yield AppointmentModel_1.default.find({ doctorId: body.doctorId, clinicId: body.clinicId, appointmentType: { $ne: "TELECALL" }, appointmentDateAndTime: { $gte: new Date(dates.fullDate), $lt: new Date(dates.nextDate) }, status: { $ne: "CANCELLED" } }).skip(skips).limit(limit);
        let patientList = [];
        const patientMap = new Map();
        let videoAppointmentCount = 0;
        for (let i = 0; i < appointments.length; i++) {
            const item = appointments[i];
            if (item.appointmentType == 'VIDEOCALL') {
                videoAppointmentCount++;
            }
            const motherId = item.motherId.toString();
            if (!patientMap.has(motherId)) {
                patientMap.set(motherId, 0);
            }
            else {
                patientMap.set(motherId, patientMap.get(motherId) + 1);
            }
            const mother = yield UserModel_1.default.findOne({ _id: item.motherId });
            const { day, time } = (0, UserController_1.getDayOrTimeFromDate)(item.appointmentDateAndTime);
            patientList.push({ motherId: item.motherId, name: mother.firstName, phoneNumber: mother.phoneNumber, appointmentTime: time, appointmentType: item.appointmentType, appointmentStatus: item.status });
        }
        let newPatient = 0;
        for (let [key, val] of patientMap) {
            if (val == 0) {
                newPatient++;
            }
        }
        const responseObj = {
            RequestedDate: body.date,
            totalAppointment: appointments.length,
            totalVideoAppointment: videoAppointmentCount,
            totalNewPatient: newPatient,
            patientList: patientList
        };
        return res.status(Constants_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: `All Appointments of ${body.date} .`,
            result: responseObj
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
exports.getAllAppointmentsOfADay = getAllAppointmentsOfADay;
const getAllAppointmentOfMother = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const query = req.query;
    if (!body.motherId || !body.clinicId) {
        return res.status(Constants_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            message: "Bad Request! mother id , clinic id must be provide."
        }));
    }
    let reqBody;
    if (body.doctorId) {
        reqBody = {
            motherId: body.motherId,
            clinicId: body.clinicId,
            doctorId: body.doctorId
        };
    }
    else {
        reqBody = {
            motherId: body.motherId,
            clinicId: body.clinicId
        };
    }
    const { limit, skips } = (0, pagination_1.pagination)(query);
    try {
        const appointments = yield AppointmentModel_1.default.find(reqBody).skip(skips).limit(limit);
        return res.status(Constants_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "Get all appointment of mother.",
            result: appointments
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
exports.getAllAppointmentOfMother = getAllAppointmentOfMother;
const updateAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!body.appointmentId) {
        return res.status(Constants_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            message: "Bad Request! mother id , clinic id must be provide."
        }));
    }
    try {
        const bookedAppointment = yield AppointmentModel_1.default.findOne({ _id: body.appointmentId, isDeleted: false });
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
            message: "Bad Request! , appointment id and new date must be provide."
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
        const tempData = {
            appointmentDate: body.newDate,
            appointmentType: bookedAppointment.appointmentType,
            motherId: bookedAppointment.motherId,
            doctorId: bookedAppointment.doctorId,
            clinicId: bookedAppointment.clinicId
        };
        yield (0, exports.appointmentBookValidations)(tempData, req, res);
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
const rescheduleAppointmentByDoctorOfASlot = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!body.doctorId || !body.clinicId || !body.date || !body.newDate || !body.appointmentType || !body.reason) {
        return res.status(Constants_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            message: "Bad Request! doctor id , clinic id , date , new date for reschedule , appointment type , appintmentStatus or reason must be provide."
        }));
    }
    try {
        const dateFormat = (0, UserController_1.getDayOrTimeFromDate)(body.date);
        const appointments = yield AppointmentModel_1.default.find({ doctorId: body.doctorId, clinicId: body.clinicId, appointmentDateAndTime: { $gte: new Date(dateFormat.fullDate), $lt: new Date(dateFormat.nextDate) }, appointmentType: body.appointmentType, status: { $ne: "CANCELLED" }, isDeleted: false });
        if (appointments.length == 0) {
            return res.status(Constants_1.HTTP_NOT_FOUND).send(new ResponseClass_1.ResponseError({
                success: false,
                message: "Appointments not found!"
            }));
        }
        const rescheduledAppointments = [];
        for (let i = 0; i < appointments.length; i++) {
            const slotTimeFormat = (0, UserController_1.getDayOrTimeFromDate)(appointments[i].appointmentDateAndTime);
            if (dateFormat.time == slotTimeFormat.time) {
                appointments[i].status = body.appointmentStatus;
                yield AppointmentModel_1.default.findOneAndUpdate({ _id: appointments[i]._id }, { $set: { status: "CANCELLED", reason: "CANCELLED BY DOCTOR", updatedBy: req.userId } });
                const newAppointment = yield AppointmentModel_1.default.create({ motherId: appointments[i].motherId, doctorId: body.doctorId, clinicId: body.clinicId, appointmentType: body.appointmentType, appointmentDateAndTime: body.newDate, previousAppointmentDate: appointments[i].appointmentDateAndTime, status: "RESCHEDULED", reason: body.reason, createdBy: req.userId });
                rescheduledAppointments.push(newAppointment);
            }
        }
        return res.status(Constants_1.HTTP_CREATED).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: `Reschedule Appointments successfully.`,
            result: rescheduledAppointments
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
exports.rescheduleAppointmentByDoctorOfASlot = rescheduleAppointmentByDoctorOfASlot;
const updateAppointmentStatusByDoctorOfASlot = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!body.doctorId || !body.clinicId || !body.date || !body.appointmentType || !body.appointmentStatus || !body.reason) {
        return res.status(Constants_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            message: "Bad Request! doctor id , clinic id , date  appointment type , appintmentStatus or reason must be provide."
        }));
    }
    try {
        const dateFormat = (0, UserController_1.getDayOrTimeFromDate)(body.date);
        const appointments = yield AppointmentModel_1.default.find({ doctorId: body.doctorId, clinicId: body.clinicId, appointmentDateAndTime: { $gte: new Date(dateFormat.fullDate), $lt: new Date(dateFormat.nextDate) }, appointmentType: body.appointmentType, status: { $ne: "CANCELLED" }, isDeleted: false });
        if (appointments.length == 0) {
            return res.status(Constants_1.HTTP_NOT_FOUND).send(new ResponseClass_1.ResponseError({
                success: false,
                message: "Appointments not found!"
            }));
        }
        const changedAppointment = [];
        for (let i = 0; i < appointments.length; i++) {
            const slotTimeFormat = (0, UserController_1.getDayOrTimeFromDate)(appointments[i].appointmentDateAndTime);
            console.log(slotTimeFormat, dateFormat.time == slotTimeFormat.time, dateFormat);
            if (dateFormat.time == slotTimeFormat.time) {
                appointments[i].status = body.appointmentStatus;
                yield AppointmentModel_1.default.findOneAndUpdate({ _id: appointments[i]._id }, { $set: { status: body.appointmentStatus, reason: body.reason, updatedBy: req.userId } });
                changedAppointment.push(appointments[i]);
            }
        }
        return res.status(Constants_1.HTTP_CREATED).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: `${body.appointmentStatus} Appointments successfully.`,
            result: changedAppointment
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
exports.updateAppointmentStatusByDoctorOfASlot = updateAppointmentStatusByDoctorOfASlot;
const appointmentBookValidations = (body, req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const doctor = yield UserModel_1.default.findOne({ _id: body.doctorId, isDeleted: false, isActive: true });
    const appointmentDate = (0, UserController_1.getDayOrTimeFromDate)(body.appointmentDate);
    let slots = doctor.availability.filter(ele => {
        if (ele.clinic == body.clinicId)
            return ele;
    });
    const newSlots = [];
    for (let i = 0; i < slots[0].slots.length; i++) {
        if (slots[0].slots[i].type == body.appointmentType && slots[0].slots[i].day == appointmentDate.day) {
            newSlots.push(slots[0].slots[i]);
        }
    }
    const finalSlot = (0, UserController_1.makeSlotsFormat)(newSlots, body.appointemntType);
    //for inperson slot any number of user book appointment
    const BookedSlot = yield AppointmentModel_1.default.find({ clinicId: body.clinicId, doctorId: body.doctorId, appointmentDateAndTime: { $gte: new Date(appointmentDate.fullDate), $lt: new Date(appointmentDate.nextDate) }, appointmentType: { $ne: "INPERSON" }, status: { $ne: "CANCELLED" }, isDeleted: false });
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
