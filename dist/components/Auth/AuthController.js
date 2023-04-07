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
exports.logout = exports.validateOtp = exports.sendOtp = void 0;
// models
const UserModel_1 = require("../Users/UserModel");
const OtpModel_1 = require("../Otp/OtpModel");
const jwt = require("jsonwebtoken");
// classes
const ResponseClass_1 = require("../../utils/ResponseClass");
const TpiServices_1 = require("../Tpi/TpiServices");
const LoginOtp_1 = require("./req_body/LoginOtp");
const CompareObjectKeys_1 = require("../../utils/CompareObjectKeys");
const Constants_1 = require("../../utils/Constants");
const CreateOtp_1 = require("../../utils/CreateOtp");
const ValidateOtp_1 = require("./req_body/ValidateOtp");
const AuthSession_1 = require("./AuthSession");
const sendOtp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if ((0, CompareObjectKeys_1.compareObjectKeys)(body, LoginOtp_1.loginOtpBody)) {
        return res.status(Constants_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseBodyFormatError({
            message: Constants_1.INCORRECT_BODY_FORMAT_MESSAGE,
            bodyFormat: process.env.SHOW_BODY_FORMAT ? LoginOtp_1.loginOtpBody : null
        }));
    }
    try {
        var user = yield UserModel_1.default.findOne({ phoneNumber: body.phoneNumber, platform: body.platform }).exec();
        if (!user && body.platform != 'MOTHER') {
            return res.status(Constants_1.HTTP_NOT_FOUND).send(new ResponseClass_1.ResponseError({
                message: "User Not found. Please contact your admin"
            }));
        }
        const otp = (0, CreateOtp_1.createOtp)();
        const text = `Dear customer, use this One Time Password (${otp}) to log in to your Onicare account. This OTP will be valid for the next 30 Sec.`;
        //create otp 
        yield OtpModel_1.default.create({ phoneNumber: body.phoneNumber, otp: otp });
        //send otp
        (0, TpiServices_1.sendWaOtp)(body.phoneNumber, text)
            .then((response) => {
            return res.status(Constants_1.HTTP_OK).send(response);
        })
            .catch((error) => {
            return res.status(Constants_1.HTTP_INTERNAL_SERVER_ERROR).send(new ResponseClass_1.ResponseError({
                message: "Something went wrong",
                error: error
            }));
        });
    }
    catch (error) {
        return res.status(Constants_1.HTTP_INTERNAL_SERVER_ERROR).send(new ResponseClass_1.ResponseError({
            message: "Something went wrong",
            error: error.message
        }));
    }
});
exports.sendOtp = sendOtp;
const validateOtp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if ((0, CompareObjectKeys_1.compareObjectKeys)(body, ValidateOtp_1.validateOtpBody)) {
        return res.status(Constants_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseBodyFormatError({
            message: Constants_1.INCORRECT_BODY_FORMAT_MESSAGE,
            bodyFormat: process.env.SHOW_BODY_FORMAT ? ValidateOtp_1.validateOtpBody : null
        }));
    }
    try {
        const otp = yield OtpModel_1.default.find({ phoneNumber: body.phoneNumber }).sort({ $natural: -1 }).limit(1);
        const message = otp[0] ? otp[0].otp != body.otp ? "Invalid OTP" : isExpiredOtp(otp[0].createdAt) ? "OTP Expired. Please try again!" : null : "Invalid Phone number";
        if (message) {
            return res.status(Constants_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
                success: false,
                message: message
            }));
        }
        //create jwt token  
        var user = yield UserModel_1.default.findOne({ phoneNumber: otp[0].phoneNumber });
        if (!user || body.platform == 'MOTHER') {
            const newUser = yield UserModel_1.default.create({ phoneNumber: body.phoneNumber, userType: "MOTHER", platform: body.platform });
            user = newUser;
        }
        const jwtToken = jwt.sign({ userId: user._id, userType: user.userType, platform: user.platform }, process.env.JWTSECRET, {
            expiresIn: process.env.JWTEXPIRESIN
        });
        user.jwtToken = jwtToken;
        yield user.save();
        // create the auth session with token
        yield AuthSession_1.default.create({ userId: user._id, jwtToken: jwtToken, isActive: true });
        return res.status(Constants_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "Login successful",
            result: {
                accessToken: jwtToken,
                user: user
            }
        }));
    }
    catch (error) {
        console.log(error);
        return res.status(Constants_1.HTTP_INTERNAL_SERVER_ERROR).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Internal server error!",
            error: error
        }));
    }
});
exports.validateOtp = validateOtp;
const logout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield UserModel_1.default.findOne({ _id: req.userId, platform: req.platform, userType: req.userType });
        user.jwtToken = null;
        yield user.save();
        yield AuthSession_1.default.findOneAndUpdate({ userId: user._id, jwtToken: user.jwtToken, isActive: true }, { $set: { isActive: false } });
        return res.status(Constants_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "Logout successful"
        }));
    }
    catch (error) {
        console.log(error);
        return res.status(Constants_1.HTTP_INTERNAL_SERVER_ERROR).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Internal server error!",
            error: error
        }));
    }
});
exports.logout = logout;
const isExpiredOtp = (otpCreationTime) => {
    const expiryTime = process.env.OTP_EXPIRY || 1200;
    const otpCreationTimeFormatted = new Date(otpCreationTime);
    const TotalPastSeconds = Math.floor(otpCreationTimeFormatted.getHours() * 60 * 60 + otpCreationTimeFormatted.getMinutes() * 60 + otpCreationTimeFormatted.getSeconds());
    const currTime = new Date();
    const TotalCurrTimeSeconds = Math.floor(currTime.getHours() * 60 * 60 + currTime.getMinutes() * 60 + currTime.getSeconds());
    console.log(TotalCurrTimeSeconds - TotalPastSeconds);
    if (TotalCurrTimeSeconds - TotalPastSeconds > expiryTime) {
        return true;
    }
    else {
        return false;
    }
};
