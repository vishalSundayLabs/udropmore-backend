import * as mongoose from "mongoose"

const currentObservastionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        refs: "User"
    },
    doctorId: {
        type: mongoose.SchemaTypes.ObjectId,
        refs: "User"
    },
    currentObservastion: [{
        date: Date,
        week: { type: Number, default: null },
        weekAndDays:{ type: String, default: null },
        riskFactor: [Object],
        complaints: [Object],
        generalExamination: {
            testName: { type: String, default: "General Examination" },
            bp: {
                name: { type: String, default: "B.P" },
                sbp: {
                    name: { type: String, default: "SBP" },
                    value: { type: Number, default: null },
                    unit:{ type: String, default: "mmhg" },
                    inputType: { type: String, default: "Textbox" }
                },
                dbp: {
                    name: { type: String, default: "DBP" },
                    value: { type: Number, default: null },
                    unit:{ type: String, default: "mmhg" },
                    inputType: { type: String, default: "Textbox" }
                }
            },
            pulse: {
                name: { type: String, default: "Pulse" },
                value: { type: Number, default: null },
                unit:{ type: String, default: "bpm" },
                inputType: { type: String, default: "Textbox" }
            },
            temp: {
                name: { type: String, default: "Temp" },
                value: { type: Number, default: null },
                unit:{ type: String, default: "°C" },
                inputType: { type: String, default: "Textbox" }
            },
            oedema: {
                name: { type: String, default: "Oedema" },
                value: { type: String, default: null },
                options: { type: String, default: "Nil/Moderate/+/++" },
                inputType: { type: String, default: "Select" }
            },
            pallor: {
                name: { type: String, default: "Pallor" },
                value: { type: String, default: null },
                options: { type: String, default: "Normal/Nil" },
                inputType: { type: String, default: "Select" }
            },
            icterus: {
                name: { type: String, default: "Icterus" },
                value: { type: String, default: null },
                options: { type: String, default: "Normal/Nil" },
                inputType: { type: String, default: "Select" }
            },
            thy: {
                name: { type: String, default: "Thy" },
                value: { type: String, default: null },
                options: { type: String, default: "Normal/Nil" },
                inputType: { type: String, default: "Select" }
            },
            hair: {
                name: { type: String, default: "Hair" },
                value: { type: String, default: null },
                options: { type: String, default: "Normal/Nil" },
                inputType: { type: String, default: "Select" }
            },
            br: {
                name: { type: String, default: "Br" },
                value: { type: String, default: null },
                options: { type: String, default: "Normal/Nil" },
                inputType: { type: String, default: "Select" }
            },
            respiratorySystem: {
                name: { type: String, default: "Respiratory System" },
                value: { type: String, default: null },
                options: { type: String, default: null },
                inputType: { type: String, default: "Select" }
            },
            cardiovascularSystem: {
                name: { type: String, default: "Cardiovascular System" },
                value: { type: String, default: null },
                options: { type: String, default: null },
                inputType: { type: String, default: "Select" }
            },
            centralNervousSystem: {
                name: { type: String, default: "Central Nervous System" },
                value: { type: String, default: null },
                options: { type: String, default: null },
                inputType: { type: String, default: "Select" }
            }
        },
        perAbdomen: { 
            testName: { type: String, default: "Per Abdomen" },
            liver: {
                name: { type: String, default: "Liver" },
                value: { type: String, default: null },
                options: { type: String, default: "Normal/Nil" },
                inputType: { type: String, default: "Select" }
            },
            spleen: {
                name: { type: String, default: "Spleen" },
                value: { type: String, default: null },
                options: { type: String, default: "Normal/Nil" },
                inputType: { type: String, default: "Select" }
            },
            lump: {
                name: { type: String, default: "Lump" },
                value: { type: String, default: null },
                options: { type: String, default: "Normal/Nil" },
                inputType: { type: String, default: "Select" }
            },
            scar: {
                name: { type: String, default: "Scar" },
                value: { type: String, default: null },
                options: { type: String, default: "Normal/Nil" },
                inputType: { type: String, default: "Select" }
            },
            hernia: {
                name: { type: String, default: "Hernia" },
                value: { type: String, default: null },
                options: { type: String, default: "Normal/Nil" },
                inputType: { type: String, default: "Select" }
            },
            uterus: {
                name: { type: String, default: "Uterus" },
                value: { type: String, default: null },
                options: { type: String, default: "Normal/Nil" },
                inputType: { type: String, default: "Select" }
            }
        },
        perVagina: {
            testName: { type: String, default: "Per Vagina" },
            avafOrrvrf: {
                name: { type: String, default: "AVAF/RVRF" },
                value: { type: String, default: null },
                options: { type: String, default: "Retro Flex/Retro Verted" },
                inputType: { type: String, default: "Select" }
            },
            os: {
                name: { type: String, default: "OS" },
                value: { type: String, default: null },
                options: { type: String, default: "Long/Short/Conical/Patulous/Closed/Open" },
                inputType: { type: String, default: "Select" }
            },
            vagina: {
                name: { type: String, default: "Vagina" },
                value: { type: String, default: null },
                options: { type: String, default: "Heavy/Infection/White discharge" },
                inputType: { type: String, default: "Select" }
            },
            adenaxea: {
                name: { type: String, default: "Adenaxea" },
                value: { type: String, default: null },
                options: { type: String, default: "Th/Tender/masses" },
                inputType: { type: String, default: "Select" }
            },
            fx: {
                name: { type: String, default: "Fx" },
                value: { type: String, default: null },
                options: { type: String, default: "Th/Tender/Masses" },
                inputType: { type: String, default: "Select" }
            },
            externalBallottement: {
                name: { type: String, default: "External Ballottement" },
                value: { type: String, default: null },
                options: { type: String, default: "Well relaxed/Irritable" },
                inputType: { type: String, default: "Select" }
            }
        },
        fetus: {
            testName: { type: String, default: "Fetus" },
            fetus: {
                name: { type: String, default: "Fetus" },
                value: { type: String, default: null },
                options: { type: String, default: "Single/Twin/Triplet" },
                inputType: { type: String, default: "Select" }
            },
            fetalHeartRate: {
                name: { type: String, default: "Fetal heart rate" },
                value: { type: Number, default: null },
                unit:{ type: String, default: "Beat per mins" },
                inputType: { type: String, default: "Textbox" }
            },
            presentationPart: {
                name: { type: String, default: "Presentation Part" },
                value: { type: Number, default: null },
                options: { type: String, default: "Caphalic/Breech/Transverse Lie" },
                inputType: { type: String, default: "Select" }
            },
            pos: {
                name: { type: String, default: "P.O.S" },
                value: { type: Number, default: null },
                options: { type: String, default: "ROA/ROT/ROP/LOA/LOT/LOP" },
                inputType: { type: String, default: "Select" }
            },
            injection: {
                name: { type: String, default: "Injection" },
                value: { type: Number, default: null },
                options: { type: String, default: "TT First Dose/Boostrix/Dexa 4 dose/Anti D if Rh-ve/RhoGAM" },
                inputType: { type: String, default: "Select" }
            },
            remark: {
                name: { type: String, default: "Remark" },
                value: { type: Number, default: null },
                options: { type: String, default: null },
                inputType: { type: String, default: "Textbox" }
            }
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

export default mongoose.model("currentObservastion", currentObservastionSchema)