import { afp, anaemiaInvestigation, anomalyScan, bloodGroupAndRhTyping, bloodTest, bsl, coagulationProfile, dentalCheckUp, dfmr, firstTrimesterScreening, foetal2dEcho, glycoylatedHb, hbElectrophoriesis, ict, nips, nst, ntUsg, ogct, pihWorkUp, pregnancyConfirmation, quadrapleTest, rubellaLgm, spInvestigation, srVitB12, thyroidFunctionTest, urine, urineCs, urineRoutine, usgWithDoppler } from "./Tests";

export const masterAntenatalTest = [
    // week 5 and week 6 same 
    {
        date: null,
        week: [4, 6, 5],
        weekAndDays: null,
        tests: {
            pregnancyConfirmation: pregnancyConfirmation,
            bloodGroupAndRhTyping: bloodGroupAndRhTyping
        }
    },
    {
        date: null,
        week: [7, 9, 8],
        weekAndDays: null,
        tests: {
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
        }
    },
    {
        date: null,
        week: [10, 11, 13, 12],
        weekAndDays: null,
        tests: {
            firstTrimesterScreening: firstTrimesterScreening,
            ntUsg: ntUsg,
            ogct: ogct,
            nips: nips,
            dentalCheckUp: dentalCheckUp,
            bsl: bsl,
            urine: urine
        }
    },
    {
        date: null,
        week: [14, 16, 15],
        weekAndDays: null,
        tests: {
            urineCs: urineCs,
            afp: afp,
            bloodTest: bloodTest,
            urine: urine
        }
    },
    {
        date: null,
        week: [17, 19, 18],
        weekAndDays: null,
        tests: {
            bloodTest: bloodTest,
            urineCs: urineCs,
            afp: afp,
            anomalyScan: anomalyScan,
            bsl: bsl,
            urine: urine
        }
    },
    {
        date: null,
        week: [20, 22, 21],
        weekAndDays: null,
        tests: {
            foetal2dEcho: foetal2dEcho,
            // pihWorkUp: pihWorkUp,
            // coagulationProfile: coagulationProfile
        }
    },
    {
        date: null,
        week: [23, 24],
        weekAndDays: null,
        tests: {
            ogct: ogct
        }

    },
    {
        date: null,
        week: [25, 26],
        weekAndDays: null,
        tests: {}

    },
    {
        date: null,
        week: [27, 28],
        weekAndDays: null,
        tests: {
            usgWithDoppler: usgWithDoppler,
            dfmr: dfmr,
            bloodTest: bloodTest,
            urineCs: urineCs,
            ict: ict,
            afp: afp,
            ogct: ogct,
            urine: urine,
            thyroidFunctionTest: thyroidFunctionTest
        }
    },
    {
        date: null,
        week: [29, 30],
        weekAndDays: null,
        tests: {
            // dfmr: dfmr
        }
    },
    {
        date: null,
        week: [31, 32],
        weekAndDays: null,
        tests: {
            dfmr: dfmr
        }
    },
    {
        date: null,
        week: [33, 34],
        weekAndDays: null,
        tests: {
            usgWithDoppler: usgWithDoppler,
            dfmr: dfmr,
            nst: nst
        }
    },
    {
        date: null,
        week: [35, 36],
        weekAndDays: null,
        tests: {
            // nst: nst,
            dfmr: dfmr
        }
    },
    {
        date: null,
        week: [37],
        weekAndDays: null,
        tests: {
            // nst: nst,
            dfmr: dfmr
        }
    },
    {
        date: null,
        week: [38],
        weekAndDays: null,
        tests: {
            // nst: nst,
            dfmr: dfmr
        }
    },
    {
        date: null,
        week: [39],
        weekAndDays: null,
        tests: {
            // nst: nst,
            dfmr: dfmr
        }
    },
    {
        date: null,
        week: [40],
        weekAndDays: null,
        tests: {
            // nst: nst,
            dfmr: dfmr
        }
    }
]