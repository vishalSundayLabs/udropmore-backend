"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const Constants_1 = require("../utils/Constants");
const ResponseClass_1 = require("../utils/ResponseClass");
const jwt = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
    const header = req.headers["authorization"];
    if (!header) {
        return res.status(Constants_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: 'headers must be provide!',
            error: "Bad Request!"
        }));
    }
    const token = header.split(' ')[1];
    if (!token) {
        return res.status(Constants_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "token must be provide!",
            error: 'Bad Request!'
        }));
    }
    jwt.verify(token, process.env.JWTSECRET, (error, decoded) => {
        if (error) {
            return res.status(Constants_1.HTTP_UNAUTHORIZED).send(new ResponseClass_1.ResponseError({
                success: false,
                message: "Unauthorized User",
            }));
        }
        req.userId = decoded.userId;
        req.platform = decoded.platform;
        req.userType = decoded.userType;
        next();
    });
};
exports.verifyToken = verifyToken;
