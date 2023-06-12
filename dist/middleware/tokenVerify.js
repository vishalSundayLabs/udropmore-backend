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
exports.verifyToken = void 0;
const UserModel_1 = require("../components/Users/UserModel");
const Master_1 = require("../Constant/Master");
const ResponseClass_1 = require("../utils/ResponseClass");
const jwt = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
    const header = req.headers;
    if (!header) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: 'Headers must be provide!',
            error: "Bad Request!"
        }));
    }
    const token = header.accesstoken;
    if (!token) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Token must be provided!",
            error: 'Bad Request!'
        }));
    }
    jwt.verify(token, process.env.JWTSECRET, (error, decoded) => __awaiter(void 0, void 0, void 0, function* () {
        if (error) {
            return res.status(Master_1.HTTP_UNAUTHORIZED).send(new ResponseClass_1.ResponseError({
                success: false,
                message: "Unauthorized User",
                error: error
            }));
        }
        req.userId = decoded.userId;
        req.platform = decoded.platform;
        req.userType = decoded.userType;
        const user = yield UserModel_1.default.findOne({ _id: decoded.userId, userType: decoded.userType, isDeleted: false });
        if (!user || user.jwtToken != token) {
            return res.status(Master_1.HTTP_UNAUTHORIZED).send(new ResponseClass_1.ResponseError({
                success: false,
                message: "Unauthorized Token",
                error: error
            }));
        }
        next();
    }));
};
exports.verifyToken = verifyToken;
