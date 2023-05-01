import * as mongoose from "mongoose"

const antentalTestSchema = new mongoose.Schema({
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        refs: "User"
    },
    doctorId: {
        type: mongoose.SchemaTypes.ObjectId,
        refs: "User"
    },
    antenatalTest: [{
        date: Date,
        week: { type: Number, default: null },
        pregnancyConfirmation: {
            upload: { type: String, default: null },
            followUp: {
                type: Boolean,
                default: false
            },
            betaHcgTest: {
                type: Boolean,
                default: false
            },
            urinePregnancyTest: {
                type: Boolean,
                default: false
            },
            missedPeriods: {
                type: Boolean,
                default: false
            },
            phisicalSymptoms: {
                type: String,
                enum: ["Abdominal Pain", "Urine Frequency", "Nausea", "Weakness", "Feverish", null],
                default: null
            }
        },
        bloodGroupAndRhTyping: {
            upload: { type: String, default: null },
            followUp: { type: Boolean, default: false },
            motherBloodGroup: {
                type: String,
                enum: ["A +ve", "A -ve", "B +ve", "B -ve", "AB +ve", "AB -ve", "O +ve", "O -ve", null],
                default: null
            },
            fatherBloodGroup: {
                type: String,
                enum: ["A +ve", "A -ve", "B +ve", "B -ve", "AB +ve", "AB -ve", "O +ve", "O -ve", null],
                default: null
            },
            result: {
                type: String,
                enum: ["Rh -ve", null],
                default: null
            }
        },
        // currentWeek: [{
        //     testName: { type: String, default: null },
        //     upload: { type: String, default: null },
        //     followUp: { type: Boolean, default: false }
        // }]
    }],
    isDeleted: {
        type:Boolean,
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

export default mongoose.model("antenatalTest", antentalTestSchema)