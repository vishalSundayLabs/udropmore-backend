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
exports.getUser = exports.createUser = void 0;
// utils
const utility_1 = require("../../utils/utility");
// helpers
// models
const UserModel_1 = require("./UserModel");
const OtpModel_1 = require("../Otp/OtpModel");
// classes
const ResponseClass_1 = require("../../utils/ResponseClass");
const UserClass_1 = require("./UserClass");
// validation
const UserValidate_1 = require("./UserValidate");
const ValidatorHelper_1 = require("../../helpers/ValidatorHelper");
let createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let user = yield UserModel_1.default.findOne({ email: req.body.email });
        if (user) {
            let response = new ResponseClass_1.ResponseError({
                error: "Email already exists.",
                message: "Email already exists.",
            });
            return res.status(409).send(response);
        }
    }
    catch (error) {
        let response = new ResponseClass_1.ResponseError({
            message: "Something went wrong",
            error: error.message,
        });
        return res.status(500).send(response);
    }
    const code = (0, utility_1.createOtp)();
    let userValidate = new UserValidate_1.Create();
    userValidate.firstName = req.body.firstName;
    userValidate.lastName = req.body.lastName;
    userValidate.email = req.body.email;
    userValidate.password = req.body.password;
    try {
        let result = yield (0, ValidatorHelper_1.validateJson)(userValidate);
    }
    catch (e) {
        let response = new ResponseClass_1.ResponseError(e);
        return res.status(404).send(response);
    }
    try {
        let userDb = new UserModel_1.default(userValidate);
        let userRecord = yield userDb.save();
        let otpDb = new OtpModel_1.default({
            uid: userRecord._id,
            email: req.body.email,
            code: code,
        });
        yield otpDb.save();
        let response = new UserClass_1.UserResponseSuccess({
            user: userRecord,
        });
        return res.status(201).json(response);
    }
    catch (error) {
        let response = new ResponseClass_1.ResponseError({
            message: "Something went wrong",
            error: error.message,
        });
        return res.status(500).send(response);
    }
});
exports.createUser = createUser;
let getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let uid = req.user._id;
        let userInfo = yield UserModel_1.default.findOne({ _id: uid });
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
