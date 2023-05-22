export const pregnancyConfirmation = {
    testName: "Pregnancy Confirmation",
    viewUrl: null,
    followUp: false,
    betaHcgTest: {
        name: "Beta HCG Test",
        value: null,
        btnName: "Test",
        inputType: "Button"
    },
    urinePregnancyTest: {
        name: "Urine Pregnancy",
        value: null, //boolean
        btnName: "Confirm",
        inputType: "Button"
    },
    missedPeriods: {
        name: "Missed periods",
        value: null, //boolean
        btnName: "Confirm",
        inputType: "Button"
    },
    physicalSymptoms: {
        name: "Physical Symptoms",
        value: null,//array
        options: "Abdominal Pain || Urine Frequency || Nausea || Weakness  || Feverish",
        inputType: "MultiSelect"
    }
}
export const bloodGroupAndRhTyping = {
    viewUrl: null,
    followUp: false,
    testName: "Blood Group and Rh Typing",
    motherBloodGroup: {
        name: "Mother Blood Group",
        value: null, // string
        options: ["A +ve", "A -ve", "B +ve", "B -ve", "AB +ve", "AB -ve", "O +ve", "O -ve"],
        inputType: "Select"
    },
    fatherBloodGroup: {
        name: "Father Blood Group",
        value: null, //string
        options: ["A +ve", "A -ve", "B +ve", "B -ve", "AB +ve", "AB -ve", "O +ve", "O -ve"],
        inputType: "Select"
    },
    result: {
        name: "Result",
        value: null, // string
        options: ["Rh -ve"],
        inputType: "Checkbox"
    }
}
export const bloodTest = {
    viewUrl: null,
    followUp: false,
    testName: "Haemogram",
    isRepeat: true,
    hb: {
        name: "Hb",
        value: null,
        unit: "g/dl",
        inputType: "Textbox",
        placeholder: "90-120"
    },
    tlcValue: {
        name: "TLC Value",
        value: null,
        unit: "Cells",
        inputType: "Textbox",
        placeholder: "4000-11000"
    },
    dlcValue: {
        name: "DLC Value",
        inputType: "Object",
        n: {
            name: "N",
            value: null,
            inputType: "Textbox",
            placeholder: "25"
        },
        l: {
            name: "L",
            value: null,
            inputType: "Textbox",
            placeholder: "19"
        },
        e: {
            name: "E",
            value: null,
            inputType: "Textbox",
            placeholder: "09"
        },
        m: {
            name: "M",
            value: null,
            inputType: "Textbox",
            placeholder: "12"
        },
        b: {
            name: "B",
            value: null,
            inputType: "Textbox",
            placeholder: "08"
        }
    },
    piCount: {
        name: "PI Count",
        value: null,
        inputType: "Textbox",
        placeholder: "150,000 to 450,000"
    }
}

export const urineRoutine = {
    viewUrl: null,
    followUp: false,
    testName: "Urine Routine",
    isRepeat: true,
    a: {
        name: "A",
        value: null,
        inputType: "Textbox",
        placeholder: null
    },
    s: {
        name: "S",
        value: null,
        inputType: "Textbox",
        placeholder: null
    },
    micro: {
        name: "Micro",
        value: null,
        inputType: "Textbox",
        placeholder: null
    }
}

export const ogct = {
    viewUrl: null,
    followUp: false,
    testName: "OGCT",
    isRepeat: true,
    twoHours: {
        name: "2 hours",
        value: null,
        unit: "mg/dl",
        inputType: "Textbox",
        placeholder: "155"
    }
}

