import { afp, anaemiaInvestigation, anomalyScan, bloodGroupAndRhTyping, bloodTest, bsl, coagulationProfile, dentalCheckUp, dfmr, firstTrimesterScreening, foetal2dEcho, glycoylatedHb, hbElectrophoriesis, ict, nips, nst, ntUsg, ogct, pihWorkUp, pregnancyConfirmation, quadrapleTest, rubellaLgm, spInvestigation, srVitB12, thyroidFunctionTest, urine, urineCs, urineRoutine, usgWithDoppler } from "./Tests";

export const MasterAntenatalTest = {
    // week 5 and week 6 same 
    week5: {
        date: null,
        week: [4,5,6],
        weekAndDays: null,
        tests: {
            pregnancyConfirmation: pregnancyConfirmation,
            bloodGroupAndRhTyping: bloodGroupAndRhTyping
        }
    },
    week8: {
        date: null,
        week: [7,8,9],
        weekAndDays: null,
        bloodTest: bloodTest,
        urineRoutine: urineRoutine,
        ogct: ogct,
        ict: ict,
        hbElectrophoriesis: hbElectrophoriesis,
        thyroidFunctionTest: thyroidFunctionTest,
        srVitB12: srVitB12,
        rubellaLgm: rubellaLgm,
        afp: afp,
        bsl: bsl,
        urine: urine,
        glycoylatedHb: glycoylatedHb
    },
    week12: {
        date: null,
        week: [10,11,12,13],
        weekAndDays: null,
        firstTrimesterScreening: firstTrimesterScreening,
        ntUsg: ntUsg,
        ogct: ogct,
        nips: nips,
        dentalCheckUp: dentalCheckUp,
        bsl: bsl,
        urine: urine
    },
    week15: {
        date: null,
        week: [14,15,16],
        weekAndDays: null,
        urineCs: urineCs,
        afp: afp,
        bloodTest: bloodTest,
        urine: urine
    },
    week18: {
        date: null,
        week: [17,18,19],
        weekAndDays: null,
        bloodTest: bloodTest,
        urineCs: urineCs,
        afp: afp,
        anomalyScan: anomalyScan,
        bsl: bsl,
        urine: urine
    },
    week21: {
        date: null,
        week: [20,21,22],
        weekAndDays: null,
        foetal2dEcho: foetal2dEcho,
        // pihWorkUp: pihWorkUp,
        // coagulationProfile: coagulationProfile
    },
    week24: {
        date: null,
        week: [23,24],
        weekAndDays: null,
        ogct: ogct
    },
    week26: {
        date: null,
        week: [25,26],
        weekAndDays: null,

    },
    week28: {
        date: null,
        week: [27,28],
        weekAndDays: null,
        usgWithDoppler: usgWithDoppler,
        dfmr: dfmr,
        bloodTest: bloodTest,
        urineCs: urineCs,
        ict: ict,
        afp: afp,
        ogct: ogct,
        urine: urine,
        thyroidFunctionTest: thyroidFunctionTest
    },
    week30: {
        date: null,
        week: [29,30],
        weekAndDays: null,
        // dfmr: dfmr
    },
    week32: {
        date: null,
        week: [31,32],
        weekAndDays: null,
        dfmr: dfmr
    },
    week34: {
        date: null,
        week: [33,34],
        weekAndDays: null,
        usgWithDoppler: usgWithDoppler,
        dfmr: dfmr,
        nst: nst
    },
    week36: {
        date: null,
        week: [35,36],
        weekAndDays: null,
        // nst: nst,
        dfmr: dfmr
    },
    week37: {
        date: null,
        week: [37],
        weekAndDays: null,
        // nst: nst,
        dfmr: dfmr
    },
    week38: {
        date: null,
        week: [38],
        weekAndDays: null,
        // nst: nst,
        dfmr: dfmr
    },
    week39: {
        date: null,
        week: [39],
        weekAndDays: null,
        // nst: nst,
        dfmr: dfmr
    },
    week40: {
        date: null,
        week: [40],
        weekAndDays: null,
        // nst: nst,
        dfmr: dfmr
    }
}