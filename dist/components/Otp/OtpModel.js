"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const OtpSchema = new mongoose.Schema({
    otp: {
        type: Number,
        required: true
    },
    phoneNumber: {
        type: String
    },
    isExpired: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });
const OtpModel = mongoose.model('otps', OtpSchema);
exports.default = OtpModel;
