"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const AppointmentSchema = new mongoose.Schema({
    appointmentDateAndTime: {
        type: String
    },
    appointmentType: {
        type: String,
        enum: ["INPERSON", "VIDEOCALL", "TELECALL"]
    },
    motherId: {
        type: mongoose.SchemaTypes.ObjectId,
        refs: 'User'
    },
    doctorId: {
        type: mongoose.SchemaTypes.ObjectId,
        refs: "User"
    },
    clinicId: {
        type: mongoose.SchemaTypes.ObjectId,
        refs: "clinics"
    },
    status: {
        type: String,
        enum: ["CANCELLED", "INPROGRESS", "CONFIRMED", "NOSHOW"],
        default: 'CONFIRMED'
    },
    createdBy: {
        type: mongoose.SchemaTypes.ObjectId,
        refs: 'User'
    },
    updatedBy: {
        type: mongoose.SchemaTypes.ObjectId
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });
exports.default = mongoose.model('appointments', AppointmentSchema);
