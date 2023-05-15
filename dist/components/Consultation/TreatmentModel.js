"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const treatmentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        refs: "User"
    },
    doctorId: {
        type: mongoose.SchemaTypes.ObjectId,
        refs: "User"
    },
    treatment: [{
            date: { type: Date, default: null },
            week: { type: Number, default: null },
            weekAndDays: { type: String, default: null },
            obeservation: {
                examinationFinding: { type: String, default: null },
            },
            prescription: {},
            followUp: {
                followUpDate: { type: Date, default: null },
                remarksForMother: { type: String, default: null },
                testName: []
            }
        }],
    isDraft: { type: Boolean, default: false },
    isDeleted: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.SchemaTypes.ObjectId,
        refs: "User"
    },
    updatedBy: {
        type: mongoose.SchemaTypes.ObjectId,
        refs: "User"
    }
}, { timestamps: true });
exports.default = mongoose.model("treatment", treatmentSchema);
