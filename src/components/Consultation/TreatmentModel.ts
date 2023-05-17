import * as mongoose from "mongoose"

const treatmentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        refs: "User"
    },
    doctorId: {
        type: mongoose.SchemaTypes.ObjectId,
        refs: "User"
    },
    treatment: [{
        date: { type: Date, default: null },
        week: { type: Number, default: null },
        weekAndDays: { type: String, default: null },
        obeservation: {
            examinationFinding: {
                name: { type: String, default: "Examination Finding" },
                value: { type: String, default: null }
            }
        },
        prescription: { type: Object, default: null },
        followUp: {
            followUpDate: {
                name: { type: String, default: "Follow Up Date" },
                value: { type: Date, default: null }
            },
            remarksForMother: {
                name: { type: String, default: "Remarks for Mother" },
                value: { type: Date, default: null }
            },
            testName: []
        }
    }],
    isDraft: { type: Boolean, default: false },
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

export default mongoose.model("treatment", treatmentSchema)