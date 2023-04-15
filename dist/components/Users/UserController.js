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
exports.getDayOrTimeFromDate = exports.MakeSlotesFormat = exports.getAllUsers = exports.getSlots = exports.deleteUser = exports.userUpdate = exports.updateMother = exports.createUser = exports.getUser = void 0;
// models
const UserModel_1 = require("./UserModel");
// classes
const ResponseClass_1 = require("../../utils/ResponseClass");
const Constants_1 = require("../../utils/Constants");
const AppointmentModel_1 = require("../Appointment/AppointmentModel");
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
        return res.status(200).json({
            success: true,
            message: "Success",
            user: Object.assign({}, userInfo.toJSON()),
        });
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
//this controller use only admin
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!body.phoneNumber || !body.userType || !body.platform || !body.firstName) {
        return res.status(Constants_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
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
        const oldUser = yield UserModel_1.default.findOne({ phoneNumber: body.phoneNumber });
        if (oldUser) {
            return res.status(Constants_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
                success: false,
                message: "This phone number is already register!",
            }));
        }
        const user = yield UserModel_1.default.create(reqData);
        return res.status(Constants_1.HTTP_CREATED).send(new ResponseClass_1.ResponseSuccess({
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
    const reqData = {};
    if (body.firstName)
        reqData.firstName = body.firstName;
    if (body.lastName)
        reqData.lastName = body.lastName;
    if (body.email)
        reqData.email = body.email;
    if (body.userType)
        reqData.userType = body.userType;
    if (body.isActive)
        reqData.isActive = body.isActive;
    try {
        reqData.updatedBy = req.userId;
        yield UserModel_1.default.findOneAndUpdate({ phoneNumber: body.phoneNumber, isDeleted: false }, { $set: reqData });
        return res.status(Constants_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "User Update successfully",
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
            return res.status(Constants_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
                success: false,
                message: "user does not exist!"
            }));
        }
        if (body.firstName)
            user.firstName = body.firstName;
        if (body.lastName)
            user.lastName = body.lastName;
        if (body.middleName)
            user.middleName = body.middleName;
        if (body.email)
            user.email = body.email;
        if (body.phoneNumber)
            user.phoneNumber = body.phoneNumber;
        if (body.userType)
            user.userType = body.userType;
        if (body.platform)
            user.platform = body.platform;
        if (body.registrationDetails)
            user.registrationDetails = body.registrationDetails;
        if (body.degree)
            user.degree = body.degree;
        if (body.speciality)
            user.speciality = body.speciality;
        if (body.awards)
            user.awards = body.awards;
        if (body.experience)
            user.experience = body.experience;
        if (body.consultationFeeDetails)
            user.consultationFeeDetails = body.consultationFeeDetails;
        if (body.clinic)
            user.clinic = body.clinic;
        if (body.memberships)
            user.memberships = body.memberships;
        if (body.gallery)
            user.gallery = body.gallery;
        if (body.services)
            user.services = body.services;
        if (body.availability)
            user.availability = body.availability;
        if (body.status)
            user.status = body.status;
        user.updatedBy = req.userId;
        yield user.save();
        return res.status(Constants_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
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
        return res.status(Constants_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad Request! , user id required!"
        }));
    }
    try {
        const user = yield UserModel_1.default.findOne({ _id: userId, isDeleted: false });
        if (!user) {
            return res.status(Constants_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
                success: false,
                message: "user already deleted ."
            }));
        }
        user.isDeleted = true;
        yield user.save();
        return res.status(Constants_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
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
    try {
        const doctor = yield UserModel_1.default.findOne({ _id: body.doctor });
        if (!doctor) {
            return res.status(Constants_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
                success: false,
                message: "Doctor not found!"
            }));
        }
        let slots = doctor.availability.map(ele => {
            if (ele.clinic == body.clinic)
                return ele;
        });
        const bodyDate = (0, exports.getDayOrTimeFromDate)(body.date);
        const newSlots = [];
        for (let i = 0; i < slots[0].slots.length; i++) {
            console.log('for loop se aaya', slots[0].slots[i]);
            console.log(slots[0].slots[i].type == body.appointmentType, slots[0].slots[i].type, body.appointmentType, slots[0].slots[i].day == bodyDate.day, slots[0].slots[i].day, bodyDate.day);
            if (slots[0].slots[i].type == body.appointmentType && slots[0].slots[i].day == bodyDate.day) {
                newSlots.push(slots[0].slots[i]);
                console.log('ye select hua', slots[0].slots[i], newSlots);
            }
        }
        console.log('new solt mila hai', newSlots);
        const finalSlot = (0, exports.MakeSlotesFormat)(newSlots);
        console.log(finalSlot, 'final slot hai');
        const BookedSlot = yield AppointmentModel_1.default.find({ clinicId: body.clinic, doctorId: body.doctor, status: { $ne: "CANCELLED" }, isDeleted: false });
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
        console.log('response return se phele aaya hai ', finalSlot);
        return res.status(Constants_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
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
    let findReqData;
    if (body.userType) {
        findReqData = { userType: body.userType, isDeleted: false };
    }
    try {
        const users = yield UserModel_1.default.find(findReqData);
        return res.status(Constants_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
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
const MakeSlotesFormat = (slots) => {
    const slotsTime = +process.env.SLOT_TIME;
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
                // startTime = startTime.toString().length == 1 ? '0' + startTime : startTime
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
exports.MakeSlotesFormat = MakeSlotesFormat;
// export const addPatient = async (req, res) => {
//   const body = req.body
//   if (!body.platform || !body.PhoneNumber) {
//     return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
//       success: false,
//       message: "Bad Request! Platform and phoneNumber must be provide",
//     }))
//   }
//   try {
//     const user = await UserModel.findOne({ phoneNumber: body.phoneNumber })
//   } catch (error) {
//     let response = new ResponseError({
//       message: "Something went wrong",
//       error: error.message,
//     });
//     return res.status(500).json(response);
//   }
// }
const getDayOrTimeFromDate = (date) => {
    const newDate = new Date(date);
    const days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
    const dayInNumber = newDate.getDay();
    const hours = newDate.getHours();
    const minutes = newDate.getMinutes();
    return {
        day: days[dayInNumber],
        time: `${hours}:${minutes}`
    };
};
exports.getDayOrTimeFromDate = getDayOrTimeFromDate;
