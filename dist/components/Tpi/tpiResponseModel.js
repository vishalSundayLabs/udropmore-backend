"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const tpiResponseSchema = new mongoose.Schema({
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
    },
    apiType: {
        type: String,
        enum: ['sendSmsOtp', 'sendWaOtp']
    },
    requestBody: {
        type: {},
        required: true
    },
    responseBody: {
        type: {},
        required: true
    }
}, {
    timestamps: true
});
const TpiModel = mongoose.model('TpiResponse', tpiResponseSchema);
exports.default = TpiModel;
