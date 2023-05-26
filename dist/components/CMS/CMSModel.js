"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const leapContentSchema = new mongoose.Schema({
    category: {
        type: String,
        enum: ["LEAP", "WEEK", null],
        default: null
    },
    data: {
        featureMedia: {
            image: { type: String, default: null },
            video: { type: String, default: null },
            images: {
                hero: { type: String, default: null },
                thumbnail: { type: String, default: null }
            }
        },
        sections: [],
        title: { type: String, default: null }
    },
    metadata: {
        sequence: { type: String, default: null }
    },
    subtype: {
        type: String,
        enum: ["LIFESTYLE", "ANATOMY", "EMOTION", "PHYSICAL_FITNESS", "SUMMARY", "PHYSICAL", "IMMUNE", "COGNITIVE", null],
        default: null
    },
    tags: [String],
    trimesters: [Number],
    type: {
        type: String,
        enum: ["MOTHER", "BABY", "LIFESTYLE", "ANATOMY", "EMOTION", "PHYSICAL_FITNESS", null],
        default: null
    },
    weeks: [Number],
    createdBy: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
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
exports.default = mongoose.model("cmsdata", leapContentSchema);
