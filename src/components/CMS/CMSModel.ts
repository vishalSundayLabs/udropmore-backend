import * as mongoose from "mongoose"

const leapContentSchema = new mongoose.Schema({
    category: {
        type: String,
        enum: ["LEAP", "WEEK", null],
        default: null
    },
    data: {
        featureMedia: {
            image: { type: String, default: null },
            video: { type: String, default: null },
            images: {
                hero: { type: String, default: null }
            }
        },
        sections: [],
        title: { type: String, default: null }
    },
    metadata: {
        sequence: { type: String, default: null }
    },
    subtype: {
        type: String,
        enum: ["LIFESTYLE", "ANATOMY", "EMOTION", "PHYSICAL_FITNESS", "SUMMARY", "PHYSICAL", "IMMUNE", "COGNITIVE", null],
        default: null
    },
    tags: [String],
    trimesters: [Number],
    type: {
        type: String,
        enum: ["MOTHER", "BABY", null],
        default: null
    },
    weeks: [Number],
    createdBy: {
        type: mongoose.SchemaTypes.ObjectId,
        refs: "User"
    },
    updatedBy: {
        type: mongoose.SchemaTypes.ObjectId,
        refs: "User"
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

export default mongoose.model("cmsdata", leapContentSchema)