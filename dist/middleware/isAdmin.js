"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdmin = void 0;
const Master_1 = require("../Constant/Master");
const ResponseClass_1 = require("../utils/ResponseClass");
const isAdmin = (req, res, next) => {
    if (req.userType !== 'ONI_ADMIN' || req.platform !== 'ADMIN') {
        return res.status(Master_1.HTTP_UNAUTHORIZED).send(new ResponseClass_1.ResponseError({
            success: false,
            message: 'You are not access this api!',
            error: 'Unauthorized User'
        }));
    }
    next();
};
exports.isAdmin = isAdmin;
