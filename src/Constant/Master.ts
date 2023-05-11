export const HTTP_OK = 200
export const HTTP_CREATED = 201
export const HTTP_BAD_REQUEST = 400
export const HTTP_UNAUTHORIZED = 403
export const HTTP_NOT_FOUND = 404
export const HTTP_INTERNAL_SERVER_ERROR = 500

// messages start

export const INCORRECT_BODY_FORMAT_MESSAGE = "Body format should be as per the object below"

//messages end

//past history constants (start)

export const whoInFamily = ["Maternal", "Paternal", "Marital", "Sibling"]

export const diseases = ["Diabetes", "Thyroid", "Epilepsy", "Hypertension", "H.D", "Koch", "Cancer", "Asthma"]

export const typeOfTermination = [
    {
        name: 'MTP',
        subTypes: [
            {
                name: 'Pills',
            },
            {
                name: 'Surgical',
            },
            {
                name: 'General',
            },
            {
                name: 'Curating',
            },
        ],
    },
    {
        name: 'Ectopic Pregnancy',
        subTypes: [
            {
                name: "Pills"
            },
            {
                name: 'Laproscopy Surgery',
            },
            {
                name: 'Medical Management',
            },
            {
                name: 'Laprotomy',
            }
        ],
    },
    {
        name: 'MTP for Abnormalities',
        subTypes: [
            {
                name: 'Medical',
            },
            {
                name: 'Surgical',
            },
        ],
    }
]

export const typeOfAbortion = ["Biochemical Pregnancy", "Blighted Ovum", "Incomplete Abortion", "Missed Abortion"]

export const typeOfDelivery = {
    vaginal: ['Spontaneous', 'Induced'],
    cesareanSection: ['Emergency', 'Elective'],
}

export const liveBirthsDescription = ["PTND Pre Term Vaginal Delivery", "PTVD Pre Term Vaccum Delivery", "PTFD Pre Term Forceps Delivery", "FTND Full Term Vaginal Delivery", "FTVD Full Term Voccum Delivery", "FTFD Full Term Forceps Delivery"]

export const genderOfChild = ["Male", "Female"]

export const pregnancyType = ["Natural", "Assisted"]

export const assisted = ["Self", "Donor"]

export const donor = ["Male", "Female", "Embryo"]

export const flow = ["Average", "Scanty", "Heavy"]

export const natureOfCycle = ["Regular", "Irregular"]

export const sourceOfVisit = ["Self", "Social Media", "Previous Pregnancy"]

export const language = ["English", "Hindi", "Marathi"]

//past history constants (end)

//prescription medicines

// export const medicines = [{
//     category: "Iron",
//     drugName: [{
//         name: "Fesovit",
//         freq: null,
//         week: null,
//         startDate: null,
//         endDate: null
//     },
//     {
//         name: "Autrin",
//         freq: null,
//         week: null,
//         startDate: null,
//         endDate: null
//     },
//     {
//         name: "Fersoft",
//         freq: null,
//         week: null,
//         startDate: null,
//         endDate: null
//     },
//     {
//         name: "Reducted MB",
//         freq: null,
//         week: null,
//         startDate: null,
//         endDate: null
//     }]
// },
// {
//     category: "Calcium",
//     drugName: [{
//         name: "Triple A",
//         freq: null,
//         week: null,
//         startDate: null,
//         endDate: null
//     },
//     {
//         name: "Skelcal Mom",
//         freq: null,
//         week: null,
//         startDate: null,
//         endDate: null
//     }]
// },
// {
//     category: "Protien Powder",
//     drugName: [{
//         name: "Protien X",
//         freq: null,
//         week: null,
//         startDate: null,
//         endDate: null
//     }]
// },
// {
//     category: "Folic Acids",
//     drugName: [{
//         name: "Fol - NT",
//         freq: null,
//         week: null,
//         startDate: null,
//         endDate: null
//     },
//     {
//         name: "Foltec Plus",
//         freq: null,
//         week: null,
//         startDate: null,
//         endDate: null
//     }]
// },
// {
//     category: "Zinc",
//     drugName: [{
//         name: "Zincovit",
//         freq: null,
//         week: null,
//         startDate: null,
//         endDate: null
//     }]
// },
// {
//     category: "Acidity",
//     drugName: [{
//         name: "Digene",
//         freq: null,
//         week: null,
//         startDate: null,
//         endDate: null
//     }]
// },
// {
//     category: "Vomitting",
//     drugName: [{
//         name: "Pregnidoxin NU",
//         freq: null,
//         week: null,
//         startDate: null,
//         endDate: null
//     }]
// },
// {
//     category: "Abdominal Pain",
//     drugName: [{
//         name: "Protien X",
//         freq: null,
//         week: null,
//         startDate: null,
//         endDate: null
//     }]
// }
// ]

