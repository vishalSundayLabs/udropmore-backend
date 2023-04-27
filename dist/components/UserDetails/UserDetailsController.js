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
exports.getPastHistoryMasterConstant = exports.getWeightByBmi = exports.getUserDetailsbyId = exports.updateUserDetails = exports.createUserDetails = void 0;
const bodyTraverse_1 = require("../../helpers/bodyTraverse");
const Constants_1 = require("../../utils/Constants");
const ResponseClass_1 = require("../../utils/ResponseClass");
const Constants_2 = require("../../utils/Constants");
const UserModel_1 = require("../Users/UserModel");
const UserDetailsModel_1 = require("./UserDetailsModel");
const Weights_1 = require("../../utils/Weights");
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
        const user = yield UserModel_1.default.findOne({ _id: userDetails.userId, isActive: true, isDeleted: false });
        //add feilds for update 
        user.firstName = body.firstName ? body.firstName : user.firstName;
        user.lastName = body.lastName ? body.lastName : user.lastName;
        user.email = body.email ? body.email : user.email;
        user.updatedBy = req.userId;
        yield user.save();
        if (!userDetails) {
            return res.status(Constants_1.HTTP_NOT_FOUND).send(new ResponseClass_1.ResponseError({
                success: false,
                message: "user details not found."
            }));
        }
        //add feilds for update
        (0, bodyTraverse_1.bodyTraverse)(userDetails, body);
        userDetails.updatedBy = req.userId;
        yield userDetails.save();
        return res.status(Constants_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "User details update successfully.",
            result: { userDetails, firstName: user.firstName, lastName: user.lastName, email: user.email }
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
        const user = yield UserModel_1.default.findOne({ _id: userDetails.userId, isActive: true, isDeleted: false });
        if (!userDetails) {
            return res.status(Constants_1.HTTP_NOT_FOUND).send(new ResponseClass_1.ResponseError({
                success: false,
                message: "user details not found."
            }));
        }
        return res.status(Constants_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "get User details successfully.",
            result: { userDetails, firstName: user.firstName, lastName: user.lastName, email: user.email }
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
const getWeightByBmi = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.query;
    const params = req.params;
    if (!params.motherId || !query.bmi) {
        return res.status(Constants_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad request! Mother id or BMI must be provide."
        }));
    }
    try {
        const motherWeightGainChart = yield UserDetailsModel_1.default.findOne({ userId: params.motherId }, { weightGainChart: true });
        const weightRangeUsingBmi = (0, Weights_1.weightRange)(Number(query.bmi));
        return res.status(Constants_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "get User details successfully.",
            result: { item: motherWeightGainChart, weightGainRange: weightRangeUsingBmi }
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
exports.getWeightByBmi = getWeightByBmi;
const getPastHistoryMasterConstant = (req, res) => {
    return res.status(Constants_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
        success: true,
        message: "get Constant successfully.",
        result: {
            whoInFamily: Constants_2.whoInFamily,
            diseases: Constants_2.diseases,
            typeOfTermination: Constants_2.typeOfTermination,
            typeOfAbortion: Constants_2.typeOfAbortion,
            typeOfDelivery: Constants_2.typeOfDelivery,
            liveBirthsDescription: Constants_2.liveBirthsDescription,
            genderOfChild: Constants_2.genderOfChild,
            pregnancyType: Constants_2.pregnancyType,
            assisted: Constants_2.assisted,
            donor: Constants_2.donor,
            flow: Constants_2.flow,
            natureOfCycle: Constants_2.natureOfCycle,
            sourceOfVisit: Constants_2.sourceOfVisit,
            language: Constants_2.language
        }
    }));
};
exports.getPastHistoryMasterConstant = getPastHistoryMasterConstant;
