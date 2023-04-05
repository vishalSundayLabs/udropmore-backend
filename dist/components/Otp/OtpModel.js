"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const OtpSchema = new mongoose.Schema({
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
    },
    otp: {
        type: Number,
        required: true
    },
    phoneNumber: {
        type: Number
    },
    isExpired: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});
const OtpModel = mongoose.model('otps', OtpSchema);
exports.default = OtpModel;