export const medicines = {
    SUPPLEMENT: {
        Iron: [
            {
                brandName: null,
                category: 'Iron',
                drugName: 'Autrin',
                details: {
                    duration: {
                        value: null,
                        unit: null,
                    },
                    morningDose: null,
                    nightDose: null,
                    afternoonDose: null,
                },
                startDate: null,
                endDate: null,
                type: 'SUPPLEMENT',
            },
            {
                brandName: null,
                category: 'Iron',
                drugName: 'Fesovit',
                details: {
                    duration: {
                        value: null,
                        unit: null,
                    },
                    morningDose: null,
                    nightDose: null,
                    afternoonDose: null,
                },
                startDate: null,
                endDate: null,
                type: 'SUPPLEMENT',
            },
            {
                brandName: null,
                category: 'Iron',
                drugName: 'Fersoft',
                details: {
                    duration: {
                        value: null,
                        unit: null,
                    },
                    morningDose: null,
                    nightDose: null,
                    afternoonDose: null,
                },
                startDate: null,
                endDate: null,
                type: 'SUPPLEMENT',
            },
            {
                brandName: null,
                category: 'Iron',
                drugName: 'Reducted MB',
                details: {
                    duration: {
                        value: null,
                        unit: null,
                    },
                    morningDose: null,
                    nightDose: null,
                    afternoonDose: null,
                },
                startDate: null,
                endDate: null,
                type: 'SUPPLEMENT',
            }
        ],

        Calcium: [
            {
                brandName: null,
                category: 'Calcium',
                drugName: 'Triple A',
                details: {
                    duration: {
                        value: null,
                        unit: null,
                    },
                    morningDose: null,
                    nightDose: null,
                    afternoonDose: null,
                },
                startDate: null,
                endDate: null,
                type: 'SUPPLEMENT',
            },
            {
                brandName: null,
                category: 'Calcium',
                drugName: 'Skelcal Mom',
                details: {
                    duration: {
                        value: null,
                        unit: null,
                    },
                    morningDose: null,
                    nightDose: null,
                    afternoonDose: null,
                },
                startDate: null,
                endDate: null,
                type: 'SUPPLEMENT',
            }
        ],
        protienPowder: [{
            brandName: null,
            category: 'Protien Powder',
            drugName: 'Protien X',
            details: {
                duration: {
                    value: null,
                    unit: null,
                },
                morningDose: null,
                nightDose: null,
                afternoonDose: null,
            },
            startDate: null,
            endDate: null,
            type: 'SUPPLEMENT',
        }],
        folicAcids: [{
            brandName: null,
            category: 'Folic Acids',
            drugName: 'Fol - NT',
            details: {
                duration: {
                    value: null,
                    unit: null,
                },
                morningDose: null,
                nightDose: null,
                afternoonDose: null,
            },
            startDate: null,
            endDate: null,
            type: 'SUPPLEMENT',
        },
        {
            brandName: null,
            category: 'Folic Acids',
            drugName: 'Foltec Plus',
            details: {
                duration: {
                    value: null,
                    unit: null,
                },
                morningDose: null,
                nightDose: null,
                afternoonDose: null,
            },
            startDate: null,
            endDate: null,
            type: 'SUPPLEMENT',
        }
        ],
        zinc: [{
            brandName: null,
            category: 'Zinc',
            drugName: 'Zincovit',
            details: {
                duration: {
                    value: null,
                    unit: null,
                },
                morningDose: null,
                nightDose: null,
                afternoonDose: null,
            },
            startDate: null,
            endDate: null,
            type: 'SUPPLEMENT',
        }]
    },
    SYMPTOM_BASED: {
        Vomitting: [
            {
                brandName: null,
                category: 'Vomitting',
                drugName: 'Doxinate',
                details: {
                    duration: {
                        value: null,
                        unit: null,
                    },
                    morningDose: null,
                    nightDose: null,
                    afternoonDose: null,
                },
                startDate: null,
                endDate: null,
                type: 'SYMPTOM_BASED',
            },
            {
                brandName: null,
                category: 'Vomitting',
                drugName: 'Pregnidoxin NU',
                details: {
                    duration: {
                        value: null,
                        unit: null,
                    },
                    morningDose: null,
                    nightDose: null,
                    afternoonDose: null,
                },
                startDate: null,
                endDate: null,
                type: 'SYMPTOM_BASED',
            },
        ],

        Acidity: [
            {
                brandName: 'Sanofi-India-Ltd',
                category: 'Acidity',
                drugName: 'Gelusil',
                details: {
                    duration: {
                        value: null,
                        unit: null,
                    },
                    morningDose: null,
                    nightDose: null,
                    afternoonDose: null,
                },
                startDate: null,
                endDate: null,
                type: 'SYMPTOM_BASED',
            },
        ],
    },
}