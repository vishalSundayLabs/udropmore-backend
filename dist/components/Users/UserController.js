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
exports.deleteUser = exports.userUpdate = exports.updateMother = exports.createUser = exports.getUser = void 0;
// models
const UserModel_1 = require("./UserModel");
// classes
const ResponseClass_1 = require("../../utils/ResponseClass");
const Constants_1 = require("../../utils/Constants");
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
        if (body.firstName) {
            user.firstName = body.firstName;
        }
        if (body.lastName) {
            user.lastName = body.lastName;
        }
        if (body.middleName) {
            user.middleName = body.middleName;
        }
        if (body.email) {
            user.email = body.email;
        }
        if (body.phoneNumber) {
            user.phoneNumber = body.phoneNumber;
        }
        if (body.userType) {
            user.userType = body.userType;
        }
        if (body.platform) {
            user.platform = body.platform;
        }
        if (body.registrationDetails) {
            user.registrationDetails = body.registrationDetails;
        }
        if (body.degree) {
            user.degree = body.degree;
        }
        if (body.speciality) {
            user.speciality = body.speciality;
        }
        if (body.awards) {
            user.awards = body.awards;
        }
        if (body.experience) {
            user.experience = body.experience;
        }
        if (body.consultationFeeDetails) {
            user.consultationFeeDetails = body.consultationFeeDetails;
        }
        if (body.clinic) {
            user.clinic = body.clinic;
        }
        if (body.memberships) {
            user.memberships = body.memberships;
        }
        if (body.gallery) {
            user.gallery = body.gallery;
        }
        if (body.services) {
            user.services = body.services;
        }
        if (body.availability) {
            user.availability = body.availability;
        }
        if (body.status) {
            user.status = body.status;
        }
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
