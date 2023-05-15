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
                    Vaginal: {
                        type: {
                            type: String,
                            enum: ["Spontaneous", "Induced", null],
                            default: null
                        }
                    },
                    cesareanSection: {
                        type: {
                            type: String,
                            enum: ["Emergency", "Elective", null],
                            default: null
                        },
                        indications: [Object]
                        /*
                         Example Format : 
                         indications: [
                            { failureToProgress: false },
                            { breechPresentation: false },
                            { foetalDistress: false },
                            { preEclampsia: false },
                            { cpd: false }
                        ]
                        */
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
                allergicReactionToMedication: { type: String, enum: ["Yes", "No", null], default: null },
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
    isDraft: {
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
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

export default mongoose.model('pastHistory', pastHistorySchema)