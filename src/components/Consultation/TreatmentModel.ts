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
        date: Date,
        week: { type: String, default: null },
        obeservation: {
            examinationFinding: { type: String, default: null },
            remarksForMother: { type: String, default: null }
        },
        prescription: {
            templateId: {
                type: mongoose.SchemaTypes.ObjectId,
                refs: "template"
            },
            standardSupplements: [{
                type: { type: String, default: null },
                subType: { type: String, default: null },
                freq: { type: String, default: null },
                week: { type: Number, default: null },
                startDate: { type: Date, default: null },
                endDate: { type: Date, default: null }
            }],
            symptomsSupplements: [{
                type: { type: String, default: null },
                subType: { type: String, default: null },
                freq: { type: String, default: null },
                week: { type: Number, default: null },
                startDate: { type: Date, default: null },
                endDate: { type: Date, default: null }
            }]
        },
        followUp: {
            followUpDate: { type: Date, default: null },
            remarksForMother: { type: String, default: null },
            testName: [String],
            week: { type: Number, default: null }
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

export default mongoose.model("treatment", treatmentSchema)