"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOtp = void 0;
const createOtp = () => {
    return process.env.DEV_OTP ? process.env.DEV_OTP : Math.floor(Math.random() * 1000) + 1000;
};
exports.createOtp = createOtp;
