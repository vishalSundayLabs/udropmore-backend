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
        obeservation: {
            examinationFinding: { type: String, default: null }
        },
        prescription: {
            standardSupplements: {
                // templateId: "sdijflk",
                calcium: [{
                    name: { type: String, default: null },
                    freq: String,
                    week: Number,
                    startDate: Date,
                    endDate: Date
                }],
                iron: [{
                    name: { type: String, default: null },
                    freq: String,
                    week: Number,
                    startDate: Date,
                    endDate: Date
                }],
                folicAcid: [{
                    name: { type: String, default: null },
                    freq: String,
                    week: Number,
                    startDate: Date,
                    endDate: Date
                }]
            },
            symptomsSupplements: {
                vomitting: [{
                    name: { type: String, default: null },
                    freq: String,
                    week: Number,
                    startDate: Date,
                    endDate: Date
                }],
                iron: [{
                    name: { type: String, default: null },
                    freq: String,
                    week: Number,
                    startDate: Date,
                    endDate: Date
                }],
                acidity: [{
                    name: { type: String, default: null },
                    freq: String,
                    week: Number,
                    startDate: Date,
                    endDate: Date
                }]
            }
        }
    }],
    followUp: [{
        followUpDate: { type: Date, default: null },
        remarksForMother: { type: String, default: null },
        testName: [String],
        week: { type: Number, default: null }
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