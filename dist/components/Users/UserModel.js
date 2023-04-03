"use strict";
/**
 * UserModel.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Missing 'firstName' field."],
        dafault: "",
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        match: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    },
    emailVerified: { type: Boolean, default: false },
    phoneNumber: {
        type: String,
        unique: true,
        require: [true, "Missing 'phoneNumber' field."],
    },
    userType: {
        type: String,
        enum: ['DOCTOR', 'MOTHER', 'HOSPITAL_ADMIN', 'NURSES', 'ONI_ADMIN']
    },
    isActive: { type: Boolean, default: true },
    waId: {
        type: String,
        require: true
    },
    waToken: {
        type: String,
        require: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.SchemaTypes.ObjectId
    },
    updatedBy: {
        type: mongoose.SchemaTypes.ObjectId
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
exports.default = mongoose.model("user", userSchema);
