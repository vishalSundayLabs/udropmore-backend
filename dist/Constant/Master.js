"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.medicines = exports.language = exports.sourceOfVisit = exports.natureOfCycle = exports.flow = exports.donor = exports.assisted = exports.pregnancyType = exports.genderOfChild = exports.liveBirthsDescription = exports.typeOfDelivery = exports.typeOfAbortion = exports.typeOfTermination = exports.diseases = exports.whoInFamily = exports.INCORRECT_BODY_FORMAT_MESSAGE = exports.HTTP_INTERNAL_SERVER_ERROR = exports.HTTP_NOT_FOUND = exports.HTTP_UNAUTHORIZED = exports.HTTP_BAD_REQUEST = exports.HTTP_CREATED = exports.HTTP_OK = void 0;
exports.HTTP_OK = 200;
exports.HTTP_CREATED = 201;
exports.HTTP_BAD_REQUEST = 400;
exports.HTTP_UNAUTHORIZED = 403;
exports.HTTP_NOT_FOUND = 404;
exports.HTTP_INTERNAL_SERVER_ERROR = 500;
// messages start
exports.INCORRECT_BODY_FORMAT_MESSAGE = "Body format should be as per the object below";
//messages end
//past history constants (start)
exports.whoInFamily = ["Maternal", "Paternal", "Marital", "Sibling"];
exports.diseases = ["Diabetes", "Thyroid", "Epilepsy", "Hypertension", "H.D", "Koch", "Cancer", "Asthma"];
exports.typeOfTermination = [
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
];
exports.typeOfAbortion = ["Biochemical Pregnancy", "Blighted Ovum", "Incomplete Abortion", "Missed Abortion"];
exports.typeOfDelivery = {
    vaginal: ['Spontaneous', 'Induced'],
    cesareanSection: ['Emergency', 'Elective'],
};
exports.liveBirthsDescription = ["PTND Pre Term Vaginal Delivery", "PTVD Pre Term Vaccum Delivery", "PTFD Pre Term Forceps Delivery", "FTND Full Term Vaginal Delivery", "FTVD Full Term Voccum Delivery", "FTFD Full Term Forceps Delivery"];
exports.genderOfChild = ["Male", "Female"];
exports.pregnancyType = ["Natural", "Assisted"];
exports.assisted = ["Self", "Donor"];
exports.donor = ["Male", "Female", "Embryo"];
exports.flow = ["Average", "Scanty", "Heavy"];
exports.natureOfCycle = ["Regular", "Irregular"];
exports.sourceOfVisit = ["Self", "Social Media", "Previous Pregnancy"];
exports.language = ["English", "Hindi", "Marathi"];
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
exports.medicines = {
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
};
