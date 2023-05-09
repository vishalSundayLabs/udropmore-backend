import * as mongoose from "mongoose";

const standardSupplementsSchema = new mongoose.Schema({
    doctorId: {
        type: mongoose.SchemaTypes.ObjectId,
        refs: "User"
    },
    standardSupplements: [{
        category: {
            categoryName: { type: String, default: null },
            drugs: [{
                drugName: { type: String, default: null },
                freq: { type: String, default: null },
                week: { type: Number, default: null },
                startDate: { type: Date, default: null },
                endDate: { type: Date, default: null }
            }]
        }
    }],
    isDeleted: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.SchemaTypes.ObjectId,
        refs: "User"
    },
    updatedBy: {
        type: mongoose.SchemaTypes.ObjectId,
        refs: "User"
    }
}, { timestamps: true })

export default mongoose.model("template", standardSupplementsSchema)