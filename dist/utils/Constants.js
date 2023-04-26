"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.natureOfCycle = exports.flow = exports.donor = exports.assisted = exports.pregnancyType = exports.genderOfChild = exports.liveBirthsDescription = exports.cesareanSection = exports.vaginal = exports.typeOfAbortion = exports.typeOfTermination = exports.diseases = exports.whoInFamily = exports.INCORRECT_BODY_FORMAT_MESSAGE = exports.HTTP_INTERNAL_SERVER_ERROR = exports.HTTP_NOT_FOUND = exports.HTTP_UNAUTHORIZED = exports.HTTP_BAD_REQUEST = exports.HTTP_CREATED = exports.HTTP_OK = void 0;
exports.HTTP_OK = 200;
exports.HTTP_CREATED = 201;
exports.HTTP_BAD_REQUEST = 400;
exports.HTTP_UNAUTHORIZED = 403;
exports.HTTP_NOT_FOUND = 404;
exports.HTTP_INTERNAL_SERVER_ERROR = 500;
// messages
exports.INCORRECT_BODY_FORMAT_MESSAGE = "Body format should be as per the object below";
//past history constants
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
                name: 'Left Side',
            },
            {
                name: 'Right Side',
            },
            {
                name: 'Laproscopy Surgery',
            },
            {
                name: 'Medical Management',
            },
            {
                name: 'Laprotomy',
            },
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
exports.vaginal = ["Spontaneous", "Induced"];
exports.cesareanSection = ["Emergency", "Elective"];
exports.liveBirthsDescription = ["PTND Pre Term Vaginal Delivery", "PTVD Pre Term Vaccum Delivery", "PTFD Pre Term Forceps Delivery", "FTND Full Term Vaginal Delivery", "FTVD Full Term Voccum Delivery", "FTFD Full Term Forceps Delivery"];
exports.genderOfChild = ["Male", "Female", "Other"];
exports.pregnancyType = ["Natural", "Assisted"];
exports.assisted = ["Self", "Donor"];
exports.donor = ["Male", "Female", "Embryo"];
exports.flow = ["Average", "Scanty", "Heavy"];
exports.natureOfCycle = ["Regular", "Irregular"];
