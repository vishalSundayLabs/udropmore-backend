import * as mongoose from "mongoose"

const LeapScoreSchema = new mongoose.Schema({
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        refs: "User"
    },
    type: {
        type: String,
        default: "LEAP_SCORE"
    },
    details: {
        answers: { type: Object, default: null },
        questionnaireDetails: { type: Object, default: null },
        score: { type: Object, default: null },
        week: { type: Number, default: null }
    },
    status: {
        type: String,
        enum: ["ACTIVE", "COMPLETED"]
    }
}, { timestamps: true })

export default mongoose.model("leapScore", LeapScoreSchema)