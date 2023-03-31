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
exports.login = void 0;
// external libraries
const bcrypt = require("bcryptjs");
// utils
const utility_1 = require("../../utils/utility");
// helpers
const JwtHelper_1 = require("../../helpers/JwtHelper");
// models
const UserModel_1 = require("../Users/UserModel");
const OtpModel_1 = require("../Otp/OtpModel");
// classes
const LoginClass_1 = require("./LoginClass");
const ResponseClass_1 = require("../../utils/ResponseClass");
// validation
let login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let auth = req.headers.authorization;
        let data = auth.split("Basic ");
        let encrypt = Buffer.from(data[1], "base64").toString();
        if (!encrypt) {
            let response = new ResponseClass_1.ResponseError({
                error: "missing login credentials",
                message: "missing login credentials",
            });
            return res.status(400).json(response);
        }
        let decode = yield (0, utility_1.decodeBase64String)(encrypt);
        let userInfo = yield UserModel_1.default.findOne({ email: decode.email, isActive: true });
        if (!userInfo) {
            let response = new ResponseClass_1.ResponseError({
                message: "User does dot exists.",
                error: "User does dot exists.",
            });
            return res.status(404).json(response);
        }
        let match = yield bcrypt.compare(decode.password, userInfo.password);
        if (!match) {
            let response = new ResponseClass_1.ResponseError({
                error: "incorrect username or password.",
                message: "incorrect email password",
            });
            return res.status(400).json(response);
        }
        if (userInfo.emailVerified) {
            const token = yield (0, JwtHelper_1.createToken)({
                email: userInfo.email,
                _id: userInfo._id,
            });
            let response = new LoginClass_1.LoginSuccessResponse(Object.assign(Object.assign({}, token), { emailVerified: userInfo.emailVerified }));
            return res.status(200).json(response);
        }
        else {
            const code = (0, utility_1.createOtp)();
            let update = yield OtpModel_1.default.updateOne({ email: decode.email }, { uid: userInfo._id, code: code }, { upsert: true });
            let response = new LoginClass_1.UnverifiedLoginSuccessResponse({
                emailVerified: userInfo.emailVerified,
            });
            return res.status(200).json(response);
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
exports.login = login;
