"use strict";
/**
 * ProductModel.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        require: ["Product name missing", true]
    },
    description: String,
    marketPrice: {
        type: String,
        require: ["Market Price missing", true]
    },
    features: [{
            iconImage: String,
            title: String
        }],
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
}, {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: {
        virtuals: true,
        transform: function (doc, ret) {
        },
    },
});
exports.default = mongoose.model("product", ProductSchema);
