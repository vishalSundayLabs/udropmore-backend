import * as mongoose from "mongoose"

const LeapScoreQuestionnaireSchema = new mongoose.Schema({
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    doctorId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    clinicId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    pregnancyWeek: {
        type: Number,
        default: null
    },
    details: {
        emotion: {
            answers: { type: Object, default: null },
            score: 100,
            status: {
                type: String,
                enum: ["PENDING", "EXPIRED", "COMPLETED", null],
                default: null
            }
        },
        anatomy: {
            answers: {},
            score: 100,
            status: {
                type: String,
                enum: ["PENDING", "EXPIRED", "COMPLETED", null],
                default: null
            }
        },
        lifeStyle: {
            answers: {},
            score: 100,
            status: {
                type: String,
                enum: ["PENDING", "EXPIRED", "COMPLETED", null],
                default: null
            }
        },
        physicalFitness: {
            answers: {},
            score: 100,
            status: {
                type: String,
                enum: ["PENDING", "EXPIRED", "COMPLETED", null],
                default: null
            }
        }

    },
    status: {
        type: String,
        enum: ["PENDING", "EXPIRED", "COMPLETED", null],
        default: null
    },
    createdBy: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    },
    updatedBy: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

export default mongoose.model("leapScoreQuestionnaire", LeapScoreQuestionnaireSchema)