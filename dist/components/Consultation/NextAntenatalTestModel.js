"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const nextAntenatalTestSchema = new mongoose.Schema({
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        refs: "User"
    },
    doctorId: {
        type: mongoose.SchemaTypes.ObjectId,
        refs: "User"
    },
    nextAntenatalTest: [{
            week: { type: Number, default: null },
            standardTest: [{
                    name: { type: String, default: null },
                    value: { type: Boolean, default: false }
                }],
            additionalTest: [{
                    name: { type: String, default: null },
                    value: { type: Boolean, default: false }
                }]
        }],
    isDraft: {
        type: Boolean,
        default: false
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
exports.default = mongoose.model("nextAntenatalTest", nextAntenatalTestSchema);
