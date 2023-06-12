import * as mongoose from "mongoose"

const LeapScoreQuestionnaireSchema = new mongoose.Schema({
    userId: {
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
            score: { type: Number, default: 0 },
            status: {
                type: String,
                enum: ["PENDING", "EXPIRED", "COMPLETED", null],
                default: "PENDING"
            }
        },
        anatomy: {
            answers: { type: Object, default: null },
            score: { type: Number, default: 0 },
            status: {
                type: String,
                enum: ["PENDING", "EXPIRED", "COMPLETED", null],
                default: "PENDING"
            }
        },
        lifestyle: {
            answers: { type: Object, default: null },
            score: { type: Number, default: 0 },
            status: {
                type: String,
                enum: ["PENDING", "EXPIRED", "COMPLETED", null],
                default: "PENDING"
            }
        },
        physical: {
            answers: { type: Object, default: null },
            score: { type: Number, default: 0 },
            status: {
                type: String,
                enum: ["PENDING", "EXPIRED", "COMPLETED", null],
                default: "PENDING"
            }
        }

    },
    status: {
        type: String,
        enum: ["PENDING", "EXPIRED", "COMPLETED", null],
        default: "PENDING"
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