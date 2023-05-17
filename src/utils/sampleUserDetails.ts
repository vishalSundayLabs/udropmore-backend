export const sampleUserDetails = {
    userId: "",
    dateOfBirth: null,
    address: {
        line1: null,
        line2: null,
        city: null,
        state: null,
        pincode: null
    },
    height: {
        unit: null,
        value: null
    },
    weight: {
        unit: null,
        value: null
    },
    lastMenstrualDate: null,
    dueDate: null,
    maritalStatus: null,
    occupation: null,
    education: null,
    pregnancyWeek: null,
    husbandDetails: {
        name: null,
        age: null,
        occupation: null
    },
    refBy: {
        name: null,
        address: null
    },
    previousVisit: {
        value: null,
        sourceOfVisit: null,
        dateOfVisit: null
    },
    language: null,
    emergency: null,
    pastHistory: {
        currentPregnancy: {
            pregnancy: {
                firstPregnancy: null,
                termination: null,
                abortion: null,
                liveBirth: null,
                livingBirth: null,
                preTerm: null,
                term: null,
                gptal: null
            },
            yearToConceive: {
                years: null,
                months: null
            },
            pregnancyType: {
                type: null,
                assisted: null,
                donor: null
            },
            riskFactor: [
                {
                    name: "RxInfertility",
                    rxInfertility: false
                },
                {
                    name: "PE/HTN",
                    peHtn: false
                },
                {
                    name: "Rh Incom",
                    rhIncom: false
                },
                {
                    name: "BOH",
                    boh: false
                },
                {
                    name: "GDM/DM",
                    gdmDm: false
                },
                {
                    name: "Hydramnios",
                    hydramnios: false
                },
                {
                    name: "FGR",
                    fgr: false
                },
                {
                    name: "CPD",
                    cpd: false
                },
                {
                    name: "Obesity",
                    obesity: false
                },
                {
                    name: "Thyroid Dysfunction",
                    thyroidDysfunction: false
                },
                {
                    name: "IUI/IVF",
                    iuiIvf: false
                },
                {
                    name: "Incomp OS",
                    incompOs: false
                },
                {
                    name: "Oligohydramnios Placenta",
                    oligohydramnolsPlacenta: false
                },
                {
                    name: "Prev CS / Myomectomy",
                    prevCsMyomectomy: false
                },
            ],
            complaints: [
                {
                    name: "Skin changes",
                    skinChanges: false
                },
                {
                    name: "Bleeding Gums",
                    bleedingGums: false
                },
                {
                    name: "Dizziness",
                    dizziness: false
                },
                {
                    name: "Backache",
                    backache: false
                },
                {
                    name: "Leg pain",
                    legPain: false
                },
                {
                    name: "Breathlessness",
                    breathlessness: false
                },
                {
                    name: "Fatigue",
                    fatigue: false
                },
                {
                    name: "PV bleeding",
                    pvBleeding: false
                },
                {
                    name: "Nausea",
                    nausea: false
                },
                {
                    name: "Vommiting",
                    vommiting: false
                },
                {
                    name: "PV spotting",
                    pvSpotting: false
                },
                {
                    name: "Heartburn & indigestion",
                    heartburnIndigestion: false
                },
                {
                    name: "PV White discharge",
                    pvWhiteDischarge: false
                },
                {
                    name: "Swelling or Fluid retention",
                    swellingOrFluidRetention: false
                },
                {
                    name: "Weakness",
                    weakness: false
                },
                {
                    name: "Abdominal pain",
                    abdominalPain: false
                },
                {
                    name: "Headaches",
                    headaches: false
                }
            ],
            currentMenstrualHistory: {
                durationOfCycleDays: null,
                durationOfCycleLength: null,
                natureOfCycle: null,
                dysmenorrhea: null,
                flow: null
            },
            pastMenstrualHistory: {
                durationOfCycleDays: null,
                durationOfCycleLength: null,
                natureOfCycle: null,
                dysmenorrhea: null,
                flow: null
            },
            currentMedications: null,
        },
        obstetricsHistory: {
            terminations: [{
                doctorName: null,
                placeOfTermination: null,
                dateOfTermination: null,
                weekOfTermination: null,
                typeOfTermination: {
                    mtp: null,
                    ectopicPregnancy: null,
                    mtpForAbnormalities: null
                }
            }],
            abortions: [{
                doctorName: null,
                placeOfAbortion: null,
                dateOfAbortion: null,
                weekOfAbortion: null,
                typeOfAbortion: null
            }],
            liveBirths: [{
                doctorName: null,
                placeOfDelivery: null,
                dateOfDelivery: null,
                weekOfDelivery: null,
                typeOfDelivery: {
                    vaginal: {
                        name:"Vaginal",
                        type: null,
                    },
                    cesareanSection: {
                        name:"Cesarean section", 
                        type: null,
                        indications: [
                            {
                                name: "Failure to progress",
                                failureToProgress: false
                            },
                            {
                                name: "Breech presentation",
                                breechPresentation: false
                            },
                            {
                                name: "Foetal Distress",
                                foetalDistress: false
                            },
                            {
                                name: "Pre Eclampsia",
                                preEclampsia: false
                            },
                            {
                                name: "CPD",
                                cpd: false
                            },
                            {
                                name: "Vertex floating with unfavourablen cervix",
                                vertexFloatingWithUnfavourableCervix: false
                            }
                        ]
                    }
                },
                description: null,
                genderOfChild: null,
                birthWeight: { kg: null, gm: null },
                healthOfChild: {
                    aliveAndWell: false,
                    comments: null
                },
                operativeProcedure: {
                    procedureName: [
                        {
                            name: "Appendix",
                            appendix: false
                        },
                        {
                            name: "LSCS",
                            lscs: false
                        },
                        {
                            name: "D & E Surgery",
                            dAndESurgery: false
                        },
                        {
                            name: "Cervical stitch",
                            cervicalStitch: false
                        },
                        {
                            name: "Myonectomy",
                            myonectomy: false
                        },
                        {
                            name: "MTP",
                            mtp: false
                        },
                        {
                            name: "Laparohupteroscopy",
                            laparohupteroscopy: false
                        }
                    ],
                    complicationsInTheProcedure: {
                        value: null,
                        description: null
                    },
                    bloodTransfusion: null,
                    anasthaesia: {
                        value: null,
                        types: [
                            { name: "Epidural", epidural: false },
                            { name: "S.A", sa: false },
                            { name: "G.A", ga: false },
                            { name: "L.A", la: false },
                        ]
                    }
                },
                ancComplications: {
                    value: null,
                    types: [
                        {
                            name: "Cervical Circlage",
                            cervicalCirclage: false
                        },
                        {
                            name: "Hypothyroidism",
                            hypothyroidism: false
                        },
                        {
                            name: "HTN",
                            htn: false
                        },
                        {
                            name: "APH",
                            aph: false
                        },
                        {
                            name: "GDM",
                            gdm: false
                        },
                        {
                            name: "DM",
                            dm: false
                        },
                        {
                            name: "Preterm Labour",
                            pretermLabour: false
                        },
                        {
                            name: "Eclamapsia",
                            eclamapsia: false
                        },
                        {
                            name: "Threatered Abortia",
                            threatered: false
                        }
                    ]
                },
                duringAndAfterDeliveryComplications: {
                    value: null,
                    types: [
                        {
                            name: "Neonatal resurication",
                            neonatalResurication: false
                        },
                        {
                            name: "PPH",
                            pph: false
                        },
                        {
                            name: "Postpartum pre eclamapsia",
                            postpartumPreEclamapsia: false
                        },
                        {
                            name: "Neonatal hypoglycarmia",
                            neonatalHypoglycaemia: false
                        }
                    ]
                }

            }]
        },
        fhAndPastDisease: {
            pastDiseasesHistory: {
                pastDiseases: [
                    {
                        name: "Renal Disease",
                        renalDisease: false
                    },
                    {
                        name: "Jaundice",
                        jaundice: false
                    },
                    {
                        name: "Heart Disease",
                        heartDisease: false
                    },
                    {
                        name: "Typhoid Fever",
                        typhoidFever: false
                    },
                    {
                        name: "None",
                        none: false
                    }
                ],
                opreativeProcedure: {
                    value: null,
                    description: null
                },
                historyOfPreivousMedicine: null,
                dentures: null,
                contactLenses: null,
                allergicReactionToMedication: null,
            },
            allergies: [
                {
                    name: "Pollen allergies",
                    pollenAllergies: false
                },
                {
                    name: "Latex allergy",
                    latexAllergy: false
                },
                {
                    name: "Food allergy",
                    foodAllergy: false
                },
                {
                    name: "Dust",
                    dust: false
                },
                {
                    name: "Drugs",
                    drugs: false
                }
            ],
            familyDiseaseHistory: {
                maternal: [],
                paternal: [],
                marital: [],
                sibling: []
            }
        },
    },
    weightGainChart: []
}
