"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const Constants_1 = require("../utils/Constants");
const ResponseClass_1 = require("../utils/ResponseClass");
const jwt = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
    const header = req.headers;
    if (!header) {
        return res.status(Constants_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: 'Headers must be provide!',
            error: "Bad Request!"
        }));
    }
    const token = header.accesstoken;
    if (!token) {
        return res.status(Constants_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Token must be provided!",
            error: 'Bad Request!'
        }));
    }
    jwt.verify(token, process.env.JWTSECRET, (error, decoded) => {
        if (error) {
            return res.status(Constants_1.HTTP_UNAUTHORIZED).send(new ResponseClass_1.ResponseError({
                success: false,
                message: "Unauthorized User",
                error: error
            }));
        }
        req.userId = decoded.userId;
        req.platform = decoded.platform;
        req.userType = decoded.userType;
        next();
    });
};
exports.verifyToken = verifyToken;
