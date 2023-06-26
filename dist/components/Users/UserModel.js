"use strict";
/**
 * UserModel.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        dafault: "",
    },
    lastName: {
        type: String,
        default: ""
    },
    middleName: {
        type: String,
        default: ""
    },
    walletBalance: { type: Number, default: 0 },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        match: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    },
    emailVerified: { type: Boolean, default: false },
    phoneNumber: {
        type: String,
        unique: true,
        require: [true, "Missing 'phone number' field."],
    },
    userType: {
        type: String,
        enum: ['ADMIN', "USER"],
        default: "USER"
    },
    status: {
        type: String,
        enum: ['ACTIVE', "INACTIVE"],
        default: "ACTIVE"
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    jwtToken: {
        type: String,
    },
    createdBy: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    updatedBy: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    }
}, {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: {
        virtuals: true,
        transform: function (doc, ret) {
        },
    },
});
exports.default = mongoose.model("User", userSchema);
