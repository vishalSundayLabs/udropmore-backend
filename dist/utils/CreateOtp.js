"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOtp = void 0;
const Config_1 = require("../config/Config");
const createOtp = () => {
    return Config_1.default.DEV_OTP ? Config_1.default.DEV_OTP : Math.floor(Math.random() * 1000) + 1000;
};
exports.createOtp = createOtp;
