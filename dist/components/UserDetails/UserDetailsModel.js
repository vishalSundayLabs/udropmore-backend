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
        type: Date
    },
    address: {
        line1: String,
        line2: String,
        city: String,
        state: String,
        pincode: Number
    },
    height: {
        unit: {
            type: String,
            enum: ["cm", "ft", "m", "inches"]
        },
        value: {
            type: Number
        }
    },
    weight: {
        unit: {
            type: String,
            enum: ["kg", "pound"]
        },
        value: {
            type: Number
        }
    },
    lastMenstrualDate: {
        type: Date
    },
    dueDate: {
        type: Date
    },
    maritalStatus: {
        type: String,
        enum: ["MARRIED", "NOT MARRIED"]
    },
    occupation: {
        type: String
    },
    education: {
        type: String
    },
    pregnancyWeek: {
        type: Number
    },
    husbandDetails: {
        type: Object,
        name: {
            type: String
        },
        age: {
            type: Number
        },
        occupation: {
            type: String
        }
    },
    refBy: {
        type: Object,
        name: {
            type: String
        },
        address: {
            type: String
        }
    },
    previousVisit: {
        value: {
            type: Boolean,
            default: false
        },
        sourceOfVisit: {
            type: String,
            enum: ["SELF", "SOCIAL MEDIA", "PREVIOUS PREGNANCY", null],
            default: null
        },
        dateOfVisit: Date
    },
    language: {
        type: String,
        enum: ["ENGLISH", "HINDI"]
    },
    emergency: {
        name: String,
        phoneNumber: String
    },
    pastHistory: {
        currentPregnancy: {
            pregnancy: {
                firstPregnancy: {
                    type: String,
                    enum: ["YES", "NO", null], default: null
                },
                termination: { type: Number, default: null },
                abortion: { type: Number, default: null },
                liveBirth: { type: Number, default: null },
                livingBirth: { type: Number, default: null },
                gtpal: {
                    preTerm: { type: Number, default: null },
                    term: { type: Number, default: null },
                    gSum: { type: Number, default: null },
                    t: { type: Number, default: null },
                    p: { type: Number, default: null },
                    a: { type: Number, default: null },
                    l: { type: Number, default: null },
                }
            },
            yearToConceive: {
                years: { type: Number, default: null },
                months: { type: Number, default: null }
            },
            pregnancyType: {
                type: {
                    type: String,
                    enum: ["NATURAL", "ASSISTED", null],
                    default: null
                },
                assisted: {
                    type: String,
                    enum: ["SELF", "DONOR", null],
                    default: null
                },
                donor: {
                    type: String,
                    enum: ["MALE", "FEMALE", "EMBRYO", null],
                    default: null
                }
            },
            riskFactor: {
                rxInfertility: { type: Boolean, default: false },
                peHtn: { type: Boolean, default: false },
                rhIncom: { type: Boolean, default: false },
                boh: { type: Boolean, default: false },
                gdmDm: { type: Boolean, default: false },
                hydramnios: { type: Boolean, default: false },
                fgr: { type: Boolean, default: false },
                cpd: { type: Boolean, default: false },
                obesity: { type: Boolean, default: false },
                thyroidDysfunction: { type: Boolean, default: false },
                iuiIvf: { type: Boolean, default: false },
                incompOs: { type: Boolean, default: false },
                oligohydramnolsPlacenta: { type: Boolean, default: false },
                prevCsMyomectomy: { type: Boolean, default: false },
            },
            complaints: {
                skinChanges: { type: Boolean, default: false },
                bleedingGums: { type: Boolean, default: false },
                dizziness: { type: Boolean, default: false },
                backache: { type: Boolean, default: false },
                legPain: { type: Boolean, default: false },
                breathlessness: { type: Boolean, default: false },
                fatigue: { type: Boolean, default: false },
                pvBleeding: { type: Boolean, default: false },
                nausea: { type: Boolean, default: false },
                vommiting: { type: Boolean, default: false },
                pvSpotting: { type: Boolean, default: false },
                heartburnIndigestion: { type: Boolean, default: false },
                opvWhiteDischarge: { type: Boolean, default: false },
                swellingOrFluidRetention: { type: Boolean, default: false },
                weakness: { type: Boolean, default: false },
                abdominalPain: { type: Boolean, default: false },
                headaches: { type: Boolean, default: false },
            },
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
                    enum: ["REGULAR", "IRREGULAR", null],
                    default: null
                },
                dysmenorrhea: {
                    type: String,
                    enum: ["YES", "NO", null], default: null
                },
                flow: {
                    type: String,
                    enum: ["AVERAGE", "SCANTY", "HEAVY", null],
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
                    enum: ["REGULAR", "IRREGULAR", null],
                    default: null
                },
                dysmenorrhea: {
                    type: String,
                    enum: ["YES", "NO", null], default: null
                },
                flow: {
                    type: String,
                    enum: ["AVERAGE", "SCANTY", "HEAVY", null],
                    default: null
                }
            },
            currentMedications: {},
        },
        obstetricsHistory: {
            terminations: {
                doctorName: { type: String, default: null },
                placeOfTermination: { type: String, default: null },
                dateOfTermination: { type: Date, default: null },
                weekOfTermination: { type: Number, default: null },
                typeOfTermination: {
                    mtp: {
                        type: String,
                        enum: [, "MTP", "PILLS", "SURGICAL", "GENERAL", "CURATING", null],
                        default: null
                    },
                    ectopicPregnancy: {
                        type: String,
                        enum: ["ECTOPIC PREGNANCY", "PILLS", "LAPROSCOPY SURGERY", "MEDICAL_MANAGEMENT", "LAPROTOMY", null],
                        default: null
                    },
                    mtpForAbnormalities: {
                        type: String,
                        enum: ["MEDICAL", "SURGICAL", null],
                        default: null
                    }
                }
            },
            abortions: {
                doctorName: { type: String, default: null },
                placeOfAbortion: { type: String, default: null },
                dateOfAbortion: { type: Date, default: null },
                weekOfAbortion: { type: Number, default: null },
                typeOfAbortion: {
                    type: String,
                    enum: ["BIOCHEMICAL PREGNANCY", "BLIGHTED OVUM", "INCOMPLETE ABORTION", "MiSSED ABORTION", null],
                    default: null
                }
            },
            liveBirths: {
                doctorName: { type: String, default: null },
                placeOfDelivery: { type: String, default: null },
                dateOfDelivery: { type: Date, default: null },
                weekOfDelivery: { type: Number, default: null },
                typeOfDelivery: {
                    type: String,
                    vaginal: {
                        type: {
                            type: String,
                            enum: ["SPONTANEOUS", "INDUCED", null],
                            default: null
                        },
                    },
                    cesareanSection: {
                        type: {
                            type: String,
                            enum: ["EMERGENCY", "ELECTIVE", null],
                            default: null
                        },
                        indications: {
                            failureToProgress: { type: Boolean, default: false },
                            breechPresentation: { type: Boolean, default: false },
                            foetalDistress: { type: Boolean, default: false },
                            preEclampsia: { type: Boolean, default: false },
                            cpd: { type: Boolean, default: false }
                        }
                    }
                },
                description: {
                    type: String,
                    enum: ["PTND PRE TERM VAGINAL DELIVERY",
                        "PTVD PRE TERM VACCUM DELIVERY",
                        "PTFD PRE TERM FORCEPS DELIVERY",
                        "FTND FULL TERM VAGINAL DELIVERY",
                        "FTVD FULL TERM VOCCUM DELIVERY",
                        "FTFD FULL TERM FORCEPS DELIVERY",
                        null
                    ],
                    default: null
                },
                genderOfChild: {
                    type: String,
                    enum: ["MALE", "FEMALE", null],
                    default: null
                },
                birthWeight: { kg: { type: Number, default: null }, gm: { type: Number, default: null } },
                healthOfChild: {
                    aliveAndWell: {
                        type: Boolean,
                        default: false
                    },
                    comments: { type: String, default: null }
                }
            },
            operativeProcedure: {
                procedureName: {
                    appendix: { type: Boolean, default: false },
                    lscs: { type: Boolean, default: false },
                    dAndESurgery: { type: Boolean, default: false },
                    cervicalStitch: { type: Boolean, default: false },
                    myonectomy: { type: Boolean, default: false },
                    mtp: { type: Boolean, default: false },
                    laparohupteroscopy: { type: Boolean, default: false }
                },
                complicationsInTheProcedure: {
                    value: {
                        type: String,
                        enum: ['YES', 'NO', null], default: null
                    },
                    description: { type: String, default: null }
                },
                bloodTransfusion: {
                    type: String,
                    enum: ["YES", "NO", null], default: null
                },
                anasthaesia: {
                    value: {
                        type: String,
                        enum: ["YES", "NO", null], default: null
                    },
                    types: {
                        epidural: { type: Boolean, default: false },
                        sa: { type: Boolean, default: false },
                        ga: { type: Boolean, default: false },
                        la: { type: Boolean, default: false },
                    }
                }
            },
            ancComplications: {
                value: {
                    type: String,
                    enum: ["YES", "NO", null], default: null
                },
                types: {
                    cervicalCirclage: { type: Boolean, default: false },
                    hypothyroidism: { type: Boolean, default: false },
                    htn: { type: Boolean, default: false },
                    aph: { type: Boolean, default: false },
                    gdm: { type: Boolean, default: false },
                    dm: { type: Boolean, default: false },
                    pretermLabour: { type: Boolean, default: false },
                    eclamapsia: { type: Boolean, default: false },
                    threatered: { type: Boolean, default: false }
                }
            },
            duringAndAfterDeliveryComplications: {
                value: {
                    type: String,
                    enum: ["YES", "NO", null], default: null
                },
                types: {
                    neonatalResurication: { type: Boolean, default: false },
                    pph: { type: Boolean, default: false },
                    postpartumPreEclamapsia: { type: Boolean, default: false },
                    neonatalHypoglycaemia: { type: Boolean, default: false },
                }
            },
        },
        fhAndPastDisease: {
            pastDiseasesHistory: {
                pastDiseases: {
                    renalDisease: { type: Boolean, default: false },
                    jaundice: { type: Boolean, default: false },
                    heartDisease: { type: Boolean, default: false },
                    typhoidFever: { type: Boolean, default: false },
                    none: { type: Boolean, default: false }
                },
                opreativeProcedure: { type: String, enum: ["YES", "NO", null], default: null },
                historyOfPreivousMedicine: { type: String, default: null },
                dentures: { type: String, enum: ["YES", "NO", null], default: null },
                contactLenses: { type: String, enum: ["YES", "NO", null], default: null },
                allergicReactionToMedication: { type: String, enum: ["YES", "NO", null], default: null },
            },
            allergies: {
                pollenAllergies: { type: Boolean, default: false },
                latexAllergy: { type: Boolean, default: false },
                foodAllergy: { type: Boolean, default: false },
                dust: { type: Boolean, default: false },
                drugs: { type: Boolean, default: false }
            },
            familyDiseaseHistory: {
                diabetes: {
                    value: { type: Boolean, default: false },
                    whoInFamily: {
                        type: String,
                        enum: ["MATERNAL", "PATERNAL", "MARITAL", "SIBLING", null],
                        default: null
                    }
                },
                thyroid: {
                    value: { type: Boolean, default: false },
                    whoInFamily: {
                        type: String,
                        enum: ["MATERNAL", "PATERNAL", "MARITAL", "SIBLING", null],
                        default: null
                    }
                },
                epilepsy: {
                    value: { type: Boolean, default: false },
                    whoInFamily: {
                        type: String,
                        enum: ["MATERNAL", "PATERNAL", "MARITAL", "SIBLING", null],
                        default: null
                    }
                },
                hypertension: {
                    value: { type: Boolean, default: false },
                    whoInFamily: {
                        type: String,
                        enum: ["MATERNAL", "PATERNAL", "MARITAL", "SIBLING", null],
                        default: null
                    }
                },
                hd: {
                    value: { type: Boolean, default: false },
                    whoInFamily: {
                        type: String,
                        enum: ["MATERNAL", "PATERNAL", "MARITAL", "SIBLING", null],
                        default: null
                    }
                },
                koch: {
                    value: { type: Boolean, default: false },
                    whoInFamily: {
                        type: String,
                        enum: ["MATERNAL", "PATERNAL", "MARITAL", "SIBLING", null],
                        default: null
                    }
                },
                cancer: {
                    value: { type: Boolean, default: false },
                    whoInFamily: {
                        type: String,
                        enum: ["MATERNAL", "PATERNAL", "MARITAL", "SIBLING", null],
                        default: null
                    }
                },
                asthma: {
                    value: { type: Boolean, default: false },
                    whoInFamily: {
                        type: String,
                        enum: ["MATERNAL", "PATERNAL", "MARITAL", "SIBLING", null],
                        default: null
                    }
                }
            }
        },
    },
    createdBy: {
        type: mongoose.SchemaTypes.ObjectId
    },
    updatedBy: {
        type: mongoose.SchemaTypes.ObjectId
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });
exports.default = mongoose.model('UserDetails', userDetailsSchema);