export const ict = {
    viewUrl: null,
    followUp: false,
    testName: "ICT",
    isRepeat: true,
    I: {
        name: "I",
        value: null,
        inputType: "Textbox",
        placeholder: null
    },
    II: {
        name: "II",
        value: null,
        inputType: "Textbox",
        placeholder: null
    },
    vdrl: {
        name: "VDRL/VDRLI",
        value: null,
        options: ["Positive", "Negative"],
        inputType: "Select"
    },
    hiv: {
        name: "HIV",
        value: null,
        options: ["Positive", "Negative"],
        inputType: "Select"
    },
    hbsag: {
        name: "HBsAg",
        value: null,
        options: ["Positive", "Negative"],
        inputType: "Select"
    },
    hcv: {
        name: "HCV",
        value: null,
        options: ["Positive", "Negative"],
        inputType: "Select"
    }
}

export const hbElectrophoriesis = {
    viewUrl: null,
    followUp: false,
    testName: "Hb Electrophoresis",
    w: {
        name: "W",
        value: null,
        options: ["Borderline raised", "Hb A2"],
        inputType: "Select"
    },
    h: {
        name: "H",
        value: null,
        options: ["Borderline raised", "Hb A2"],
        inputType: "Select"
    }
}

export const thyroidFunctionTest = {
    viewUrl: null,
    followUp: false,
    testName: "Thyroid Function Test",
    isRepeat: true,
    utsh: {
        name: "uTSH",
        value: null,
        inputType: "Textbox",
        placeholder: "0-999"
    },
    ft3: {
        name: "F T3",
        value: null,
        inputType: "Textbox",
        placeholder: "xx.xx"
    },
    ft4: {
        name: "F T4",
        value: null,
        inputType: "Textbox",
        placeholder: "xx.xx"
    },
    antiThyAbs: {
        name: "Anti Thy Abs",
        value: null,
        inputType: "Textbox",
        placeholder: "0-999"
    }
}

export const rubellaLgm = {
    viewUrl: null,
    followUp: false,
    testName: "Rubella LGM",
    rubellaLgm: {
        name: "Rubella LGM",
        value: null,
        options: ["Positive", "Negative"],
        inputType: "Select"
    }
}

export const srVitB12 = {
    viewUrl: null,
    followUp: false,
    testName: "Sr. Vit B12",
    srVitB12: {
        name: "Sr. Vit B12",
        value: null,
        options: ["Positive", "Negative"],
        inputType: "Select"
    }
}

export const biGroup = {
    viewUrl: null,
    followUp: false,
    testName: "BI Group",
    biGroup: {
        name: "BI Group",
        value: null,
        options: ["Positive", "Negative"],
        inputType: "Select"
    }
}

export const glycoylatedHb = {
    viewUrl: null,
    followUp: false,
    testName: "Glycoylated Hb",
    gycoylatedHb: {
        name: "Glycoylated Hb",
        value: null,
        options: ["Positive", "Negative"],
        inputType: "Select"
    }
}

export const afp = {
    viewUrl: null,
    followUp: false,
    testName: "AFP",
    isRepeat: true,
    afp: {
        name: "AFP",
        value: null,
        unit: "ng/ml",
        inputType: "Textbox",
        placeholder: "10-150"
    }
}

export const bsl = {
    viewUrl: null,
    followUp: false,
    testName: "B.S.L",
    isRepeat: true,
    bsl: {
        name: "B.S.L",
        value: null,
        inputType: "Textbox",
        placeholder: "0-999"
    }
}

export const urine = {
    viewUrl: null,
    followUp: false,
    testName: "Urine",
    isRepeat: true,
    a: {
        name: "A",
        value: null,
        options: ["Nil", "Trace", "+1", "+2", "+3"],
        inputType: "Select"
    },
    s: {
        name: "S",
        value: null,
        options: ["Nil", "Trace", "+1", "+2", "+3"],
        inputType: "Select"
    }
}

export const urineCs = {
    viewUrl: null,
    followUp: false,
    testName: "Urine C/s",
    isRepeat: true,
    a: {
        name: "A",
        value: null,
        inputType: "Textbox",
        placeholder: null
    },
    s: {
        name: "S",
        value: null,
        inputType: "Textbox",
        placeholder: null
    },
    micro: {
        name: "Micro",
        value: null,
        inputType: "Textbox",
        placeholder: null
    }
}

