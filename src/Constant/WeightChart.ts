export const babyWeights = {
    0: {
        babyWeight: {
            value: 0,
            unit: "g"
        }
    },
    1: {
        babyWeight: {
            value: 0,
            unit: "g"
        }
    },
    2: {
        babyWeight: {
            value: 0,
            unit: "g"
        }
    },
    3: {
        babyWeight: {
            value: 0,
            unit: "g"
        }
    },
    4: {
        babyWeight: {
            value: 0,
            unit: "g"
        }
    },
    5: {
        babyWeight: {
            value: 0,
            unit: "g"
        }
    },
    6: {
        babyWeight: {
            value: 0,
            unit: "g"
        }
    },
    7: {
        babyWeight: {
            value: 0,
            unit: "g"
        }
    },
    8: {
        babyWeight: {
            value: 1,
            unit: "g"
        }
    },
    9: {
        babyWeight: {
            value: 2,
            unit: "g"
        }
    },
    10: {
        babyWeight: {
            value: 5.7,
            unit: "g"
        }
    },
    11: {
        babyWeight: {
            value: 8.5,
            unit: "g"
        }
    },
    12: {
        babyWeight: {
            value: 11.35,
            unit: "g"
        }
    },
    13: {
        babyWeight: {
            value: 17.75,
            unit: "g"
        }
    },
    14: {
        babyWeight: {
            value: 40,
            unit: "g"
        }
    },
    15: {
        babyWeight: {
            value: 70,
            unit: "g"
        }
    },
    16: {
        babyWeight: {
            value: 89,
            unit: "g"
        }
    },
    17: {
        babyWeight: {
            value: 100,
            unit: "g"
        }
    },
    18: {
        babyWeight: {
            value: 155,
            unit: "g"
        }
    },
    19: {
        babyWeight: {
            value: 200,
            unit: "g"
        }
    },
    20: {
        babyWeight: {
            value: 255,
            unit: "g"
        }
    },
    21: {
        babyWeight: {
            value: 310,
            unit: "g"
        }
    },
    22: {
        babyWeight: {
            value: 350,
            unit: "g"
        }
    },
    23: {
        babyWeight: {
            value: 450,
            unit: "g"
        }
    },
    24: {
        babyWeight: {
            value: 570,
            unit: "g"
        }
    },
    25: {
        babyWeight: {
            value: 680,
            unit: "g"
        }
    },
    26: {
        babyWeight: {
            value: 900,
            unit: "g"
        }
    },
    27: {
        babyWeight: {
            value: 910,
            unit: "g"
        }
    },
    28: {
        babyWeight: {
            value: 1000,
            unit: "g"
        }
    },
    29: {
        babyWeight: {
            value: 1100,
            unit: "g"
        }
    },
    30: {
        babyWeight: {
            value: 1400,
            unit: "g"
        }
    },
    31: {
        babyWeight: {
            value: 1500,
            unit: "g"
        }
    },
    32: {
        babyWeight: {
            value: 1800,
            unit: "g"
        }
    },
    33: {
        babyWeight: {
            value: 2000,
            unit: "g"
        }
    },
    34: {
        babyWeight: {
            value: 2250,
            unit: "g"
        }
    },
    35: {
        babyWeight: {
            value: 2500,
            unit: "g"
        }
    },
    36: {
        babyWeight: {
            value: 2700,
            unit: "g"
        }
    },
    37: {
        babyWeight: {
            value: 2900,
            unit: "g"
        }
    },
    38: {
        babyWeight: {
            value: 3100,
            unit: "g"
        }
    },
    39: {
        babyWeight: {
            value: 3300,
            unit: "g"
        }
    },
    40: {
        babyWeight: {
            value: 3400,
            unit: "g"
        }
    }
}

export const weightRange = (BMI) => {
    if (BMI < 18.5) {
        return (
            [{
                week: 0,
                upperLimitGain: {
                    unit: "kg",
                    value: 0,
                    isWHO: true
                },
                lowerLimitGain: {
                    unit: "kg",
                    value: 0,
                    isWHO: true
                }
            },
            {
                week: 13,
                upperLimitGain: {
                    unit: "kg",
                    value: 2,
                    isWHO: true
                },
                lowerLimitGain: {
                    unit: "kg",
                    value: 0.5,
                    isWHO: true
                }
            },
            {
                week: 40,
                upperLimitGain: {
                    unit: "kg",
                    value: 18,
                    isWHO: true
                },
                lowerLimitGain: {
                    unit: "kg",
                    value: 12.5,
                    isWHO: true
                }
            }
            ]
        )
    } else if (BMI >= 18.5 && BMI <= 24.9) {
        return (
            [{
                week: 0,
                upperLimitGain: {
                    unit: "kg",
                    value: 0,
                    isWHO: true
                },
                lowerLimitGain: {
                    unit: "kg",
                    value: 0,
                    isWHO: true
                }
            },
            {
                week: 13,
                upperLimitGain: {
                    unit: "kg",
                    value: 2,
                    isWHO: true
                },
                lowerLimitGain: {
                    unit: "kg",
                    value: 0.5,
                    isWHO: true
                }
            },
            {
                week: 40,
                upperLimitGain: {
                    unit: "kg",
                    value: 16,
                    isWHO: true
                },
                lowerLimitGain: {
                    unit: "kg",
                    value: 11.5,
                    isWHO: true
                }
            }
            ]
        )
    } else if (BMI >= 25 && BMI <= 29.9) {
        return (
            [{
                week: 0,
                upperLimitGain: {
                    unit: "kg",
                    value: 0,
                    isWHO: true
                },
                lowerLimitGain: {
                    unit: "kg",
                    value: 0,
                    isWHO: true
                }
            },
            {
                week: 13,
                upperLimitGain: {
                    unit: "kg",
                    value: 2,
                    isWHO: true
                },
                lowerLimitGain: {
                    unit: "kg",
                    value: 0.5,
                    isWHO: true
                }
            },
            {
                week: 40,
                upperLimitGain: {
                    unit: "kg",
                    value: 11.5,
                    isWHO: true
                },
                lowerLimitGain: {
                    unit: "kg",
                    value: 7,
                    isWHO: true
                }
            }
            ]
        )
    } else if (BMI >= 30) {
        return (
            [{
                week: 0,
                upperLimitGain: {
                    unit: "kg",
                    value: 0,
                    isWHO: true
                },
                lowerLimitGain: {
                    unit: "kg",
                    value: 0,
                    isWHO: true
                }
            },
            {
                week: 13,
                upperLimitGain: {
                    unit: "kg",
                    value: 2,
                    isWHO: true
                },
                lowerLimitGain: {
                    unit: "kg",
                    value: 0.5,
                    isWHO: true
                }
            },
            {
                week: 40,
                upperLimitGain: {
                    unit: "kg",
                    value: 9,
                    isWHO: true
                },
                lowerLimitGain: {
                    unit: "kg",
                    value: 5,
                    isWHO: true
                }
            }
            ]
        )
    }
}