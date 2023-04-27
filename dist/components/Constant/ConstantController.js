"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllConstant = void 0;
const Constants_1 = require("../../utils/Constants");
const ResponseClass_1 = require("../../utils/ResponseClass");
const getAllConstant = (req, res) => {
    return res.status(Constants_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
        success: true,
        message: "get Constant successfully.",
        result: {
            whoInFamily: Constants_1.whoInFamily,
            diseases: Constants_1.diseases,
            typeOfTermination: Constants_1.typeOfTermination,
            typeOfAbortion: Constants_1.typeOfAbortion,
            vaginal: Constants_1.vaginal,
            cesareanSection: Constants_1.cesareanSection,
            liveBirthsDescription: Constants_1.liveBirthsDescription,
            genderOfChild: Constants_1.genderOfChild,
            pregnancyType: Constants_1.pregnancyType,
            assisted: Constants_1.assisted,
            donor: Constants_1.donor,
            flow: Constants_1.flow,
            natureOfCycle: Constants_1.natureOfCycle,
            sourceOfVisit: Constants_1.sourceOfVisit,
            language: Constants_1.language
        }
    }));
};
exports.getAllConstant = getAllConstant;
