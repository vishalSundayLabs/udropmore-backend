/**
 * OrderModel.ts
 */

import * as mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "User"
        },
        productId: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "product"
        },
        auctionId: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "auction"
        },
        paymentId: {
            type: mongoose.SchemaTypes.ObjectId,
        },
        status: {
            type: String,
            enum: ["PENDING", "SUCCESS", "FAILED", "RETURNED", "SHIPPING"],
            default: "ACTIVE"
        },
        amount: {
            type: Number,
            default: 0
        },
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

export default mongoose.model("order", OrderSchema);
