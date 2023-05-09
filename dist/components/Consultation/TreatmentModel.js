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
            date: Date,
            week: { type: String, default: null },
            obeservation: {
                examinationFinding: { type: String, default: null },
                remarksForMother: { type: String, default: null }
            },
            prescription: {
                standardSupplements: {
                    templateId: {
                        type: mongoose.SchemaTypes.ObjectId,
                        refs: "template",
                        default: null
                    },
                    medicines: [{
                            category: {
                                categoryName: { type: String, default: null },
                                drugs: [{
                                        drugName: { type: String, default: null },
                                        freq: { type: String, default: null },
                                        duration: {
                                            value: { type: Number, default: null },
                                            unit: {
                                                type: String,
                                                enum: ["Day", "Week", "Month", null],
                                                default: null
                                            }
                                        },
                                        startDate: { type: Date, default: null },
                                        endDate: { type: Date, default: null }
                                    }]
                            }
                        }]
                },
                symptomsSupplements: []
            },
            followUp: {
                followUpDate: { type: Date, default: null },
                remarksForMother: { type: String, default: null },
                testName: [String],
                week: { type: Number, default: null }
            }
        }],
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
