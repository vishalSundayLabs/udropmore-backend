/**
 * ProductModel.ts
 */

import * as mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: ["Product name missing", true]
        },
        description: String,
        marketPrice: {
            type: String,
            require: ["Market Price missing", true]
        },
        features: {
            feature1: String,
            feature2: String,
            feature3: String,
            feature4: String
        },
        homePageImageUrl: String,
        productPageImageUrl: String,
        status: {
            type: String,
            enum: ["ACTIVE", "INACTIVE"],
            default: "ACTIVE"
        },
        quantity: Number,
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

export default mongoose.model("product", ProductSchema);