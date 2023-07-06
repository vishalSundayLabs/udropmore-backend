/**
 * ProductModel.ts
 */

import * as mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "User"
        },
        amount:{
            type:Number,
            default:0
        },
        type:{
            type:String,
            enum:["CREDIT","DEBIT"]
        },
        category:{
          type:String,
          enum:["WALLET_RECHARGE","JOINING_FEES","SECURITY_DEPOSIT","SECURITY_DEPOSIT_REFUND","PRODUCT_PURCHASE","PRIZE_MONEY","LOYALTY_LEVEL_COPPER_CREDIT","LOYALTY_LEVEL_BRONZE_CREDIT","LOYALTY_LEVEL_SILVER_CREDIT","LOYALTY_LEVEL_GOLD_CREDIT","LOYALTY_LEVEL_PLATINUM_CREDIT"]
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

export default mongoose.model("transaction", transactionSchema);