export const firstTrimesterScreening = {
    viewUrl: null,
    followUp: false,
    testName: "First Trimester Screening",
    srFreeBhcg: {
        name: "Sr. free BHCG",
        value: null,
        unit: "mIU/ml",
        inputType: "Textbox",
        placeholder: "0-10,00,000"
    },
    pappA: {
        name: "papp-A",
        value: null,
        inputType: "Textbox",
        placeholder: null
    }
}

export const ntUsg = {
    viewUrl: null,
    followUp: false,
    testName: "NT USG",
    re: {
        name: "Re",
        value: null,
        options: "Single || Twins || Triplets",
        inputType: "MultiSelect"
    },
    sw: {
        name: "S/W",
        value: {
            week: null,
            days: null
        },
        options: null,
        inputType: "inputBox"
    },
    ew: {
        name: "E/W",
        value: {
            week: null,
            days: null
        },
        options: null,
        inputType: "inputBox"
    },
    placenta: {
        name: "Placenta",
        value: null,
        options: "Anterior || Posterior || Anterior low || Posterior low",
        inputType: "MultiSelect"
    },
    liquor: {
        name: "Liquor",
        value: null,
        options: "Adequate || Low || Excess",
        inputType: "MultiSelect"
    },
    other: {
        name: "Other",
        value: null,
        options: "Uteroplacental insufficiency ||  Foetp-placental insufficiency",
        inputType: "MultiSelect"
    },
    liveFeotus: {
        name: "Live Feotus",
        value: null,
        options: null,
        inputType: "Select"
    }
}

export const nips = {
    viewUrl: null,
    followUp: false,
    testName: "NIPS",
    isRepeat: true,
    nips: {
        name: "NIPS",
        value: "Low Risk",
        options: ["Low Risk", "Increased risk"],
        inputType: "Select"
    }
}

export const dentalCheckUp = {
    viewUrl: null,
    followUp: false,
    testName: "Dental check up",
    dentalCheckUp: {
        name: "Dental check up",
        value: null,
        inputType: "Textbox",
        placeholder: null
    }
}

export const quadrapleTest = {
    viewUrl: null,
    followUp: false,
    testName: "Quadraple Test",
    bhcg: {
        name: "BHCG",
        value: null,
        inputType: "Textbox",
        placeholder: null
    },
    e3: {
        name: "E3",
        value: null,
        inputType: "Textbox",
        placeHolder: null
    },
    alphaAfp: {
        name: "AlphaAFP",
        value: null,
        inputType: "Textbox",
        placeHolder: null
    },
    inhibinA: {
        name: "Inhibin A",
        value: null,
        inputType: "Textbox",
        placeHolder: null
    },
    karyatyping: {
        name: "karyatyping",
        value: null,
        inputType: "Textbox",
        placeHolder: null
    }
}

export const spInvestigation = {
    viewUrl: null,
    followUp: false,
    testName: "SP Investigation",
    aca: {
        name: "ACA",
        value: "Positive",
        options: ["Positive", "Negative"],
        inputType: "Select"
    },
    la: {
        name: "LA",
        value: null,
        options: null,
        inputType: "Select"
    },
    ana: {
        name: "ANA",
        value: null,
        options: null,
        inputType: "Select"
    },
    to: {
        name: "TO",
        value: null,
        options: null,
        inputType: "Select"
    },
    r: {
        name: "R",
        value: null,
        options: null,
        inputType: "Select"
    },
    c: {
        name: "C",
        value: null,
        options: null,
        inputType: "Select"
    },
    h: {
        name: "H",
        value: null,
        options: null,
        inputType: "Select"
    }
}

