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
            week: Number,
            standardtest: [{
                    name: { type: String, default: null }
                }],
            additionalTest: [{
                    name: { type: String, default: null }
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
        refs: "User"
    },
    updatedBy: {
        type: mongoose.SchemaTypes.ObjectId,
        refs: "User"
    }
}, { timestamps: true });
exports.default = mongoose.model("nextAntenatalTest", nextAntenatalTestSchema);
