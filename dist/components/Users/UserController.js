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
exports.getDayOrTimeFromDate = exports.makeSlotsFormat = exports.userLogout = exports.getDoctorOfMotherById = exports.getPatientOfDoctorById = exports.mapMotherWithDoctor = exports.getAllUsers = exports.getSlots = exports.deleteUser = exports.userUpdate = exports.updateMother = exports.createUser = exports.getUserById = exports.getUser = void 0;
// models
const UserModel_1 = require("./UserModel");
// classes
const ResponseClass_1 = require("../../utils/ResponseClass");
const Master_1 = require("../../Constant/Master");
const AppointmentModel_1 = require("../Appointment/AppointmentModel");
const clinicModel_1 = require("../Clinic/clinicModel");
const bodyTraverse_1 = require("../../helpers/bodyTraverse");
const pagination_1 = require("../../helpers/pagination");
const UserDetailsModel_1 = require("../UserDetails/UserDetailsModel");
const CurrentObservastionModel_1 = require("../Consultation/CurrentObservastionModel");
const AntenatalTestModel_1 = require("../Consultation/AntenatalTestModel");
const TreatmentModel_1 = require("../Consultation/TreatmentModel");
const NextAntenatalTestModel_1 = require("../Consultation/NextAntenatalTestModel");
const sampleCurrentObservastion_1 = require("../../utils/sampleCurrentObservastion");
const sampleAntenatalTest_1 = require("../../utils/sampleAntenatalTest");
const sampleTreatment_1 = require("../../utils/sampleTreatment");
const sampleNextAntenatalTest_1 = require("../../utils/sampleNextAntenatalTest");
const PastHistoryModel_1 = require("../Consultation/PastHistoryModel");
const samplePastHostory_1 = require("../../utils/samplePastHostory");
let getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let uid = req.userId;
        let userInfo = yield UserModel_1.default.findOne({ _id: uid, isDeleted: false });
        if (!userInfo) {
            return res.status(404).json({
                success: false,
                message: "User does not exist.",
                error: "User does not exist.",
            });
        }
        return res.status(200).json(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "Success",
            result: userInfo
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
exports.getUser = getUser;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const params = req.params;
    if (!params.id) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad request! User Id must be provide!"
        }));
    }
    try {
        const user = yield UserModel_1.default.findOne({ _id: params.id, isDeleted: false });
        if (!user) {
            return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
                success: false,
                message: "User Id does not exist."
            }));
        }
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "get User successfully.",
            result: user
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
exports.getUserById = getUserById;
//this controller use only admin
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!body.phoneNumber || !body.userType || !body.platform || !body.firstName) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad request! ,first name  , phone number , userType , platform must be provide!"
        }));
    }
    const reqData = {
        firstName: body.firstName,
        lastName: body.lastName,
        middleName: body.middleName,
        email: body.email,
        phoneNumber: body.phoneNumber,
        userType: body.userType,
        platform: body.platform,
        registrationDetails: body.registrationDetails,
        degree: body.degree,
        speciality: body.speciality,
        awards: body.awards,
        experience: body.experience,
        consultationFeeDetails: body.consultationFeeDetails,
        clinic: body.clinic,
        memberships: body.memberships,
        gallary: body.gallary,
        services: body.services,
        availability: body.availability,
        status: body.status
    };
    try {
        const oldUser = yield UserModel_1.default.findOne({ phoneNumber: body.phoneNumber, isActive: true, isDeleted: false });
        if (oldUser) {
            return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseSuccess({
                success: false,
                message: "This phone number is already register!",
                result: oldUser
            }));
        }
        const user = yield UserModel_1.default.create(reqData);
        return res.status(Master_1.HTTP_CREATED).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: 'User created successfully!',
            result: user
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
exports.createUser = createUser;
const updateMother = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!body.phoneNumber) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad Request! Phone number must be provide."
        }));
    }
    try {
        const mother = yield UserModel_1.default.findOne({ phoneNumber: body.phoneNumber, isDeleted: false, userType: "MOTHER" });
        if (!mother) {
            return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
                success: false,
                message: "Bad Request! Invalid Mobile Number!"
            }));
        }
        (0, bodyTraverse_1.bodyTraverse)(mother, body);
        mother.updatedBy = req.userId;
        yield mother.save();
        return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "User Update successfully",
            result: mother
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
exports.updateMother = updateMother;
const userUpdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.id;
    const body = req.body;
    try {
        const user = yield UserModel_1.default.findOne({ _id: userId, isDeleted: false });
        if (!user) {
            return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
                success: false,
                message: "user does not exist!"
            }));
        }
        (0, bodyTraverse_1.bodyTraverse)(user, body);
        user.updatedBy = req.userId;
        yield user.save();
        return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "User Update successfully",
            result: user
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
exports.userUpdate = userUpdate;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.id;
    if (!userId) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad Request! , user id required!"
        }));
    }
    try {
        const user = yield UserModel_1.default.findOne({ _id: userId, isDeleted: false });
        if (!user) {
            return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
                success: false,
                message: "user already deleted ."
            }));
        }
        user.isDeleted = true;
        yield user.save();
        return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "User deleted successfully."
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
exports.deleteUser = deleteUser;
const getSlots = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const query = req.query;
    const { limit, skips } = (0, pagination_1.pagination)(query);
    try {
        const doctor = yield UserModel_1.default.findOne({ _id: body.doctor }).skip(skips).limit(limit);
        if (!doctor) {
            return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
                success: false,
                message: "Doctor not found!"
            }));
        }
        let slots = doctor.availability.filter(ele => {
            if (ele.clinic == body.clinic)
                return ele;
        });
        const bodyDate = (0, exports.getDayOrTimeFromDate)(body.date);
        const newSlots = [];
        for (let i = 0; i < slots[0].slots.length; i++) {
            if (slots[0].slots[i].type == body.appointmentType && slots[0].slots[i].day == bodyDate.day) {
                newSlots.push(slots[0].slots[i]);
            }
        }
        const finalSlot = (0, exports.makeSlotsFormat)(newSlots, body.appointmentType);
        let BookedSlot = [];
        if (body.appointmentType == "INPERSON") {
            BookedSlot = yield AppointmentModel_1.default.find({ clinicId: body.clinic, doctorId: body.doctor, appointmentDateAndTime: { $gte: new Date(bodyDate.fullDate), $lt: new Date(bodyDate.nextDate) }, appointmentType: { $ne: "INPERSON" }, status: { $ne: "CANCELLED" }, isDeleted: false });
        }
        else {
            BookedSlot = yield AppointmentModel_1.default.find({ clinicId: body.clinic, doctorId: body.doctor, appointmentDateAndTime: { $gte: new Date(bodyDate.fullDate), $lt: new Date(bodyDate.nextDate) }, status: { $ne: "CANCELLED" }, isDeleted: false });
        }
        if (BookedSlot.length > 0) {
            for (let j = 0; j < BookedSlot.length; j++) {
                let bookedSlotIndex = -1;
                const bookedSlot = (0, exports.getDayOrTimeFromDate)(BookedSlot[j].appointmentDateAndTime);
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
        if (!finalSlot[0]) {
            return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
                success: false,
                message: "Slots Not Available."
            }));
        }
        return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "get all slots successfully.",
            result: finalSlot
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
exports.getSlots = getSlots;
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const query = req.query;
    let findReqData;
    if (body.userType) {
        findReqData = { userType: body.userType, isDeleted: false };
    }
    const { limit, skips } = (0, pagination_1.pagination)(query);
    try {
        const users = yield UserModel_1.default.find(findReqData).skip(skips).limit(limit);
        return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "all users fetch successfully.",
            result: users
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
exports.getAllUsers = getAllUsers;
const mapMotherWithDoctor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!body.motherId || !body.mappedDoctor || !body.mappedClinic) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad Request! Mother id , doctor id or clinic id must be provide."
        }));
    }
    try {
        const mother = yield UserModel_1.default.findOne({ _id: body.motherId, isDeleted: false, userType: "MOTHER" });
        if (!mother) {
            return res.status(Master_1.HTTP_NOT_FOUND).send(new ResponseClass_1.ResponseError({
                success: false,
                message: "Bad Request! user not found!"
            }));
        }
        const doctor = yield UserModel_1.default.findOne({ _id: body.mappedDoctor, isDeleted: false, userType: "DOCTOR" });
        if (!doctor) {
            return res.status(Master_1.HTTP_NOT_FOUND).send(new ResponseClass_1.ResponseError({
                success: false,
                message: "Bad Request! Doctor not found!"
            }));
        }
        if (body.mappedDoctor)
            mother.mappedDoctor = body.mappedDoctor;
        const clinic = yield clinicModel_1.ClinicModel.findOne({ _id: body.mappedClinic, isDeleted: false });
        if (!clinic) {
            return res.status(Master_1.HTTP_NOT_FOUND).send(new ResponseClass_1.ResponseError({
                success: false,
                message: "Bad Request! Clinic not found!"
            }));
        }
        if (body.mappedClinic)
            mother.mappedClinic = body.mappedClinic;
        mother.updatedBy = req.userId;
        yield mother.save();
        samplePastHostory_1.samplePastHistory.userId = mother._id;
        samplePastHostory_1.samplePastHistory.doctorId = doctor._id;
        sampleCurrentObservastion_1.sampleCurrentObservastion.userId = mother._id;
        sampleCurrentObservastion_1.sampleCurrentObservastion.doctorId = doctor._id;
        sampleAntenatalTest_1.sampleAntentalTest.userId = mother._id;
        sampleAntenatalTest_1.sampleAntentalTest.doctorId = doctor._id;
        sampleTreatment_1.sampleTreatment.userId = mother._id;
        sampleTreatment_1.sampleTreatment.doctorId = doctor._id;
        sampleNextAntenatalTest_1.sampleNextAntenatalTest.userId = mother._id;
        sampleNextAntenatalTest_1.sampleNextAntenatalTest.doctorId = doctor._id;
        yield PastHistoryModel_1.default.create(samplePastHostory_1.samplePastHistory);
        yield CurrentObservastionModel_1.default.create(sampleCurrentObservastion_1.sampleCurrentObservastion);
        yield AntenatalTestModel_1.default.create(sampleAntenatalTest_1.sampleAntentalTest);
        yield TreatmentModel_1.default.create(sampleTreatment_1.sampleTreatment);
        yield NextAntenatalTestModel_1.default.create(sampleNextAntenatalTest_1.sampleNextAntenatalTest);
        return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "Mother mapped with doctor successfully.",
            result: mother
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
exports.mapMotherWithDoctor = mapMotherWithDoctor;
const getPatientOfDoctorById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const params = req.params;
    if (!params.doctorId) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad request! Doctor Id must be provide!"
        }));
    }
    try {
        const patients = yield UserModel_1.default.find({ mappedDoctor: params.doctorId, userType: "MOTHER", isDeleted: false, isActive: true });
        const patientDetails = [];
        for (let i = 0; i < patients.length; i++) {
            const patient = yield UserDetailsModel_1.default.findOne({ userId: patients[i]._id, isDeleted: false }).exec();
            patientDetails.push(Object.assign(Object.assign({}, patient._doc), patients[i]._doc));
        }
        return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "get all patient of a doctor successfully.",
            result: patientDetails
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
exports.getPatientOfDoctorById = getPatientOfDoctorById;
const getDoctorOfMotherById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const params = req.params;
    if (!params.motherId) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad request! Mother Id must be provide!"
        }));
    }
    try {
        const patient = yield UserModel_1.default.findOne({ _id: params.motherId, isDeleted: false, isActive: true });
        if (!patient) {
            return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
                success: false,
                message: "user does not exist!"
            }));
        }
        const doctor = yield UserModel_1.default.findOne({ _id: patient.mappedDoctor, isDeleted: false, isActive: true });
        if (!doctor) {
            return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
                success: false,
                message: "Right now user not mapped with doctor."
            }));
        }
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "get doctor successfully.",
            result: doctor
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
exports.getDoctorOfMotherById = getDoctorOfMotherById;
const userLogout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield UserModel_1.default.findOne({ _id: req.userId, userType: req.userType });
        if (!user) {
            return res.status(Master_1.HTTP_NOT_FOUND).send(new ResponseClass_1.ResponseSuccess({
                success: true,
                message: "User not found!",
                result: null
            }));
        }
        if (!user.jwtToken) {
            return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
                success: true,
                message: "User already logout!",
                result: null
            }));
        }
        user.jwtToken = null;
        yield user.save();
        return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "User logout successfully!",
            result: null
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
exports.userLogout = userLogout;
const makeSlotsFormat = (slots, slotType) => {
    const slotsTime = slotType == 'INPERSON' ? +process.env.INPERSON_SLOT_TIME : slotType == "VIDEOCALL" ? +process.env.VIDEOCALL_SLOT_TIME : +process.env.INPERSON_SLOT_TIME;
    const newSlots = [];
    for (let i = 0; i < slots.length; i++) {
        const timeSlots = slots[i].timeSlots;
        for (let j = 0; j < timeSlots.length; j++) {
            let newTime = timeSlots[j].split("-");
            let startTime = newTime[0];
            let endTime = newTime[1];
            let timeDiff = (Math.floor(endTime) - Math.floor(startTime)) * 60;
            let mintCount = 0;
            while (timeDiff != mintCount) {
                if (mintCount % 60 == 0 && mintCount != 0) {
                    startTime++;
                }
                newSlots.push({
                    day: slots[i].day,
                    time: `${startTime}:${mintCount % 60}`,
                    status: "AVAILABLE",
                });
                mintCount = mintCount + slotsTime;
            }
        }
    }
    return newSlots;
};
exports.makeSlotsFormat = makeSlotsFormat;
const getDayOrTimeFromDate = (date) => {
    const newDate = new Date(date);
    const currDate = new Date();
    const days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
    const dayInNumber = newDate.getDay();
    const hours = newDate.getHours();
    const minutes = newDate.getMinutes();
    const years = newDate.getFullYear();
    const months = newDate.getMonth();
    const dates = newDate.getDate();
    const fullDate = `${years}-${months + 1}-${dates}`;
    const nextDate = `${months + 2 == 13 && dates + 1 == 32 ? years + 1 : years}-${dates + 1 == 32 ? months + 2 == 13 ? 1 : months + 2 : months + 1}-${dates + 1 == 32 ? 1 : dates + 1}`;
    const betweenTwoDateNoOfDays = Math.round(((+currDate) - (+newDate)) / 86400000);
    return {
        day: days[dayInNumber],
        time: `${hours}:${minutes}`,
        fullDate: fullDate,
        nextDate: nextDate,
        noOfDays: betweenTwoDateNoOfDays
    };
};
exports.getDayOrTimeFromDate = getDayOrTimeFromDate;
