"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const userDetailsSchema = new mongoose.Schema({
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        refs: "User",
        unique: true
    },
    dateOfBirth: {
        type: Date,
        default: null
    },
    address: {
        line1: { type: String, default: null },
        line2: { type: String, default: null },
        city: { type: String, default: null },
        state: { type: String, default: null },
        pincode: { type: Number, default: null }
    },
    height: {
        unit: {
            type: String,
            enum: ["cm", "ft", "m", "inches", null],
            default: null
        },
        value: {
            type: Number,
            default: null
        }
    },
    weight: {
        unit: {
            type: String,
            enum: ["kg", "pound", null]
        },
        value: {
            type: Number,
            default: null
        }
    },
    lastMenstrualDate: {
        type: Date,
        default: null
    },
    dueDate: {
        type: Date,
        default: null
    },
    maritalStatus: {
        type: String,
        enum: ["Married", "Not Married", "Others", null],
        default: null
    },
    occupation: {
        type: String,
        enum: ['Business', 'Working', 'Housewife', 'Others', null],
        default: null
    },
    education: {
        type: String,
        default: null
    },
    pregnancyWeek: {
        type: Number,
        default: null
    },
    husbandDetails: {
        name: {
            type: String,
            default: null
        },
        age: {
            type: Number,
            default: null
        },
        occupation: {
            type: String,
            enum: ['Business', 'Working', 'Others', null],
            default: null
        }
    },
    refBy: {
        name: {
            type: String,
            default: null
        },
        address: {
            type: String,
            default: null
        }
    },
    previousVisit: {
        value: {
            type: Boolean,
            default: false
        },
        sourceOfVisit: {
            type: String,
            enum: ["Self", "Social Media", "Previous Pregnancy", null],
            default: null
        },
        dateOfVisit: { type: Date, default: null }
    },
    language: {
        type: String,
        enum: ["English", "Hindi", "Marathi", null],
        default: null
    },
    emergency: {
        name: { type: String, default: null },
        phoneNumber: { type: String, default: null },
        relationShip: { type: String, default: null }
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
            /*
            Example Format : riskFactor: [
                { rxInfertility: false },
                { peHtn: false },
                { rhIncom: false },
                { boh: false },
                { gdmDm: false },
                { hydramnios: false },
                { fgr: false },
                { cpd: false },
                { obesity: false },
                { thyroidDysfunction: false },
                { iuiIvf: false },
                { incompOs: false },
                { oligohydramnolsPlacenta: false },
                { prevCsMyomectomy: false },
            ]
            */
            complaints: [Object],
            /*
            Example Format : complaints: [
                { skinChanges: false },
                { bleedingGums: false },
                { dizziness: false },
                { backache: false },
                { legPain: false },
                { breathlessness: false },
                { fatigue: false },
                { pvBleeding: false },
                { nausea: false },
                { vommiting: false },
                { pvSpotting: false },
                { heartburnIndigestion: false },
                { opvWhiteDischarge: false },
                { swellingOrFluidRetention: false },
                { weakness: false },
                { abdominalPain: false },
                { headaches: false },
            ]
            */
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
                            type: {
                                type: String,
                                enum: ["Term", "Pre term", null],
                                default: null
                            },
                            term: {
                                name: { type: String, default: "Term" },
                                type: {
                                    type: String,
                                    enum: ["FTND Full Term Vaginal Delivery", "FTVD Full Term Voccum Delivery", "FTFD Full Term Forceps Delivery", null],
                                    default: null
                                }
                            },
                            preTerm: {
                                name: { type: String, default: "Pre term" },
                                type: {
                                    type: String,
                                    enum: ["INDUCED", "Spontaneoues", "Pre term vaginal", "Pre term forceps", null],
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
                            term: {
                                name: { type: String, default: "Term" },
                                type: {
                                    type: String,
                                    enum: ["Emergency", "Elective", null],
                                    default: null
                                }
                            },
                            preTerm: {
                                name: { type: String, default: "Pre term" },
                                type: {
                                    type: String,
                                    enum: ["Emergency", "Elective", null],
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
                        /*
                        Example Format :
                        procedureName: [
                            { appendix: false },
                            { lscs: false },
                            { dAndESurgery: false },
                            { cervicalStitch: false },
                            { myonectomy: false },
                            { mtp: false },
                            { laparohupteroscopy: false }
                        ]
                        */
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
                            /*
                             Example Fromat :
                             types: [
                                { epidural: false },
                                { sa: false },
                                { ga: false },
                                { la: false },
                            ]
                            */
                        }
                    },
                    ancComplications: {
                        value: {
                            type: String,
                            enum: ["Yes", "No", null], default: null
                        },
                        types: [Object]
                        /*
                        Example Format :
                        types: [
                            { cervicalCirclage: false },
                            { hypothyroidism: false },
                            { htn: false },
                            { aph: false },
                            { gdm: false },
                            { dm: false },
                            { pretermLabour: false },
                            { eclamapsia: false },
                            { threatered: false }
                        ]
                        */
                    },
                    duringAndAfterDeliveryComplications: {
                        value: {
                            type: String,
                            enum: ["Yes", "No", null], default: null
                        },
                        types: [Object]
                        /*
                        Example Format :
                         types: [
                            { neonatalResurication: false },
                            { pph: false },
                            { postpartumPreEclamapsia: false },
                            { neonatalHypoglycaemia: false },
                        ]
                        */
                    }
                }]
        },
        fhAndPastDisease: {
            pastDiseasesHistory: {
                pastDiseases: [Object],
                /*
                Example Format :
                   pastDiseases: [
                    { renalDisease: false },
                    { jaundice: false },
                    { heartDisease: false },
                    { typhoidFever: false },
                    { none: false }
                ]
                */
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
            /*
            Example Format :
              allergies: [
                { pollenAllergies: false },
                { latexAllergy: false },
                { foodAllergy: false },
                { dust: false },
                { drugs: false }
            ]
            */
            familyDiseaseHistory: {
                maternal: [String],
                paternal: [String],
                marital: [String],
                sibling: [String]
            }
        },
    },
    weightGainChart: [{
            weight: {
                unit: {
                    type: String,
                    enum: ["kg", "pound", null]
                },
                value: {
                    type: Number,
                    default: null
                }
            },
            babyWeight: {
                unit: {
                    type: String,
                    enum: ["kg", "g", "pound", null]
                },
                value: {
                    type: Number,
                    default: null
                }
            },
            week: { type: Number, default: null },
            date: { type: Date, default: null }
        }],
    weightRangeRecommendedByDoctor: [
        {
            week: { type: Number, default: null },
            upperLimitGain: {
                unit: {
                    type: String,
                    enum: ["kg", "g", "pound", null],
                    default: null
                },
                value: {
                    type: Number,
                    default: null
                },
                isWho: { type: Boolean, default: false }
            },
            lowerLimitGain: {
                unit: {
                    type: String,
                    enum: ["kg", "g", "pound", null],
                    default: null
                },
                value: {
                    type: Number,
                    default: null
                },
                isWho: { type: Boolean, default: false }
            },
        }
    ],
    bookmarkedArticles: [],
    isDraft: { type: Boolean, default: false },
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
}, { timestamps: true });
exports.default = mongoose.model('UserDetails', userDetailsSchema);
