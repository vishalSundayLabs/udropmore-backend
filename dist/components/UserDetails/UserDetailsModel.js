"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const userDetailsSchema = new mongoose.Schema({
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        refs: "User",
        unique: true
    },
    dateOfBirth: {
        type: Date
    },
    address: {
        line1: String,
        line2: String,
        city: String,
        state: String,
        pincode: Number
    },
    height: {
        unit: {
            type: String,
            enum: ["cm", "ft", "m", "inches"]
        },
        value: {
            type: Number
        }
    },
    weight: {
        unit: {
            type: String,
            enum: ["kg", "pound"]
        },
        value: {
            type: Number
        }
    },
    lastMenstrualDate: {
        type: Date
    },
    dueDate: {
        type: Date
    },
    maritalStatus: {
        type: String,
        enum: ["MARRIED", "NOT_MARRIED"]
    },
    occupation: {
        type: String
    },
    education: {
        type: String
    },
    pregnancyWeek: {
        type: Number
    },
    husbandDetails: {
        type: Object,
        name: {
            type: String
        },
        age: {
            type: Number
        },
        occupation: {
            type: String
        }
    },
    refBy: {
        type: Object,
        name: {
            type: String
        },
        address: {
            type: String
        }
    },
    previousVisit: {
        type: [Date]
    },
    language: {
        type: String,
        enum: ["ENGLISH", "HINDI"]
    },
    emergency: {
        name: String,
        phoneNumber: String
    },
    createdBy: {
        type: mongoose.SchemaTypes.ObjectId
    },
    updatedBy: {
        type: mongoose.SchemaTypes.ObjectId
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });
exports.default = mongoose.model('UserDetails', userDetailsSchema);
