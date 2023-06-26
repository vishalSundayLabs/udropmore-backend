/**
 * AuctionModel.ts
 */

import * as mongoose from "mongoose";

const AuctionSchema = new mongoose.Schema(
    {
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
        minDropInterval: Number,
        maxDropInterval: Number,
        entryFees: Number,
        winners: [{
            userId: {
                type: mongoose.SchemaTypes.ObjectId,
                ref: "User"
            },
            bidAmount: Number,
            rank: Number
        }],
        dropStartPrice: Number,
        lowestDropPrice: Number,
        status: {
            type: String,
            enum: ["SCHEDULED", "ACTIVE", "COMPLETED"],
            default: "ACTIVE"
        },
        // participants: [{ type: mongoose.SchemaTypes.ObjectId, ref: "User" }],
        participants: [{
            userId: {
                type: mongoose.SchemaTypes.ObjectId,
                ref: "User"
            },
            time: Date
        }],
        feed: [{
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
        minDropPrice: Number,
        maxDropPrice: Number,
        priceDrop: [{
            timeStamp: Date,
            dropAmount: Number,
            newDropPrice: Number
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
    },
    {
        timestamps: true,
        toObject: { virtuals: true },
        toJSON: {
            virtuals: true,
            transform: function (doc, ret) {
            },
        },
    }
);

export default mongoose.model("auction", AuctionSchema);
