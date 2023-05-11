"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const standardSupplementsSchema = new mongoose.Schema({
    doctorId: {
        type: mongoose.SchemaTypes.ObjectId,
        refs: "User"
    },
    standardSupplements: [],
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
exports.default = mongoose.model("template", standardSupplementsSchema);
