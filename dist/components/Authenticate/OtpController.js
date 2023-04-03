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
exports.resendOtp = exports.confirmOtp = void 0;
// utils
const utility_1 = require("../../utils/utility");
// helpers
const JwtHelper_1 = require("../../helpers/JwtHelper");
const ValidatorHelper_1 = require("../../helpers/ValidatorHelper");
// models
const UserModel_1 = require("../Users/UserModel");
const OtpModel_1 = require("./OtpModel");
// classes
const ResponseClass_1 = require("../../utils/ResponseClass");
const LoginClass_1 = require("../Login/LoginClass");
// validation
const OtpValidate_1 = require("./OtpValidate");
let confirmOtp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let otpValidate = new OtpValidate_1.OtpValidate();
    otpValidate.phoneNumber = req.body.phoneNumber;
    otpValidate.code = req.body.code;
    try {
        let result = yield (0, ValidatorHelper_1.validateJson)(otpValidate);
    }
    catch (e) {
        let response = new ResponseClass_1.ResponseError(e);
        return res.status(404).send(response);
    }
    try {
        let record = yield OtpModel_1.default.findOne(req.body).populate("uid", "email ssn");
        if (record) {
            let info = JSON.parse(JSON.stringify(record.uid));
            const token = yield (0, JwtHelper_1.createToken)(info);
            yield record.remove();
            yield UserModel_1.default.findOneAndUpdate({ _id: record.uid._id }, { $set: { emailVerified: true } });
            let response = new LoginClass_1.LoginSuccessResponse(Object.assign(Object.assign({}, token), { emailVerified: true }));
            return res.status(200).json(response);
        }
        else {
            let response = new ResponseClass_1.ResponseError({
                error: "Invalid OTP.",
                message: "Invalid OTP.",
            });
            return res.status(400).json(response);
        }
    }
    catch (error) {
        let response = new ResponseClass_1.ResponseError({
            message: "Something went wrong",
            error: error.message,
        });
        return res.status(500).send(response);
    }
});
exports.confirmOtp = confirmOtp;
let resendOtp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const code = (0, utility_1.createOtp)();
        let userRecord = yield UserModel_1.default.findOne({ email: req.body.email });
        let update = yield OtpModel_1.default.findOneAndUpdate({ email: req.body.email }, { $set: { code: code } }, { upsert: true, new: true });
        let response = new ResponseClass_1.ResponseSuccess({});
        return res.status(200).json(response);
    }
    catch (error) {
        let response = new ResponseClass_1.ResponseError({
            message: "Something went wrong",
            error: error.message,
        });
        return res.status(500).send(response);
    }
});
exports.resendOtp = resendOtp;
