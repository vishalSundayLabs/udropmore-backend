export const sampleCurrentObservastion = {
    userId: null,
    doctorId: null,

    currentObservastion: [{
        date: null,
        week: null,
        riskFactor: [
            {
                name: "Rx Infertility",
                rxInfertility: false
            },
            {
                name: "PE/HTN",
                peHtn: false
            },
            {
                name: "Rh Incom",
                rhIncom: false
            },
            {
                name: "BOH",
                boh: false
            },
            {
                name: "GDM/DM",
                gdmDm: false
            },
            {
                name: "Hydramnios",
                hydramnios: false
            },
            {
                name: "FGR",
                fgr: false
            },
            {
                name: "CPD",
                cpd: false
            },
            {
                name: "Obesity",
                obesity: false
            },
            {
                name: "Thyroid Dysfunction",
                thyroidDysfunction: false
            },
            {
                name: "IUI/IVF",
                iuiIvf: false
            },
            {
                name: "Incomp OS",
                incompOs: false
            },
            {
                name: "Oligohydramnios Placenta",
                oligohydramnolsPlacenta: false
            },
            {
                name: "Pre CS/Myomectomy",
                prevCsMyomectomy: false
            },
        ],
        complaints: [
            {
                name: "Skin changes",
                skinChanges: false
            },
            {
                name: "Bleeding Gums",
                bleedingGums: false
            },
            {
                name: "Duzziness",
                dizziness: false
            },
            {
                name: "Backache",
                backache: false
            },
            {
                name: "Leg pain",
                legPain: false
            },
            {
                name: "Breathlessness",
                breathlessness: false
            },
            {
                name: "Fatigue",
                fatigue: false
            },
            {
                name: "PV bleeding",
                pvBleeding: false
            },
            {
                name: "Nausea",
                nausea: false
            },
            {
                name: "Vommiting",
                vommiting: false
            },
            {
                name: "Rx Infertility",
                pvSpotting: false
            },
            {
                name: "Rx Infertility",
                heartburnIndigestion: false
            },
            {
                name: "PV White discharge",
                pvWhiteDischarge: false
            },
            {
                name: "Swelling or Fluid Retention",
                swellingOrFluidRetention: false
            },
            {
                name: "Weakness",
                weakness: false
            },
            {
                name: "Abdominal pain",
                abdominalPain: false
            },
            {
                name: "Headaches",
                headaches: false
            }
        ],
        generalExamination: {
            testName: "General Examination",
            bp: {
                name: "B.P",
                sbp: {
                    name: "SBP",
                    value: null,
                    unit:"mmhg",
                    inputType: "Textbox",
                    placeHolder:"90-120"
                },
                dbp: {
                    name: "DBP",
                    value: null,
                    unit:"mmhg",
                    inputType: "Textbox",
                    placeHolder:"70-80"
                }
            },
            pulse: {
                name: "Pulse",
                value: null,
                unit:"bpm",
                inputType: "Textbox",
                placeHolder:"120/80"
            },
            temp: {
                name: "Temp",
                value: null,
                unit:"°C",
                inputType: "Textbox",
                placeHolder:"37"
            },
            oedema: {
                name: "Oedema",
                value: null,
                options: "Nil/Moderate/+/++",
                inputType: "Select",
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
                inputType: "Textbox",
                placeHolder:"120-180"
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
                inputType: "Textbox",
                placeHolder:null
            }
        }
    }]
}