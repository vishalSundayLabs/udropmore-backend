"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.antentalTestSchema = void 0;
exports.antentalTestSchema = {
    antenatalTest: {
        date: null,
        week: null,
        pregnancyConfirmation: {
            upload: null,
            followUp: false,
            betaHcgTest: false,
            urinePregnancyTest: false,
            missedPeriods: false,
            phisicalSymptoms: null
        },
        bloodGroupAndRhTyping: {
            upload: null,
            followUp: false,
            motherBloodGroup: null,
            fatherBloodGroup: null,
            result: null
        },
        // currentWeek: [{
        //     testName: null,
        //     upload: null,
        //     followUp: { type: Boolean, default: false }
        // }]
    }
};
