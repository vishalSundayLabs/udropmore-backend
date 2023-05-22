"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sampleCurrentObservastion = void 0;
exports.sampleCurrentObservastion = {
    userId: null,
    doctorId: null,
    currentObservastion: [{
            date: null,
            week: null,
            actualDate: null,
            actualWeekAndDays: null,
            riskFactor: [
                {
                    name: "RxInfertility",
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
                    name: "Prev CS / Myomectomy",
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
                    name: "Dizziness",
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
                    name: "PV spotting",
                    pvSpotting: false
                },
                {
                    name: "Heartburn & indigestion",
                    heartburnIndigestion: false
                },
                {
                    name: "PV White discharge",
                    pvWhiteDischarge: false
                },
                {
                    name: "Swelling or Fluid retention",
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
            dating: {
                testName: "Dating",
                usg: {
                    name: "USG",
                    inputType: "inputBox",
                    value: {
                        week: null,
                        days: null
                    }
                },
                clinical: {
                    name: "Clinical",
                    inputType: "inputBox",
                    value: {
                        week: null,
                        days: null
                    }
                }
            },
            generalExamination: {
                testName: "General Examination",
                bp: {
                    name: "B.P",
                    sbp: {
                        name: "SBP",
                        value: null,
                        unit: "mmhg",
                        inputType: "Textbox",
                        placeHolder: "90-120"
                    },
                    dbp: {
                        name: "DBP",
                        value: null,
                        unit: "mmhg",
                        inputType: "Textbox",
                        placeHolder: "70-80"
                    }
                },
                pulse: {
                    name: "Pulse",
                    value: null,
                    unit: "bpm",
                    inputType: "Textbox",
                    placeHolder: "120/80"
                },
                temp: {
                    name: "Temp",
                    value: null,
                    unit: "°C",
                    inputType: "Textbox",
                    placeHolder: "37"
                },
                oedema: {
                    name: "Oedema",
                    value: "Nil",
                    options: ["Nil", "Moderate", "+", "++"],
                    inputType: "Select",
                },
                pallor: {
                    name: "Pallor",
                    value: "Nil",
                    options: ["Nil", "Normal"],
                    inputType: "Select"
                },
                icterus: {
                    name: "Icterus",
                    value: "Nil",
                    options: ["Nil", "Normal"],
                    inputType: "Select"
                },
                thy: {
                    name: "Thy",
                    value: "Nil",
                    options: ["Nil", "Normal"],
                    inputType: "Select"
                },
                hair: {
                    name: "Hair",
                    value: "Nil",
                    options: ["Nil", "Normal"],
                    inputType: "Select"
                },
                br: {
                    name: "Br",
                    value: "Nil",
                    options: ["Nil", "Normal"],
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
                    value: "Nil",
                    options: ["Nil", "Normal"],
                    inputType: "Select"
                },
                spleen: {
                    name: "Spleen",
                    value: "Nil",
                    options: ["Nil", "Normal"],
                    inputType: "Select"
                },
                lump: {
                    name: "Lump",
                    value: "Nil",
                    options: ["Nil", "Normal"],
                    inputType: "Select"
                },
                scar: {
                    name: "Scar",
                    value: "Nil",
                    options: ["Nil", "Normal"],
                    inputType: "Select"
                },
                hernia: {
                    name: "Hernia",
                    value: "Nil",
                    options: ["Nil", "Normal"],
                    inputType: "Select"
                },
                uterus: {
                    name: "Uterus",
                    value: "Nil",
                    options: ["Nil", "Normal"],
                    inputType: "Select"
                }
            },
            perVagina: {
                testName: "Per Vagina",
                avafOrrvrf: {
                    name: "AVAF/RVRF",
                    value: "Retro Flex",
                    options: ["Retro Flex", "Retro Verted"],
                    inputType: "Select"
                },
                os: {
                    name: "OS",
                    value: "Long",
                    options: ["Long", "Short", "Conical", "Patulous", "Closed/Open"],
                    inputType: "Select"
                },
                vagina: {
                    name: "Vagina",
                    value: "Heavy",
                    options: ["Heavy", "Infection", "White discharge"],
                    inputType: "Select"
                },
                adenaxea: {
                    name: "Adenaxea",
                    value: "Th",
                    options: ["Th", "Tender", "masses"],
                    inputType: "Select"
                },
                fx: {
                    name: "Fx",
                    value: "Th",
                    options: ["Th", "Tender", "masses"],
                    inputType: "Select"
                },
                externalBallottement: {
                    name: "External Ballottement",
                    value: "Well relaxed",
                    options: ["Well relaxed", "Irritable"],
                    inputType: "Select"
                }
            },
            fetus: {
                testName: "Fetus",
                fetus: {
                    name: "Fetus",
                    value: "Single",
                    options: ["Single", "Twin", "Triplet"],
                    inputType: "Select"
                },
                fetalHeartRate: {
                    name: "Fetal heart rate",
                    value: null,
                    unit: "Beat per mins",
                    inputType: "Textbox",
                    placeHolder: "120-180"
                },
                presentationPart: {
                    name: "Presentation Part",
                    value: "Caphalic",
                    options: ["Caphalic", "Breech", "Transverse Lie"],
                    inputType: "Select"
                },
                pos: {
                    name: "P.O.S",
                    value: "ROA",
                    options: ["ROA", "ROT", "ROP", "LOA", "LOT", "LOP"],
                    inputType: "Select"
                },
                injection: {
                    name: "Injection",
                    value: "TT First Dose",
                    options: ["TT First Dose", "Boostrix", "Dexa 4 dose", "Anti D if Rh-ve", "RhoGAM"],
                    inputType: "Select"
                },
                remark: {
                    name: "Remark",
                    value: null,
                    options: null,
                    inputType: "Textbox",
                    placeHolder: "Type..."
                }
            }
        }]
};
