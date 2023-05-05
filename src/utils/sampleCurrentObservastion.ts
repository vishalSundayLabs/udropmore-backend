export const sampleCurrentObservastion = {
    userId: null,
    doctorId: null,

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
            testName: "General Examination",
            bp: {
                name: "B.P",
                sbp: {
                    name: "SBP",
                    value: null,
                    unit:"mmhg",
                    inputType: "Textbox"
                },
                dbp: {
                    name: "DBP",
                    value: null,
                    unit:"mmhg",
                    inputType: "Textbox"
                }
            },
            pulse: {
                name: "Pulse",
                value: null,
                unit:"bpm",
                inputType: "Textbox"
            },
            temp: {
                name: "Temp",
                value: null,
                unit:"°C",
                inputType: "Textbox"
            },
            oedema: {
                name: "Oedema",
                value: null,
                options: "Nil/Moderate/+/++",
                inputType: "Select"
            },
            pallor: {
                name: "Pallor",
                value: null,
                options: "Normal/Nil",
                inputType: "Select"
            },
            icterus: {
                name: "Icterus",
                value: null,
                options: "Normal/Nil",
                inputType: "Select"
            },
            thy: {
                name: "Thy",
                value: null,
                options: "Normal/Nil",
                inputType: "Select"
            },
            hair: {
                name: "Hair",
                value: null,
                options: "Normal/Nil",
                inputType: "Select"
            },
            br: {
                name: "Br",
                value: null,
                options: "Normal/Nil",
                inputType: "Select"
            },
            respiratorySystem: {
                name: "Respiratory System",
                value: null,
                options: null,
                inputType: "Select"
            },
            cardiovascularSystem: {
                name: "Cardiovascular System",
                value: null,
                options: null,
                inputType: "Select"
            },
            centralNervousSystem: {
                name: "Central Nervous System",
                value: null,
                options: null,
                inputType: "Select"
            }
        },
        perAbdomen: {
            testName: "Per Abdomen",
            liver: {
                name: "Liver",
                value: null,
                options: "Normal/Nil",
                inputType: "Select"
            },
            spleen: {
                name: "Spleen",
                value: null,
                options: "Normal/Nil",
                inputType: "Select"
            },
            lump: {
                name: "Lump",
                value: null,
                options: "Normal/Nil",
                inputType: "Select"
            },
            scar: {
                name: "Scar",
                value: null,
                options: "Normal/Nil",
                inputType: "Select"
            },
            hernia: {
                name: "Hernia",
                value: null,
                options: "Normal/Nil",
                inputType: "Select"
            },
            uterus: {
                name: "Uterus",
                value: null,
                options: "Normal/Nil",
                inputType: "Select"
            }
        },
        perVagina: {
            testName: "Per Vagina",
            avafOrrvrf: {
                name: "AVAF/RVRF",
                value: null,
                options: "Retro Flex/Retro Verted",
                inputType: "Select"
            },
            os: {
                name: "OS",
                value: null,
                options: "Long/Short/Conical/Patulous/Closed/Open",
                inputType: "Select"
            },
            vagina: {
                name: "Vagina",
                value: null,
                options: "Heavy/Infection/White discharge",
                inputType: "Select"
            },
            adenaxea: {
                name: "Adenaxea",
                value: null,
                options: "Th/Tender/masses",
                inputType: "Select"
            },
            fx: {
                name: "Fx",
                value: null,
                options: "Th/Tender/Masses",
                inputType: "Select"
            },
            externalBallottement: {
                name: "External Ballottement",
                value: null,
                options: "Well relaxed/Irritable",
                inputType: "Select"
            }
        },
        fetus: {
            testName: "Fetus",
            fetus: {
                name: "Fetus",
                value: null,
                options: "Single/Twin/Triplet",
                inputType: "Select"
            },
            fetalHeartRate: {
                name: "Fetal heart rate",
                value: null,
                unit:"Beat per mins",
                inputType: "Textbox"
            },
            presentationPart: {
                name: "Presentation Part",
                value: null,
                options: "Caphalic/Breech/Transverse Lie",
                inputType: "Select"
            },
            pos: {
                name: "P.O.S",
                value: null,
                options: "ROA/ROT/ROP/LOA/LOT/LOP",
                inputType: "Select"
            },
            injection: {
                name: "Injection",
                value: null,
                options: "TT First Dose/Boostrix/Dexa 4 dose/Anti D if Rh-ve/RhoGAM",
                inputType: "Select"
            },
            remark: {
                name: "Remark",
                value: null,
                options: null,
                inputType: "Textbox"
            }
        }
    }]
}