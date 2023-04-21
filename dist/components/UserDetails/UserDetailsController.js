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
exports.getUserDetailsbyId = exports.updateUserDetails = exports.createUserDetails = void 0;
const bodyTraverse_1 = require("../../helpers/bodyTraverse");
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
        //add feilds for update
        if (!userDetails) {
            return res.status(Constants_1.HTTP_NOT_FOUND).send(new ResponseClass_1.ResponseError({
                success: false,
                message: "user details not found."
            }));
        }
        (0, bodyTraverse_1.bodyTraverse)(userDetails, body);
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
const getUserDetailsbyId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const params = req.params;
    if (!params.motherId) {
        return res.status(Constants_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad request! Mother id must be provide."
        }));
    }
    try {
        const userDetails = yield UserDetailsModel_1.default.findOne({ userId: params.motherId, isDeleted: false });
        if (!userDetails) {
            return res.status(Constants_1.HTTP_NOT_FOUND).send(new ResponseClass_1.ResponseError({
                success: false,
                message: "user details not found."
            }));
        }
        return res.status(Constants_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "get User details successfully.",
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
exports.getUserDetailsbyId = getUserDetailsbyId;