export const anaemiaInvestigation = {
    viewUrl: null,
    followUp: false,
    testName: "Anaemia Investigation",
    mcv: {
        name: "MCV",
        value: null,
        unit: "µm3",
        inputType: "Textbox",
        placeHolder: "0.1 to 999.9"
    },
    mch: {
        name: "MCH",
        value: null,
        unit: "pg/cell",
        inputType: "Textbox",
        placeholder: "01-99"
    },
    mchc: {
        name: "MCHC",
        value: null,
        unit: "g/l",
        inputType: "Textbox",
        placeholder: "01-999"
    },
    pbs: {
        name: "PBS",
        value: null,
        unit: null,
        inputType: "Textbox",
        placeholder: null
    },
    srFerritin: {
        name: "Sr. Ferritin",
        value: null,
        unit: "µg/l",
        inputType: "Textbox",
        placeholder: "15-30"
    },
    srIron: {
        name: "Sr. Iron",
        value: null,
        unit: null,
        inputType: "Textbox",
        placeholder: null
    },
    tibc: {
        name: "TIBC",
        value: null,
        unit: "µg/dl",
        inputType: "Textbox",
        placeholder: "01-999"
    },
    sickling: {
        name: "Sickling",
        value: null,
        unit: null,
        inputType: "Textbox",
        placeholder: null
    },
    srVitB12: {
        name: "Sr. Vit B12",
        value: null,
        unit: "pg/ml",
        inputType: "Textbox",
        placeholder: "01-999"
    },
    srFolate: {
        name: "Sr. Folate",
        value: null,
        unit: "ng/ml",
        inputType: "Textbox",
        placeholder: "0.1-99"
    }
}

export const anomalyScan = {
    viewUrl: null,
    followUp: false,
    testName: "Anomaly Scan",
    isRepeat: false,
    anencephaly: {
        name: "Anencephaly",
        value: null,
        inputType: "Textbox",
        placeholder: null
    },
    openSpinaBifida: {
        name: "Open Spina Bifida",
        value: null,
        inputType: "Textbox",
        placeholder: null
    },
    cleftLip: {
        name: "Cleft Lip",
        value: null,
        inputType: "Textbox",
        placeholder: null
    },
    diaphragmaticHernia: {
        name: "Diaphragmatic",
        value: null,
        inputType: "Textbox",
        placeholder: null
    },
    gastroschisis: {
        name: "Gastroschisis",
        value: null,
        inputType: "Textbox",
        placeholder: null
    },
    exomphalos: {
        name: "Exomphalos",
        value: null,
        inputType: "Textbox",
        placeholder: null
    },
    seriousCardiacAbnormalities: {
        name: "Serious Cardiac Abnormalities",
        value: null,
        inputType: "Textbox",
        placeholder: null
    },
    bilateralRenalAgenesis: {
        name: "Bilateral Renal Agenesis",
        value: null,
        inputType: "Textbox",
        placeholder: null
    },
    lethalSkeletalDysplasia: {
        name: "Lethal Skeletal Dysplasia",
        value: null,
        inputType: "Textbox",
        placeholder: null
    },
    edwardsSyndromeTrisomy18: {
        name: "Edwards Syndrome (Trisomy 18)",
        value: null,
        inputType: "Textbox",
        placeholder: null
    }
}

export const foetal2dEcho = {
    viewUrl: null,
    followUp: false,
    testName: "Foetal 2D Echo",
    isRepeat: false,
    fetalGrowth: {
        name: "Fetal Growth",
        value: "Adequate",
        options: ["Adequate", "Low"],
        inputType: "Select"
    },
    liquorQuantity: {
        name: "Liquor Quantity",
        value: "Adequate",
        options: ["Adequate", "Low"],
        inputType: "Select"
    },
    fetoAndUteroplacentalCirculation: {
        name: "Feto & Uteroplacental circulation",
        value: "Adequate",
        options: ["Adequate", "Low"],
        inputType: "Select"
    }
}

