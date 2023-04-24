"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const weightGainChartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        refs: "User"
    },
    weight: {
        unit: {
            type: String,
            enum: ["kg", "pound"],
            default: "kg"
        },
        value: Number
    },
    babyWeight: {
        unit: {
            type: String,
            enum: ["kg", "pound"],
            default: "kg"
        },
        value: Number
    },
    week: Number,
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
exports.default = mongoose.model("weightgainchart", weightGainChartSchema);
