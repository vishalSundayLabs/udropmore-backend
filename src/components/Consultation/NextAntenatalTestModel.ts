import * as mongoose from "mongoose"

const nextAntenatalTestSchema = new mongoose.Schema({
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        refs: "User"
    },
    doctorId: {
        type: mongoose.SchemaTypes.ObjectId,
        refs: "User"
    },
    nextAntenatalTest: [{
        week: Number,
        standardtest: [{
            name:  { type: String, default: null }
        }],
        additionalTest: [{
            name:  { type: String, default: null }
        }]
    }],
    isDeleted: {
        type: Boolean,
        default:false
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

export default mongoose.model("nextAntenatalTest", nextAntenatalTestSchema)