export const pihWorkUp = {
    viewUrl: null,
    followUp: false,
    testName: "PIH Workup",
    srBili: {
        name: "Sr. bili",
        value: null,
        unit: "mg/dl",
        inputType: "Textbox",
        placeholder: "0.1 to 1.2"
    },
    sgpt: {
        name: "SGPT",
        value: null,
        unit: "U/L",
        inputType: "Textbox",
        placeholder: "1-99"
    },
    sgot: {
        name: "SGOT",
        value: null,
        unit: "U/L",
        inputType: "Textbox",
        placeholder: "1 to 99"
    },
    srProtines: {
        name: "Sr. protines",
        value: null,
        unit: "g/dl",
        inputType: "Textbox",
        placeholder: "0.1 to 9.9"
    },
    bul: {
        name: "BUL",
        value: null,
        unit: null,
        inputType: "Textbox",
        placeholder: null
    },
    srCreat: {
        name: "Sr. Creat",
        value: null,
        unit: "mg/dl",
        inputType: "Textbox",
        placeholder: "0.1 to 9.9"
    },
    srUricAcid: {
        name: "Sr. Uric Acid",
        value: null,
        unit: "mg/dl",
        inputType: "Textbox",
        placeholder: "0.1 to 9.9"
    },
    srUricAlb: {
        name: "Sr. Uric Alb",
        value: "mg/24 hr",
        inputType: "Textbox",
        placeholder: "0-999"
    },
    ldh: {
        name: "LDH",
        value: null,
        unit: "U/L",
        inputType: "Textbox",
        placeholder: "01 to 999"
    },
    karyotypingDt: {
        name: "Karyotyping Dt",
        value: null,
        unit: null,
        inputType: "Textbox",
        placeholder: null
    }
}

export const coagulationProfile = {
    viewUrl: null,
    followUp: false,
    testName: "Coagulation Profile",
    bt: {
        name: "BT",
        value: null,
        inputType: "Textbox",
        unit: null,
        placeholder: null
    },
    ct: {
        name: "CT",
        value: null,
        inputType: "Textbox",
        unit: null,
        placeholder: null
    },
    pc: {
        name: "PC",
        value: null,
        inputType: "Textbox",
        unit: null,
        placeholder: null
    },
    pt: {
        name: "PT",
        value: null,
        inputType: "Textbox",
        unit: null,
        placeholder: null
    },
    pttk: {
        name: "PTTK",
        value: null,
        inputType: "Textbox",
        unit: null,
        placeholder: null
    },
    dDimer: {
        name: "D Dimer",
        value: null,
        inputType: "Textbox",
        unit: null,
        placeholder: null
    },
    sFibrinogen: {
        name: "S. Fibrinogen",
        value: null,
        inputType: "Textbox",
        unit: null,
        placeholder: null
    }
}

export const usgWithDoppler = {
    viewUrl: null,
    followUp: false,
    testName: "USG With Doppler",
    isRepeat: false,
    fetalGrowth: {
        name: "Fetal Growth",
        value: "Adequate",
        options: ["Adequate", "Low"],
        inputType: "Select"
    },
    liquorQuantity: {
        name: "Liquor Quantity",
        value:"Adequate",
        options: ["Adequate", "Low"],
        inputType: "Select"
    },
    fetoAndUteroplacentalCirculation: {
        name: "Feto & Uteroplacental circulation",
        value: "Adequate",
        options: ["Adequate", "Low"],
        inputType: "Select"
    },
    presentation: {
        name: "Presentation",
        value: "Cephlic",
        options: ["Cephlic", "Breech", "Shoulder", "Face"],
        inputType: "Select"
    }

}

export const dfmr = {
    viewUrl: null,
    followUp: false,
    testName: "DFMR",
    isRepeat: true,
    dfmr: {
        name: "DFMR",
        value: "Normal",
        options: ["Normal", "Low"],
        inputType: "Select"
    }
}

export const nst = {
    viewUrl: null,
    followUp: false,
    testName: "NST",
    isRepeat: false,
    beatPerMins: {
        name: "Beat per mins",
        value: null,
        inputType: "Textbox",
        unit: "beat per mins",
        placeholder: null
    }
}
