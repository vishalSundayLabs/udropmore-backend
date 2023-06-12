import * as mongoose from 'mongoose';

const pastHistorySchema = new mongoose.Schema({
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        refs: "User",
        unique: true
    },
    doctorId: {
        type: mongoose.SchemaTypes.ObjectId,
        refs: "User"
    },
    pastHistory: {
        currentPregnancy: {
            pregnancy: {
                firstPregnancy: {
                    type: String,
                    enum: ["Yes", "No", null], default: null
                },
                termination: { type: Number, default: null },
                abortion: { type: Number, default: null },
                liveBirth: { type: Number, default: null },
                livingBirth: { type: Number, default: null },
                preTerm: { type: Number, default: null },
                term: { type: Number, default: null },
                gptal: { type: Number, default: null }
            },
            yearToConceive: {
                years: { type: Number, default: null },
                months: { type: Number, default: null }
            },
            pregnancyType: {
                type: {
                    type: String,
                    enum: ["Natural", "Assisted", null],
                    default: null
                },
                assisted: {
                    type: String,
                    enum: ["Self", "Donor", null],
                    default: null
                },
                donor: {
                    type: String,
                    enum: ["Male", "Female", "Embryo", null],
                    default: null
                }
            },
            riskFactor: [Object],
            complaints: [Object],
            currentMenstrualHistory: {
                durationOfCycleDays: {
                    type: Number,
                    default: null
                },
                durationOfCycleLength: {
                    type: Number,
                    default: null
                },
                natureOfCycle: {
                    type: String,
                    enum: ["Regular", "Irregular", null],
                    default: null
                },
                dysmenorrhea: {
                    type: String,
                    enum: ["Yes", "No", null], default: null
                },
                flow: {
                    type: String,
                    enum: ["Average", "Scanty", "Heavy", null],
                    default: null
                }
            },
            pastMenstrualHistory: {
                durationOfCycleDays: {
                    type: Number,
                    default: null
                },
                durationOfCycleLength: {
                    type: Number,
                    default: null
                },
                natureOfCycle: {
                    type: String,
                    enum: ["Regular", "Irregular", null],
                    default: null
                },
                dysmenorrhea: {
                    type: String,
                    enum: ["Yes", "No", null], default: null
                },
                flow: {
                    type: String,
                    enum: ["Average", "Scanty", "Heavy", null],
                    default: null
                }
            },
            currentMedications: { type: Object, default: null },
        },
        obstetricsHistory: {
            terminations: [{
                doctorName: { type: String, default: null },
                placeOfTermination: { type: String, default: null },
                dateOfTermination: { type: Date, default: null },
                weekOfTermination: { type: Number, default: null },
                typeOfTermination: {
                    mtp: {
                        type: String,
                        enum: ["Pills", "Surgical", "General", "Curating", null],
                        default: null
                    },
                    ectopicPregnancy: {
                        type: String,
                        enum: ["Left Side", "Right Side", "Pills", "Laproscopy Surgery", "Medical Management", "Laprotomy", null],
                        default: null
                    },
                    mtpForAbnormalities: {
                        type: String,
                        enum: ["Medical", "Surgical", null],
                        default: null
                    }
                }
            }],
            abortions: [{
                doctorName: { type: String, default: null },
                placeOfAbortion: { type: String, default: null },
                dateOfAbortion: { type: Date, default: null },
                weekOfAbortion: { type: Number, default: null },
                typeOfAbortion: {
                    type: String,
                    enum: ["Biochemical Pregnancy", "Blighted Ovum", "Incomplete Abortion", "Missed Abortion", null],
                    default: null
                }
            }],
            liveBirths: [{
                doctorName: { type: String, default: null },
                placeOfDelivery: { type: String, default: null },
                dateOfDelivery: { type: Date, default: null },
                weekOfDelivery: { type: Number, default: null },
                typeOfDelivery: {
                    normal: {
                        name: { type: String, default: "Normal" },
                        type:{
                            type: String,
                            enum: ["Term", "Pre term", null],
                            default: null
                        },
                        term:{
                            name:{ type: String, default: "Term" },
                            type:{
                                type: String,
                                enum: ["FTND Full Term Vaginal Delivery","FTVD Full Term Voccum Delivery","FTFD Full Term Forceps Delivery", null],
                                default: null
                            }
                        },
                        preTerm:{
                            name:{ type: String, default: "Pre term" },
                            type:{
                                type: String,
                                enum: ["INDUCED", "Spontaneoues","Pre term vaginal","Pre term forceps", null],
                                default: null
                            }
                        }
                
                    },
                    cesareanSection: {
                        name: { type: String, default: "Cesarean section" },
                        type: {
                            type: String,
                            enum: ["Term", "Pre term", null],
                            default: null
                        },
                        term:{
                            name:{ type: String, default: "Term" },
                            type:{
                                type: String,
                                enum: ["Emergency","Elective", null],
                                default: null
                            }
                        },
                        preTerm:{
                            name:{ type: String, default: "Pre term" },
                            type:{
                                type: String,
                                enum: ["Emergency","Elective", null],
                                default: null
                            }
                        },
                        indications: [Object]
                    }
                },
                description: {
                    type: String,
                    enum: [
                        "PTND Pre Term Vaginal Delivery",
                        "PTVD Pre Term Vaccum Delivery",
                        "PTFD Pre Term Forceps Delivery",
                        "FTND Full Term Vaginal Delivery",
                        "FTVD Full Term Voccum Delivery",
                        "FTFD Full Term Forceps Delivery",
                        null
                    ],
                    default: null
                },
                genderOfChild: {
                    type: String,
                    enum: ["Male", "Female", null],
                    default: null
                },
                birthWeight: { kg: { type: Number, default: null }, gm: { type: Number, default: null } },
                healthOfChild: {
                    aliveAndWell: {
                        type: Boolean,
                        default: false
                    },
                    comments: { type: String, default: null }
                },
                operativeProcedure: {
                    procedureName: [Object],
                    complicationsInTheProcedure: {
                        value: {
                            type: String,
                            enum: ["Yes", "No", null], default: null
                        },
                        description: { type: String, default: null }
                    },
                    bloodTransfusion: {
                        type: String,
                        enum: ["Yes", "No", null], default: null
                    },
                    anasthaesia: {
                        value: {
                            type: String,
                            enum: ["Yes", "No", null], default: null
                        },
                        types: [Object]
                    }
                },
                ancComplications: {
                    value: {
                        type: String,
                        enum: ["Yes", "No", null], default: null
                    },
                    types: [Object]
                },
                duringAndAfterDeliveryComplications: {
                    value: {
                        type: String,
                        enum: ["Yes", "No", null], default: null
                    },
                    types: [Object]
                }
            }]
        },
        fhAndPastDisease: {
            pastDiseasesHistory: {
                pastDiseases: [Object],
                opreativeProcedure: {
                    value: {
                        type: String,
                        enum: ["Yes", "No", null],
                        default: null
                    },
                    description: {
                        type: String,
                        default: null
                    }
                },
                historyOfPreivousMedicine: { type: String, default: null },
                dentures: { type: String, enum: ["Yes", "No", null], default: null },
                contactLenses: { type: String, enum: ["Yes", "No", null], default: null },
                allergicReactionToMedication: {
                    value: {
                        type: String,
                        enum: ["Yes", "No", null],
                        default: null
                    },
                    description: {
                        type: String,
                        default: null
                    }
                },
            },
            allergies: [Object],
            familyDiseaseHistory: {
                maternal: [String],
                paternal: [String],
                marital: [String],
                sibling: [String]
            }
        },
    },
    isDraft: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
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

export default mongoose.model('pastHistory', pastHistorySchema)