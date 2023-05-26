"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClinicModel = void 0;
const mongoose = require("mongoose");
const clinicSchema = new mongoose.Schema({
    clinicName: {
        type: String,
        required: ["clinic name is required", true]
    },
    latitude: {
        type: String,
        required: ["latitude is required", true]
    },
    longitude: {
        type: String,
        required: ["longitude is required", true]
    },
    address: {
        type: String
    },
    googleMapLink: {
        type: String,
        required: ["google map link is required", true]
    },
    status: {
        type: String,
        enum: ['ACTIVE', 'INACTIVE'],
        default: 'ACTIVE'
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    updatedBy: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    }
}, { timestamps: true });
exports.ClinicModel = mongoose.model('clinics', clinicSchema);
