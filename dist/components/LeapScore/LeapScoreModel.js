"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const LeapScoreQuestionnaireSchema = new mongoose.Schema({
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    pregnancyWeek: {
        type: Number,
        default: null
    },
    details: {
        emotion: {
            answers: { type: Object, default: null },
            score: { type: Number, default: 0 },
            status: {
                type: String,
                enum: ["PENDING", "EXPIRED", "COMPLETED", null],
                default: "PENDING"
            }
        },
        anatomy: {
            answers: { type: Object, default: null },
            status: {
                type: String,
                enum: ["PENDING", "EXPIRED", "COMPLETED", null],
                default: "PENDING"
            },
            nextLeap: { type: Number, default: null }
        },
        lifestyle: {
            answers: { type: Object, default: null },
            score: { type: Number, default: 0 },
            status: {
                type: String,
                enum: ["PENDING", "EXPIRED", "COMPLETED", null],
                default: "PENDING"
            },
            nextLeap: { type: Number, default: null }
        },
        physical: {
            answers: { type: Object, default: null },
            score: { type: Number, default: 0 },
            status: {
                type: String,
                enum: ["PENDING", "EXPIRED", "COMPLETED", null],
                default: "PENDING"
            },
            nextLeap: { type: Number, default: null }
        }
    },
    status: {
        type: String,
        enum: ["PENDING", "EXPIRED", "COMPLETED", null],
        default: "PENDING"
    },
    createdBy: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    },
    updatedBy: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });
exports.default = mongoose.model("leapScoreQuestionnaire", LeapScoreQuestionnaireSchema);
