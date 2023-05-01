"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const consultationSchema = new mongoose.Schema({
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
            riskFactor: [Object],
            complaints: [Object],
            generalExamination: {
                bp: {
                    sbp: {
                        value: { type: Number, default: null },
                        unit: { type: String, enum: ["mmhg", null], default: null }
                    },
                    dbp: {
                        value: { type: Number, default: null },
                        unit: { type: String, enum: ["mmhg", null], default: null }
                    }
                },
                pulse: {
                    value: { type: Number, default: null },
                    unit: { type: String, enum: ["bpm", null], default: null }
                },
                temp: {
                    value: { type: Number, default: null },
                    unit: { type: String, enum: ["c", null], default: null }
                },
                oedema: {
                    type: String,
                    default: null
                },
                pallor: {
                    type: String,
                    default: null
                },
                icterus: {
                    type: String,
                    default: null
                },
                thy: {
                    type: String,
                    default: null
                },
                hair: {
                    type: String,
                    default: null
                },
                br: {
                    type: String,
                    default: null
                },
                respiratorySystem: {
                    type: String,
                    default: null
                },
                cardiovascularSystem: {
                    type: String,
                    default: null
                },
                centralNervousSystem: {
                    type: String,
                    default: null
                }
            },
            perAbdomen: {
                liver: {
                    type: String,
                    default: null
                },
                spleen: {
                    type: String,
                    default: null
                },
                lump: {
                    type: String,
                    default: null
                },
                scar: {
                    type: String,
                    default: null
                },
                hermia: {
                    type: String,
                    default: null
                },
                uterus: {
                    type: String,
                    default: null
                }
            },
            perVagina: {
                avafOrrvrf: {
                    type: String,
                    default: null
                },
                os: {
                    type: String,
                    default: null
                },
                vagina: {
                    type: String,
                    default: null
                },
                adenaxea: {
                    type: String,
                    default: null
                },
                fx: {
                    type: String,
                    default: null
                },
                externalBallottement: {
                    type: String,
                    enum: ["Well Relaxed", "Irritable", null],
                    default: null
                }
            },
            fetus: {
                fetus: {
                    type: String,
                    default: null
                },
                fetalHeartRate: {
                    type: String,
                    default: null
                },
                presentationPart: {
                    type: String,
                    default: null
                },
                pos: {
                    type: String,
                    default: null
                },
                injection: {
                    type: String,
                    default: null
                },
                remark: {
                    type: String,
                    default: null
                }
            }
        }],
    antenatalTest: {
        pregnancyConfirmation: {
            upload: {
                type: String,
                default: null
            },
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
            upload: {
                type: String,
                default: null
            },
            followUp: {
                type: Boolean,
                default: false
            },
            motherBloodGroup: {
                type: String,
                enum: ["A +ve", "A -ve", "B +ve", "B -ve", "AB +ve", "AB -ve", "O +ve", "O -ve"]
            },
            fatherBloodGroup: {
                type: String,
                enum: ["A +ve", "A -ve", "B +ve", "B -ve", "AB +ve", "AB -ve", "O +ve", "O -ve"]
            },
            result: {
                type: String,
                enum: ["Rh -ve", null],
                default: null
            }
        },
        currentWeek: {
            week: Number,
        }
    },
    treatment: {
        obeservation: [{
                date: Date,
                examinationFinding: {
                    type: String,
                    default: null
                }
            }],
        prescription: {
            standardSupplements: [{
                    name: { type: String, default: null },
                    /*
                      Example name:HM1 (doctor firstname + lastname)
                    */
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
                }],
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
    },
    nextAntenatalTest: [{
            week: Number,
            standardtest: [{
                    name: {
                        type: String,
                        default: null
                    }
                }],
            additionalTest: [{
                    name: {
                        type: String,
                        default: null
                    }
                }]
        }],
    isDeleted: {
        type: mongoose.SchemaTypes.ObjectId,
        refs: "user"
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
exports.default = mongoose.model("consultation", consultationSchema);
