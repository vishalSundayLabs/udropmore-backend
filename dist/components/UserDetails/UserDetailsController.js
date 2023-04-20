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
exports.updateUserDetails = exports.createUserDetails = void 0;
const Constants_1 = require("../../utils/Constants");
const ResponseClass_1 = require("../../utils/ResponseClass");
const UserDetailsModel_1 = require("./UserDetailsModel");
const createUserDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!body.motherId) {
        return res.status(Constants_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad request! Mother id must be provide."
        }));
    }
    const reqData = {
        userId: body.motherId,
        dateOfBirth: body.dateOfBirth,
        address: body.address,
        height: body.height,
        weight: body.weight,
        lastMenstrualDate: body.lastMenstrualDate,
        dueDate: body.dueDate,
        maritalStatus: body.maritalStatus,
        occupation: body.occupation,
        education: body.education,
        pregnancyWeek: body.pregnancyWeek,
        husbandDetails: body.husbandDetails,
        refBy: body.refBy,
        previousVisit: body.previousVisit,
        language: body.language,
        emergencyMobileNumber: body.emergencyMobileNumber,
        emergencyName: body.emergencyName,
        createdBy: req.userId,
    };
    try {
        const userDetails = yield UserDetailsModel_1.default.create(reqData);
        return res.status(Constants_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "User details create successfully.",
            result: userDetails
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
exports.createUserDetails = createUserDetails;
const updateUserDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!body.motherId) {
        return res.status(Constants_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad request! Mother id must be provide."
        }));
    }
    try {
        const userDetails = yield UserDetailsModel_1.default.findOne({ userId: body.motherId, isDeleted: false });
        if (body.dateOfBirth)
            userDetails.dateOfBirth = body.dateOfBirth;
        if (body.address)
            userDetails.address = body.address;
        if (body.height)
            userDetails.height = body.height;
        if (body.weight)
            userDetails.weight = body.weight;
        if (body.lastMenstrualDate)
            userDetails.lastMenstrualDate = body.lastMenstrualDate;
        if (body.dueDate)
            userDetails.dueDate = body.dueDate;
        if (body.maritalStatus)
            userDetails.maritalStatus = body.maritalStatus;
        if (body.education)
            userDetails.education = body.education;
        if (body.pregnancyWeek)
            userDetails.pregnancyWeek = body.pregnancyWeek;
        if (body.husbandDetails)
            userDetails.husbandDetails = body.husbandDetails;
        if (body.refBy)
            userDetails.refBy = body.refBy;
        if (body.language)
            userDetails.language = body.language;
        if (body.emergencyMobileNumber)
            userDetails.emergencyMobileNumber = body.emergencyMobileNumber;
        if (body.emergencyName)
            userDetails.emergencyName = body.emergencyName;
        if (body.previousVisit)
            userDetails.previousVisit = body.previousVisit;
        userDetails.updatedBy = req.userId;
        yield userDetails.save();
        return res.status(Constants_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "User details update successfully.",
            result: userDetails
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
exports.updateUserDetails = updateUserDetails;
