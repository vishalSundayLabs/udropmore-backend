"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.weightRange = exports.babyWeights = void 0;
exports.babyWeights = {
    0: {
        babyWeight: {
            value: 0,
            unit: 'G'
        }
    },
    1: {
        babyWeight: {
            value: 0,
            unit: 'G'
        }
    },
    2: {
        babyWeight: {
            value: 0,
            unit: 'G'
        }
    },
    3: {
        babyWeight: {
            value: 0,
            unit: 'G'
        }
    },
    4: {
        babyWeight: {
            value: 0,
            unit: 'G'
        }
    },
    5: {
        babyWeight: {
            value: 0,
            unit: 'G'
        }
    },
    6: {
        babyWeight: {
            value: 0,
            unit: 'G'
        }
    },
    7: {
        babyWeight: {
            value: 0,
            unit: 'G'
        }
    },
    8: {
        babyWeight: {
            value: 1,
            unit: 'G'
        }
    },
    9: {
        babyWeight: {
            value: 2,
            unit: 'G'
        }
    },
    10: {
        babyWeight: {
            value: 5.7,
            unit: 'G'
        }
    },
    11: {
        babyWeight: {
            value: 8.5,
            unit: 'G'
        }
    },
    12: {
        babyWeight: {
            value: 11.35,
            unit: 'G'
        }
    },
    13: {
        babyWeight: {
            value: 17.75,
            unit: 'G'
        }
    },
    14: {
        babyWeight: {
            value: 40,
            unit: 'G'
        }
    },
    15: {
        babyWeight: {
            value: 70,
            unit: 'G'
        }
    },
    16: {
        babyWeight: {
            value: 89,
            unit: 'G'
        }
    },
    17: {
        babyWeight: {
            value: 100,
            unit: 'G'
        }
    },
    18: {
        babyWeight: {
            value: 155,
            unit: 'G'
        }
    },
    19: {
        babyWeight: {
            value: 200,
            unit: 'G'
        }
    },
    20: {
        babyWeight: {
            value: 255,
            unit: 'G'
        }
    },
    21: {
        babyWeight: {
            value: 310,
            unit: 'G'
        }
    },
    22: {
        babyWeight: {
            value: 350,
            unit: 'G'
        }
    },
    23: {
        babyWeight: {
            value: 450,
            unit: 'G'
        }
    },
    24: {
        babyWeight: {
            value: 570,
            unit: 'G'
        }
    },
    25: {
        babyWeight: {
            value: 680,
            unit: 'G'
        }
    },
    26: {
        babyWeight: {
            value: 900,
            unit: 'G'
        }
    },
    27: {
        babyWeight: {
            value: 910,
            unit: 'G'
        }
    },
    28: {
        babyWeight: {
            value: 1000,
            unit: 'G'
        }
    },
    29: {
        babyWeight: {
            value: 1100,
            unit: 'G'
        }
    },
    30: {
        babyWeight: {
            value: 1400,
            unit: 'G'
        }
    },
    31: {
        babyWeight: {
            value: 1500,
            unit: 'G'
        }
    },
    32: {
        babyWeight: {
            value: 1800,
            unit: 'G'
        }
    },
    33: {
        babyWeight: {
            value: 2000,
            unit: 'G'
        }
    },
    34: {
        babyWeight: {
            value: 2250,
            unit: 'G'
        }
    },
    35: {
        babyWeight: {
            value: 2500,
            unit: 'G'
        }
    },
    36: {
        babyWeight: {
            value: 2700,
            unit: 'G'
        }
    },
    37: {
        babyWeight: {
            value: 2900,
            unit: 'G'
        }
    },
    38: {
        babyWeight: {
            value: 3100,
            unit: 'G'
        }
    },
    39: {
        babyWeight: {
            value: 3300,
            unit: 'G'
        }
    },
    40: {
        babyWeight: {
            value: 3400,
            unit: 'G'
        }
    }
};
const weightRange = (BMI) => {
    if (BMI < 18.5) {
        return ([{
                week: 0,
                upperLimitGain: {
                    unit: 'KG',
                    value: 0,
                    isWHO: true
                },
                lowerLimitGain: {
                    unit: 'KG',
                    value: 0,
                    isWHO: true
                }
            },
            {
                week: 13,
                upperLimitGain: {
                    unit: 'KG',
                    value: 2,
                    isWHO: true
                },
                lowerLimitGain: {
                    unit: 'KG',
                    value: 0.5,
                    isWHO: true
                }
            },
            {
                week: 40,
                upperLimitGain: {
                    unit: 'KG',
                    value: 18,
                    isWHO: true
                },
                lowerLimitGain: {
                    unit: 'KG',
                    value: 12.5,
                    isWHO: true
                }
            }
        ]);
    }
    else if (BMI >= 18.5 && BMI <= 24.9) {
        return ([{
                week: 0,
                upperLimitGain: {
                    unit: 'KG',
                    value: 0,
                    isWHO: true
                },
                lowerLimitGain: {
                    unit: 'KG',
                    value: 0,
                    isWHO: true
                }
            },
            {
                week: 13,
                upperLimitGain: {
                    unit: 'KG',
                    value: 2,
                    isWHO: true
                },
                lowerLimitGain: {
                    unit: 'KG',
                    value: 0.5,
                    isWHO: true
                }
            },
            {
                week: 40,
                upperLimitGain: {
                    unit: 'KG',
                    value: 16,
                    isWHO: true
                },
                lowerLimitGain: {
                    unit: 'KG',
                    value: 11.5,
                    isWHO: true
                }
            }
        ]);
    }
    else if (BMI >= 25 && BMI <= 29.9) {
        return ([{
                week: 0,
                upperLimitGain: {
                    unit: 'KG',
                    value: 0,
                    isWHO: true
                },
                lowerLimitGain: {
                    unit: 'KG',
                    value: 0,
                    isWHO: true
                }
            },
            {
                week: 13,
                upperLimitGain: {
                    unit: 'KG',
                    value: 2,
                    isWHO: true
                },
                lowerLimitGain: {
                    unit: 'KG',
                    value: 0.5,
                    isWHO: true
                }
            },
            {
                week: 40,
                upperLimitGain: {
                    unit: 'KG',
                    value: 11.5,
                    isWHO: true
                },
                lowerLimitGain: {
                    unit: 'KG',
                    value: 7,
                    isWHO: true
                }
            }
        ]);
    }
    else if (BMI >= 30) {
        return ([{
                week: 0,
                upperLimitGain: {
                    unit: 'KG',
                    value: 0,
                    isWHO: true
                },
                lowerLimitGain: {
                    unit: 'KG',
                    value: 0,
                    isWHO: true
                }
            },
            {
                week: 13,
                upperLimitGain: {
                    unit: 'KG',
                    value: 2,
                    isWHO: true
                },
                lowerLimitGain: {
                    unit: 'KG',
                    value: 0.5,
                    isWHO: true
                }
            },
            {
                week: 40,
                upperLimitGain: {
                    unit: 'KG',
                    value: 9,
                    isWHO: true
                },
                lowerLimitGain: {
                    unit: 'KG',
                    value: 5,
                    isWHO: true
                }
            }
        ]);
    }
};
exports.weightRange = weightRange;
