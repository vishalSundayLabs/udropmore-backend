"use strict";
/**
 * OtpModel.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const otpSchema = new mongoose.Schema({
    uid: { type: mongoose.Types.ObjectId, ref: "user" },
    phoneNumber: { type: Number },
    code: { type: Number },
}, {
    timestamps: true,
});
exports.default = mongoose.model("otp", otpSchema);
