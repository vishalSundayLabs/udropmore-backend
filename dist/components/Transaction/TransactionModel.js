"use strict";
/**
 * ProductModel.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const transactionSchema = new mongoose.Schema({
    userId: {
        type: String,
        require: ["Product name missing", true]
    },
    amount: {
        type: Number,
        default: 0
    },
    type: {
        type: String,
        enum: ["CREDIT", "DEBIT"]
    },
    category: {
        type: String,
        enum: ["WALLET_RECHARGE", "JOINING_FEES", "SECURITY_DEPOSIT", "SECURITY_DEPOSIT_REFUND", "PRODUCT_PURCHASE", "PRIZE_MONEY"]
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
exports.default = mongoose.model("transaction", transactionSchema);
