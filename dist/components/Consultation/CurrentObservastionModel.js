"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
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
            riskFactor: [Object],
            complaints: [Object],
            generalExamination: {
                bp: {
                    sbp: { type: Number, default: null },
                    dbp: { type: Number, default: null }
                },
                pulse: { type: Number, default: null },
                temp: { type: Number, default: null },
                oedema: { type: String, default: null },
                pallor: { type: String, default: null },
                icterus: { type: String, default: null },
                thy: { type: String, default: null },
                hair: { type: String, default: null },
                br: { type: String, default: null },
                respiratorySystem: { type: String, default: null },
                cardiovascularSystem: { type: String, default: null },
                centralNervousSystem: { type: String, default: null }
            },
            perAbdomen: {
                liver: { type: String, default: null },
                spleen: { type: String, default: null },
                lump: { type: String, default: null },
                scar: { type: String, default: null },
                hermia: { type: String, default: null },
                uterus: { type: String, default: null }
            },
            perVagina: {
                avafOrrvrf: { type: String, default: null },
                os: { type: String, default: null },
                vagina: { type: String, default: null },
                adenaxea: { type: String, default: null },
                fx: { type: String, default: null },
                externalBallottement: {
                    type: String,
                    enum: ["Well Relaxed", "Irritable", null],
                    default: null
                }
            },
            fetus: {
                fetus: { type: String, default: null },
                fetalHeartRate: { type: String, default: null },
                presentationPart: { type: String, default: null },
                pos: { type: String, default: null },
                injection: { type: String, default: null },
                remark: { type: String, default: null }
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
}, { timestamps: true });
exports.default = mongoose.model("currentObservastion", currentObservastionSchema);
