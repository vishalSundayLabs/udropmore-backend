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
        type: String
    },
    middleName: {
        type: String
    },
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
        enum: ['DOCTOR', 'MOTHER', 'HOSPITAL_ADMIN', 'NURSES', 'ONI_ADMIN'],
        default: "MOTHER"
    },
    platform: {
        type: String,
        enum: ['DOCTOR', 'MOTHER', 'ADMIN'],
    },
    registrationDetails: {
        type: Object,
        medicalCouncil: String,
        number: String,
        year: String
    },
    degree: {
        type: [{
                name: String,
                year: String,
                institute: String
            }]
    },
    speciality: {
        type: [String],
    },
    awards: [{
            name: String,
            year: String
        }],
    experience: {
        type: Number
    },
    consultationFeeDetails: {
        type: {
            inPerson: Number,
            videoCall: Number,
            teleCall: Number
        }
    },
    clinic: {
        type: [mongoose.SchemaTypes.ObjectId],
        refs: 'clinics'
    },
    memberships: {
        type: [{
                name: String,
                year: String
            }]
    },
    gallery: {
        type: [String]
    },
    services: {
        type: [String]
    },
    availability: {
        type: [{
                type: Object,
                clinic: mongoose.SchemaTypes.ObjectId,
                slots: [{
                        day: String,
                        timeSlots: [String],
                        type: {
                            type: String,
                            enum: ["INPERSON", "VIDEOCALL", "TELECALL"]
                        }
                    }]
            }],
    },
    status: {
        type: String,
        enum: ['ACTIVE', 'INACTIVE']
    },
    isActive: { type: Boolean, default: true },
    isDeleted: {
        type: Boolean,
        default: false
    },
    jwtToken: {
        type: String,
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
exports.default = mongoose.model("User", userSchema);
