import * as mongoose from "mongoose";

const standardSupplementsSchema = new mongoose.Schema({
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        refs: "User"
    },
    doctorId: {
        type: mongoose.SchemaTypes.ObjectId,
        refs: "User"
    },
    standardSupplements: [{
        type: { type: String, default: null },
        subType: { type: String, default: null },
        freq: { type: String, default: null },
        week: { type: Number, default: null },
        startDate: { type: Date, default: null },
        endDate: { type: Date, default: null }
    }],
    createdBy: {
        type: mongoose.SchemaTypes.ObjectId,
        refs: "User"
    },
    updatedBy: {
        type: mongoose.SchemaTypes.ObjectId,
        refs: "User"
    }
}, { timestamps: true })

export default mongoose.model("standardsupplement", standardSupplementsSchema)