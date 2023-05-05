"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const LeapContentSchema = new mongoose.Schema({
    category: { type: String, default: "Leap" },
    data: {
        metaData: {
            sequence: { type: Number, default: null }
        },
        featureMedia: {
            image: { type: String, default: null },
            video: { type: String, default: null },
            images: {
                hero: { type: String, default: null }
            }
        },
        sections: [],
        title: { type: String, default: null }
    },
    subtype: { type: String, default: null },
    tags: [String],
    trimesters: [Number],
    type: { type: String, default: null },
    weeks: [Number],
    createdBy: {
        type: mongoose.SchemaTypes.ObjectId,
        refs: "User"
    },
    updatedBy: {
        type: mongoose.SchemaTypes.ObjectId,
        refs: "User"
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });
exports.default = mongoose.model("LeapContent", LeapContentSchema);
