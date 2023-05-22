"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.additionalTests = exports.standardTests = exports.sampleNextAntenatalTest = void 0;
exports.sampleNextAntenatalTest = {
    userId: null,
    doctorId: null,
    nextAntenatalTest: [{
            week: null,
            standardtest: [{
                    name: null
                }],
            additionalTest: [{
                    name: null
                }]
        }]
};
exports.standardTests = [
    // week 5 and week 6 same 
    {
        week: [4, 6, 5],
        testName: [
            { name: "PIH Workup", value: true },
            { name: "Coagulation Profile", value: true },
            { name: "SP Investigation", value: true },
            { name: "Anaemia", value: true },
            { name: "NST", value: true },
            { name: "Haemeogram", value: true },
            { name: "USG", value: true }
        ]
    },
    {
        week: [7, 9, 8],
        testName: [
            { name: "USG", value: true },
            { name: "Haemogram", value: true },
            { name: "Urine Routine (A,S,Micro)", value: true },
            { name: "OGCT", value: true },
            { name: "Hb Electrophoresis", value: true },
            { name: "Rubella lgM", value: true },
            { name: "Urine Regular (A,S)", value: true },
            { name: "Sr.Vit B12", value: true },
            { name: "Thyroid Function Test", value: true },
            { name: "BI Group", value: true },
            { name: "AFP", value: true },
            { name: "B.S.L", value: true },
            { name: "Glycoylated Hb", value: true }
        ]
    },
    {
        week: [10, 11, 13, 12],
        testName: [
            { name: "First Trimester Screening", value: true },
            { name: "NT USG", value: true },
            { name: "OGCT", value: true },
            { name: "NIPS", value: true },
            { name: "Urine Routine", value: true },
            { name: "B.S.L", value: true },
            { name: "Dental checkup", value: true }
        ]
    },
    {
        week: [14, 16, 15],
        testName: [
            { name: "Urine C/S(A,S)", value: true },
            { name: "AFP", value: true },
            { name: "Blood test", value: true },
            { name: "Urine Regualar (A,S)", value: true }
        ]
    },
    {
        week: [17, 19, 18],
        testName: [
            { name: "Urine C/S (A,S)", value: true },
            { name: "AFP", value: true },
            { name: "Haemogram", value: true },
            { name: "B.S.L", value: true },
            { name: "Anomaly Scan", value: true },
            { name: "Urine Regular (A,S)", value: true }
        ]
    },
    {
        week: [20, 22, 21],
        testName: [
            { name: "Foetal 2D Echo", value: true }
        ]
    },
    {
        week: [23, 24],
        testName: [
            { name: "OGCT", value: true }
        ]
    },
    {
        week: [25, 26],
        testName: []
    },
    {
        week: [27, 28],
        testName: [
            { name: "USG with dropper", value: true },
            { name: "DFMR", value: true },
            { name: "Urine C/S (A,S,Micro", value: true },
            { name: "Haemogram", value: true },
            { name: "AFP", value: true },
            { name: "OGCT", value: true },
            { name: "Urine Regular (A,S)", value: true },
            { name: "Thyroid Function Test", value: true }
        ]
    },
    {
        week: [29, 30],
        testName: []
    },
    {
        week: [31, 32],
        testName: [
            { name: "DFMR", value: true }
        ]
    },
    {
        week: [33, 34],
        testName: [
            { name: "USG with dropper", value: true },
            { name: "DFMR", value: true }
        ]
    },
    {
        week: [35, 36],
        testName: [
            { name: "DFMR", value: true }
        ]
    },
    {
        week: [37],
        testName: [
            { name: "DFMR", value: true }
        ]
    },
    {
        week: [38],
        testName: [
            { name: "DFMR", value: true }
        ]
    },
    {
        week: [39],
        testName: [
            { name: "DFMR", value: true }
        ]
    },
    {
        week: [40],
        testName: [
            { name: "DFMR", value: true }
        ]
    }
];
exports.additionalTests = [
    // week 5 and week 6 same 
    {
        week: [4, 6, 5],
        testName: [
            { name: "Confirmation Test", value: false }
        ]
    },
    {
        week: [7, 9, 8],
        testName: [
            { name: "ICT , If RH Negative", value: false },
            { name: "Glycoylated Hb , If indicated", value: false },
            { name: "Dating and viability", value: false },
            { name: "Blood Test", value: false },
            { name: "Urine", value: false }
        ]
    },
    {
        week: [10, 11, 13, 12],
        testName: []
    },
    {
        week: [14, 16, 15],
        testName: [
            { name: "Quadruple Test", value: false },
            { name: "PIH Workup", value: false },
            { name: "Coagulation Profile", value: false },
            { name: "SP Investigation", value: false },
            { name: "Anaemia", value: false }
        ]
    },
    {
        week: [17, 19, 18],
        testName: [
            { name: "PIH Workup", value: false },
            { name: "Coagulation Profile", value: false },
            { name: "SP Investigation", value: false },
            { name: "Anaemia", value: false },
            { name: "ICT , If RH Negative", value: false }
        ]
    },
    {
        week: [20, 22, 21],
        testName: [
            { name: "PIH Workup", value: false },
            { name: "Coagulation Profile", value: false },
            { name: "SP Investigation", value: false },
            { name: "Anaemia", value: false },
            { name: "ICT , If RH Negative", value: false }
        ]
    },
    {
        week: [23, 24],
        testName: [
            { name: "PIH Workup", value: false },
            { name: "Coagulation Profile", value: false },
            { name: "SP Investigation", value: false },
            { name: "Anaemia", value: false },
            { name: "ICT , If RH Negative", value: false }
        ]
    },
    {
        week: [25, 26],
        testName: [
            { name: "PIH Workup", value: false },
            { name: "Coagulation Profile", value: false },
            { name: "SP Investigation", value: false },
            { name: "Anaemia", value: false },
            { name: "ICT , If RH Negative", value: false }
        ]
    },
    {
        week: [27, 28],
        testName: [
            { name: "PIH Workup", value: false },
            { name: "Coagulation Profile", value: false },
            { name: "SP Investigation", value: false },
            { name: "Anaemia", value: false },
            { name: "ICT , If RH Negative", value: false }
        ]
    },
    {
        week: [29, 30],
        testName: [
            { name: "PIH Workup", value: false },
            { name: "Coagulation Profile", value: false },
            { name: "SP Investigation", value: false },
            { name: "Anaemia", value: false },
            { name: "ICT , If RH Negative", value: false }
        ]
    },
    {
        week: [31, 32],
        testName: [
            { name: "PIH Workup", value: false },
            { name: "Coagulation Profile", value: false },
            { name: "SP Investigation", value: false },
            { name: "Anaemia", value: false },
            { name: "ICT , If RH Negative", value: false }
        ]
    },
    {
        week: [33, 34],
        testName: [
            { name: "PIH Workup", value: false },
            { name: "Coagulation Profile", value: false },
            { name: "SP Investigation", value: false },
            { name: "Anaemia", value: false },
            { name: "ICT , If RH Negative", value: false }
        ]
    },
    {
        week: [35, 36],
        testName: [
            { name: "PIH Workup", value: false },
            { name: "Coagulation Profile", value: false },
            { name: "SP Investigation", value: false },
            { name: "Anaemia", value: false },
            { name: "NST", value: false },
            { name: "Haemeogram", value: false },
            { name: "USG", value: false }
        ]
    },
    {
        week: [37],
        testName: [
            { name: "PIH Workup", value: false },
            { name: "Coagulation Profile", value: false },
            { name: "SP Investigation", value: false },
            { name: "Anaemia", value: false },
            { name: "NST (If required)", value: false },
            { name: "Haemeogram", value: false },
            { name: "USG (If required)", value: false }
        ]
    },
    {
        week: [38],
        testName: [
            { name: "PIH Workup", value: false },
            { name: "Coagulation Profile", value: false },
            { name: "SP Investigation", value: false },
            { name: "Anaemia", value: false },
            { name: "NST", value: false },
            { name: "Haemeogram", value: false },
            { name: "USG", value: false }
        ]
    },
    {
        week: [39],
        testName: [
            { name: "PIH Workup", value: false },
            { name: "Coagulation Profile", value: false },
            { name: "SP Investigation", value: false },
            { name: "Anaemia", value: false },
            { name: "NST (If required)", value: false },
            { name: "Haemeogram", value: false },
            { name: "USG (If required)", value: false }
        ]
    },
    {
        week: [40],
        testName: [
            { name: "PIH Workup", value: false },
            { name: "Coagulation Profile", value: false },
            { name: "SP Investigation", value: false },
            { name: "Anaemia", value: false },
            { name: "NST", value: false },
            { name: "Haemeogram", value: false },
            { name: "USG", value: false },
            { name: "Haemeogram", value: false },
            { name: "USG", value: false }
        ]
    }
];
