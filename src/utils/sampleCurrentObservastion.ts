export const sampleCurrentObservastion = {
    userId:null,
    doctorId:null,
    currentObservastion: [{
        date: null,
        week: null,
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
        generalExamination: {
            bp: {
                sbp: null,
                dbp: null
            },
            pulse: null,
            temp: null,
            oedema: null,
            pallor: null,
            icterus: null,
            thy: null,
            hair: null,
            br: null,
            respiratorySystem: null,
            cardiovascularSystem: null,
            centralNervousSystem: null
        },
        perAbdomen: {
            liver: null,
            spleen: null,
            lump: null,
            scar: null,
            hermia: null,
            uterus: null
        },
        perVagina: {
            avafOrrvrf: null,
            os: null,
            vagina: null,
            adenaxea: null,
            fx: null,
            externalBallottement: null
        },
        fetus: {
            fetus: null,
            fetalHeartRate: null,
            presentationPart: null,
            pos: null,
            injection: null,
            remark: null
        }
    }]
}