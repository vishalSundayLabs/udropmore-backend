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
            ],
            complaints: [
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
            currentMedications: {

            },
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
                        type: null,
                    },
                    cesareanSection: {
                        type: null,
                        indications: [
                            { failureToProgress: false },
                            { breechPresentation: false },
                            { foetalDistress: false },
                            { preEclampsia: false },
                            { cpd: false }
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
                        { appendix: false },
                        { lscs: false },
                        { dAndESurgery: false },
                        { cervicalStitch: false },
                        { myonectomy: false },
                        { mtp: false },
                        { laparohupteroscopy: false }
                    ],
                    complicationsInTheProcedure: {
                        value: null,
                        description: null
                    },
                    bloodTransfusion: null,
                    anasthaesia: {
                        value: null,
                        types: [
                            { epidural: false },
                            { sa: false },
                            { ga: false },
                            { la: false },
                        ]
                    }
                },
                ancComplications: {
                    value: null,
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
                },
                duringAndAfterDeliveryComplications: {
                    value: null,
                    types: [
                        { neonatalResurication: false },
                        { pph: false },
                        { postpartumPreEclamapsia: false },
                        { neonatalHypoglycaemia: false },
                    ]
                }

            }]
        },
        fhAndPastDisease: {
            pastDiseasesHistory: {
                pastDiseases: [
                    { renalDisease: false },
                    { jaundice: false },
                    { heartDisease: false },
                    { typhoidFever: false },
                    { none: false }
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
                { pollenAllergies: false },
                { latexAllergy: false },
                { foodAllergy: false },
                { dust: false },
                { drugs: false }
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