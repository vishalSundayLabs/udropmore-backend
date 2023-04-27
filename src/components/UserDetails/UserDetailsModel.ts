import * as mongoose from 'mongoose';

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
            enum: ["CM", "FT", "M", "INCHES", null],
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
            enum: ["KG", "POUND", null]
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
        enum: ["MARRIED", "NOT MARRIED", "OTHER", null],
        default: null
    },
    occupation: {
        type: String,
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
            enum: ["SELF", "SOCIAL MEDIA", "PREVIOUS PREGNANCY", null],
            default: null
        },
        dateOfVisit: { type: Date, default: null }
    },
    language: {
        type: String,
        enum: ["ENGLISH", "HINDI", "MARATHI", null],
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
                    enum: ["YES", "NO", null], default: null
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
            currentMedications: {

            },
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
                        enum: ["PILLS", "SURGICAL", "GENERAL", "CURATING", null],
                        default: null
                    },
                    ectopicPregnancy: {
                        type: String,
                        enum: ["PILLS", "LAPROSCOPY SURGERY", "MEDICAL MANAGEMENT", "LAPROTOMY", null],
                        default: null
                    },
                    mtpForAbnormalities: {
                        type: String,
                        enum: ["MEDICAL", "SURGICAL", null],
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
                    enum: ["BIOCHEMICAL PREGNANCY", "BLIGHTED OVUM", "INCOMPLETE ABORTION", "MiSSED ABORTION", null],
                    default: null
                }
            }],
            liveBirths: [{
                doctorName: { type: String, default: null },
                placeOfDelivery: { type: String, default: null },
                dateOfDelivery: { type: Date, default: null },
                weekOfDelivery: { type: Number, default: null },
                typeOfDelivery: {
                    vaginal: {
                        type: {
                            type: String,
                            enum: ["SPONTANEOUS", "INDUCED", null],
                            default: null
                        }
                    },
                    cesareanSection: {
                        type: {
                            type: String,
                            enum: ["EMERGENCY", "ELECTIVE", null],
                            default: null
                        },
                        indications: [Object]
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
                    enum: ["MALE", "FEMALE", "OTHER", null],
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
                        types: [Object]
                    }
                },
                ancComplications: {
                    value: {
                        type: String,
                        enum: ["YES", "NO", null], default: null
                    },
                    types: [Object]
                },
                duringAndAfterDeliveryComplications: {
                    value: {
                        type: String,
                        enum: ["YES", "NO", null], default: null
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
                        enum: ["YES", "NO", null],
                        default: null
                    },
                    description: {
                        type: String,
                        default: null
                    }
                },
                historyOfPreivousMedicine: { type: String, default: null },
                dentures: { type: String, enum: ["YES", "NO", null], default: null },
                contactLenses: { type: String, enum: ["YES", "NO", null], default: null },
                allergicReactionToMedication: { type: String, enum: ["YES", "NO", null], default: null },
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
    weightGainChart: [{
        weight: {
            unit: {
                type: String,
                enum: ["KG", "POUND", null]
            },
            value: {
                type: Number,
                default: null
            }
        },
        babyWeight: {
            unit: {
                type: String,
                enum: ["KG", "G", "POUND", null]
            },
            value: {
                type: Number,
                default: null
            }
        },
        week: { type: Number, default: null },
        date: { type: Date, default: null }
    }],
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

export default mongoose.model('UserDetails', userDetailsSchema)