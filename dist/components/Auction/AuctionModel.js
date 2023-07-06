"use strict";
/**
 * AuctionModel.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const AuctionSchema = new mongoose.Schema({
    productId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "product"
    },
    types: {
        type: String,
        enum: ["DASH_DROP", "COOL_DROP", "MEGA_DROP"],
        default: "DASH_DROP"
    },
    startTime: Date,
    endTime: Date,
    entryFees: Number,
    dropStartPrice: Number,
    winners: [{
            userId: {
                type: mongoose.SchemaTypes.ObjectId,
                ref: "User"
            },
            bidAmount: Number,
            rank: Number
        }],
    lowestDropPrice: Number,
    status: {
        type: String,
        enum: ["SCHEDULED", "ACTIVE", "COMPLETED"],
        default: "SCHEDULED"
    },
    participants: [{
            userId: {
                type: mongoose.SchemaTypes.ObjectId,
                ref: "User"
            },
            time: Date
        }],
    bidders: [{
            userId: {
                type: mongoose.SchemaTypes.ObjectId,
                ref: "User"
            },
            biddingAmount: Number,
            rank: Number,
            time: Date
        }],
    isActive: {
        type: Boolean,
        default: true
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
}, {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: {
        virtuals: true,
        transform: function (doc, ret) {
        },
    },
});
exports.default = mongoose.model("auction", AuctionSchema);
