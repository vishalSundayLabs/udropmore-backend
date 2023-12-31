"use strict";
/**
 * UserModel.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Missing 'firstName' field."],
        dafault: "",
    },
    lastName: {
        type: String,
        required: [true, "Missing 'lastName' field."],
        dafault: "",
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Missing 'email' field."],
        trim: true,
        lowercase: true,
        match: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    },
    emailVerified: { type: Boolean, default: false },
    password: {
        type: String,
        required: true,
        minlength: 8,
        set: function (value) {
            if (value.length < 8) {
                return undefined;
            }
            // check if the password contains a number
            let numberTest = /[0-9]/;
            if (!numberTest.test(value)) {
                return undefined;
            }
            return bcrypt.hashSync(value, bcrypt.genSaltSync(9));
        },
        validate: function () {
            return !!this.password;
        },
    },
    phoneNumber: { type: String },
    isActive: { type: Boolean, default: true },
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
