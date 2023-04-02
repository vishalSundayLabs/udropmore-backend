"use strict";
/**
 * JwtHelper.ts
 */
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
exports.resetPasswordToken = exports.refreshToken = exports.decodeToken = exports.createToken = void 0;
const jwt = require("jsonwebtoken");
const express_1 = require("express");
const Config_1 = require("../config/Config");
const LoginClass_1 = require("../components/Login/LoginClass");
const ResponseClass_1 = require("../utils/ResponseClass");
const UserModel_1 = require("../components/Users/UserModel");
function createToken(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        const expiry = 60 * 24 * 60 * 60;
        const expiryStamp = Date.now() + expiry * 1000;
        const token = jwt.sign(payload, Config_1.default.JWTSECRET, {
            algorithm: "HS384",
            expiresIn: '1d',
            issuer: Config_1.default.ISSUER,
        });
        return { access_token: token, expirOn: expiryStamp };
    });
}
exports.createToken = createToken;
const decodeToken = (req, res, callback) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.header("idToken");
    if (token != "" && token != undefined) {
        try {
            const result = yield jwt.verify(token, Config_1.default.JWTSECRET);
            req.user = result;
            callback();
        }
        catch (error) {
            let response = new ResponseClass_1.ResponseError({
                error: "Authorization failed.",
                message: error.message,
            });
            return res.status(401).json(response);
        }
    }
    else {
        let response = new ResponseClass_1.ResponseError({
            message: "Authorization failed.",
            error: "'idToken' field is required",
        });
        return res.status(400).json(response);
    }
});
exports.decodeToken = decodeToken;
const refreshToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tkn = req.body.idToken || req.header("idToken");
    if (tkn != "" && tkn != undefined) {
        try {
            const result = yield jwt.verify(tkn, Config_1.default.JWTSECRET);
            const payload = { _id: result._id, email: result.email };
            const token = yield createToken(payload);
            let userInfo = yield UserModel_1.default.findOne({ _id: result._id }, { emailVerified: 1 });
            let response = new LoginClass_1.LoginSuccessResponse(Object.assign(Object.assign({}, token), { emailVerified: userInfo.emailVerified }));
            return res.status(200).json(response);
        }
        catch (error) {
            let response = new ResponseClass_1.ResponseError({
                message: "Authorization failed.",
                error: error.message,
            });
            return res.status(401).json(response);
        }
    }
    else {
        let response = new ResponseClass_1.ResponseError({
            message: "Authorization failed.",
            error: "'idToken' field is required",
        });
    }
    return res.status(400).json(express_1.response);
});
exports.refreshToken = refreshToken;
function resetPasswordToken(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        const expiry = 10 * 60;
        const expiryStamp = Date.now() + expiry * 1000;
        const token = jwt.sign(payload, Config_1.default.JWTSECRET, {
            algorithm: "HS384",
            expiresIn: expiry,
            issuer: Config_1.default.ISSUER,
        });
        return token;
    });
}
exports.resetPasswordToken = resetPasswordToken;
