import { food } from "./Food"
import { getCategories } from "./LeapCategories"

export const lifeStyle = [
    {
        category: getCategories.LIFESTYLE,
        subCategory: "Food Diversity",
        section: [
            {
                sectionName: "Green Leafy Vegetables",
                question: [{
                    name: "How often do you consume Green Leafy Vegetables ?",
                    options: {
                        option: [{
                            option: "Never",
                            score: 1,
                            isSelected: false
                        }, {
                            option: "Once a week",
                            score: 2,
                            isSelected: false,
                        }, {
                            option: "2 to 3 times a week",
                            score: 3,
                            isSelected: false
                        }, {
                            option: "Everyday",
                            score: 4,
                            isSelected: false
                        }],
                        cacalculatedScore: 0,
                        multiSelect: false
                    },
                    subQuestions: [{
                        name: "Which Green Leafy Vegetables do you consume ?",
                        option: {
                            A: { options: [{ name: food.spinach.name, isSelected: false }, { name: "Basil", isSelected: false }, { name: food.carrots.name, isSelected: false }, { name: food.brusselSprouts.name, isSelected: false }], score: 1 },
                            B: { options: [{ name: food.lettuce.name, isSelected: false }, { name: food.asparagus.name, isSelected: false }, { name: "Beet root", isSelected: false }], score: 1 },
                            C: { options: [{ name: `${food.cabbage.name}-White | Green | Purple`, isSelected: false }, { name: food.broccoli, isSelected: false }, { name: "Radish", isSelected: false }], score: 1 },
                            D: { options: [{ name: food.sweetPotatoes, isSelected: false }, { name: food.redBellPappers, isSelected: false }, { name: food.potatoes.name, isSelected: false }], score: 1 }
                        },
                        calculatedScore: 0,
                        multiSelect: true
                    }]
                }]
            },
            {
                sectionName: "Fruits",
                question: {
                    name: "How often do you consume fruits ?",
                    options: {
                        option: [{
                            option: "Never",
                            score: 1,
                            isSelected: false,
                            nextQuestionKey: null
                        }, {
                            option: "Once a week",
                            score: 2,
                            isSelected: false,
                            // nextQuestionKey: 1394848
                        }, {
                            option: "2 to 3 times a week",
                            score: 3,
                            isSelected: false
                        }, {
                            option: "Everyday",
                            score: 4,
                            isSelected: false
                        }],
                        calculatedScore: 0,
                        multiSelect: false
                    }
                },
                subQuestions: [{
                    name: "Which fruit do you consume ?",
                    option: {
                        A: { options: [{ name: `Fruits like ${food.tomatoes} / Amla / ${food.oranges} / Lemon`, isSelected: false }, { name: "Basil", isSelected: false }, { name: food.carrots.name, isSelected: false }, { name: food.brusselSprouts, isSelected: false }], score: 1 },
                        B: { options: [{ name: `Seasonal Fruits - ${food.grapes.name}`, isSelected: false }, { name: food.mangose.name, isSelected: false }, { name: `${food.strawberries}, Pomegranate, Figs`, isSelected: false }], score: 1 },
                        C: { options: [{ name: `Berries - ${food.bananas.name}, ${food.watermelon}, BlueBerries`, isSelected: false }], score: 1 },
                        D: { options: [{ name: food.muskMelon, isSelected: false }, { name: "Honeydew", isSelected: false }, { name: food.papaya, isSelected: false }], score: 1 }
                    },
                    nutrient: {
                        A: { name: "Vitamin C | Fiber | Sugar", value: 1 },
                        B: { name: "Seasonal Fruits", value: 1 },
                        C: { name: "Fiber | Sugar", value: 1 },
                        D: { name: "Fiber | Sugar | Potassium", value: 1 }
                    },
                    score: 0,
                    multiSelect: true
                }]
            },
            {
                sectionName: "Cereals",
                question: [{
                    name: "How often do you consume Cereals like Wheat, Oats, Millets ?",
                    options: {
                        option: [{
                            option: "Never",
                            score: 1,
                            isSelected: false,
                            nextQuestionKey: null
                        }, {
                            option: "Once a week",
                            score: 2,
                            isSelected: false,
                            // nextQuestionKey: 1394848
                        }, {
                            option: "2 to 3 times a week",
                            score: 3,
                            isSelected: false
                        }, {
                            option: "Everyday",
                            score: 4,
                            isSelected: false
                        }],
                        calculatedScore: 0,
                        multiSelect: false
                    },
                    subQuestions: [{
                        name: "Which of the following you consume reqularly ?",
                        option: {
                            A: { options: [{ name: "wheat", isSelected: false }, { name: "Rice", isSelected: false }], score: 1 },
                            B: { options: [{ name: "Oats", isSelected: false }, { name: "All Bran Wheat Flakes", isSelected: false }, { name: "Museli", isSelected: false }], score: 1 },
                            C: { options: [{ name: "Millets", isSelected: false }, { name: "Jowar", isSelected: false }], score: 1 },
                            D: { options: [{ name: "Quinoa", isSelected: false }], score: 1 }
                        },
                        nutrient: {
                            A: { name: "Fiber / Iron / Protein / Carbohydrates", value: 1 },
                            B: { name: "Fiber / Micronutrients", value: 1 },
                            C: { name: "Carbohydrates / Iron / Protein / Micronutrients", value: 1 },
                            D: { name: "Protein / Iron / Micronutrients", value: 1 }
                        },
                        score: 0,
                        multiSelect: true
                    }]
                }]
            }
        ]
    },
    {
        category: getCategories.LIFESTYLE,
        subCategory: "Micro Nutrient Dense Foods",
        section: [
            {
                sectionName: "Nuts & Seeds",
                question: [{
                    name: "How often do you consume Nuts ?",
                    options: {
                        option: [{
                            option: "Never",
                            score: 1,
                            isSelected: false,
                            nextQuestionKey: null
                        }, {
                            option: "Once a week",
                            score: 2,
                            isSelected: false,
                            // nextQuestionKey: 1394848
                        }, {
                            option: "2 to 3 times a week",
                            score: 3,
                            isSelected: false
                        }, {
                            option: "Everyday",
                            score: 4,
                            isSelected: false
                        }],
                        calculatedScore: 0,
                        multiSelect: false
                    },
                    subQuestions: [{
                        name: "Which type of nuts do you consume regularly ?",
                        option: {
                            A: { options: [{ name: food.almonds.name, isSelected: false }], score: 1 },
                            B: { options: [{ name: food.pistachio.name, isSelected: false }], score: 1 },
                            C: { options: [{ name: "Raisins", isSelected: false }], score: 1 },
                            D: { options: [{ name: food.cashews.name, isSelected: false }], score: 1 },
                            E: { options: [{ name: food.walnuts.name, isSelected: false }], score: 1 },
                            F: { options: [{ name: "Dates", isSelected: false }], score: 1 }
                        },
                        nutrient: {
                            A: { name: "Vitamin E", value: 1 },
                            B: { name: "Vitamin B6", value: 1 },
                            C: { name: "Iron", value: 1 },
                            D: { name: "Phosphorus", value: 1 },
                            E: [{ name: "DHA", value: 1 }]
                        },
                        score: 0,
                        multiSelect: true
                    }]
                },
                {
                    name: "How often do you consume Seeds?",
                    options: {
                        option: [{
                            option: "Never",
                            score: 1,
                            isSelected: false,
                            nextQuestionKey: null
                        }, {
                            option: "Once a week",
                            score: 2,
                            isSelected: false,
                            // nextQuestionKey: 1394848
                        }, {
                            option: "2 to 3 times a week",
                            score: 3,
                            isSelected: false
                        }, {
                            option: "Everyday",
                            score: 4,
                            isSelected: false
                        }],
                        calculatedScore: 0,
                        multiSelect: false
                    },
                    subQuestions: [{
                        name: "Which type of Seeds do you consume regularly ?",
                        option: {
                            A: { options: [{ name: food.flaxSeeds.name, isSelected: false }], score: 1 },
                            B: { options: [{ name: food.sunflowerSeeds.name, isSelected: false }], score: 1 },
                            C: { options: [{ name: food.chiaSeeds.name, isSelected: false }], score: 1 },
                            D: { options: [{ name: food.pumpkinSeeds.name, isSelected: false }], score: 1 }
                        },
                        nutrient: {
                            A: { name: "Fats | protein | Fiber", value: 1 },
                            B: { name: "Fats | Protein", value: 1 },
                            C: { name: "Fats | Protein | Fiber", value: 1 },
                            D: { name: "Fats | Protein | Iron", value: 1 }
                        },
                        score: 0,
                        multiSelect: true
                    }]
                }
                ],

            }
        ]
    },
    {
        category: getCategories.LIFESTYLE,
        subCategory: "Protein",
        section: [
            {
                sectionName: "Diary Products",
                question: [{
                    name: "How often do you consume Dairy Products ?",
                    options: {
                        option: [{
                            option: "Never",
                            score: 1,
                            isSelected: false,
                            nextQuestionKey: null
                        }, {
                            option: "Once a week",
                            score: 2,
                            isSelected: false,
                            // nextQuestionKey: 1394848
                        }, {
                            option: "2 to 3 times a week",
                            score: 3,
                            isSelected: false
                        }, {
                            option: "Everyday",
                            score: 4,
                            isSelected: false
                        }],
                        calculatedScore: 0,
                        multiSelect: false
                    },
                    subQuestions: [{
                        name: "Which Dairy Products do you consume ?",
                        option: {
                            A: { options: [{ name: food.paneer.name, isSelected: false }], score: 1 },
                            B: { options: [{ name: food.milk.name, isSelected: false }], score: 1 },
                            C: { options: [{ name: food.yogurt.name, isSelected: false }], score: 1 },
                            D: { options: [{ name: food.cheese.name, isSelected: false }], score: 1 }
                        },
                        nutrient: {
                            A: { name: "Calcium | Amino Acids", value: 1 },
                            B: { name: "Calcium | Amino Acids", value: 1 },
                            C: { name: "Calcium | Amino Acids", value: 1 },
                            D: { name: "Calcium | Amino Acids", value: 1 }
                        },
                        score: 0,
                        multiSelect: true
                    }]
                }]
            },
            {
                sectionName: "Dals & Pulses",
                question: [{
                    name: "How often do you consume Dal & Pulses ?",
                    options: {
                        option: [{
                            option: "Never",
                            score: 1,
                            isSelected: false,
                            nextQuestionKey: null
                        }, {
                            option: "Once a week",
                            score: 2,
                            isSelected: false,
                            // nextQuestionKey: 1394848
                        }, {
                            option: "2 to 3 times a week",
                            score: 3,
                            isSelected: false
                        }, {
                            option: "Everyday",
                            score: 4,
                            isSelected: false
                        }],
                        calculatedScore: 0,
                        multiSelect: false
                    },
                    subQuestions: [{
                        name: "Which Dals & Pulses do you consume ?",
                        option: {
                            A: { options: [{ name: `Rajma or ${food.kidneyBeans.name}`, isSelected: false }], score: 1 },
                            B: { options: [{ name: food.chickpeas.name, isSelected: false }, { name: "Chana", isSelected: false }, { name: "Chole or Kala Chana", isSelected: false }], score: 1 },
                            C: { options: [{ name: "Hare Mung", isSelected: false }, { name: "Toor Dal", isSelected: false }, { name: "Urad Dal", isSelected: false }, { name: "Masoor Dal" }], score: 1 },
                            D: { options: [{ name: "Til", isSelected: false }, { name: food.sesameSeeds, isSelected: false }], score: 1 }
                        },
                        nutrient: {
                            A: { name: "Iron", value: 1 },
                            B: { name: "Iron", value: 1 },
                            C: { name: "Protein | Fiber | Iron", value: 1 },
                            D: { name: "Fat | Iron | Calcium", value: 1 }
                        },
                        score: 0,
                        multiSelect: true
                    }]
                }]
            }
        ]
    },
    {
        category: getCategories.LIFESTYLE,
        subCategory: "Protein - Non Veg",
        section: [
            {
                sectionName: "Eggs",
                question: [{
                    name: "Do you consume Eggs ?",
                    options: {
                        option: [{
                            option: "Never",
                            score: 1,
                            isSelected: false,
                            nextQuestionKey: null
                        }, {
                            option: "Once a week",
                            score: 2,
                            isSelected: false,
                            // nextQuestionKey: 1394848
                        }, {
                            option: "2 to 3 times a week",
                            score: 3,
                            isSelected: false
                        }, {
                            option: "Everyday",
                            score: 4,
                            isSelected: false
                        }],
                        calculatedScore: 0,
                        multiSelect: false
                    }
                }]
            },
            {
                sectionName: "Meat",
                question: [{
                    name: "How often do you consume Meat ?",
                    options: {
                        option: [{
                            option: "Never",
                            score: 1,
                            isSelected: false,
                            nextQuestionKey: null
                        }, {
                            option: "Once a week",
                            score: 2,
                            isSelected: false,
                            // nextQuestionKey: 1394848
                        }, {
                            option: "2 to 3 times a week",
                            score: 3,
                            isSelected: false
                        }, {
                            option: "Everyday",
                            score: 4,
                            isSelected: false
                        }],
                        calculatedScore: 0,
                        multiSelect: false
                    },
                    subQuestions: [{
                        name: "Which type of meat do you consume ?",
                        option: {
                            A: { options: [{ name: "Meat-Pork", isSelected: false }, { name: food.beef.name, isSelected: false }, { name: "Lamp", isSelected: false }], score: 1 },
                            B: { options: [{ name: "Birds-Chicken", isSelected: false }, { name: "Turkey", isSelected: false }], score: 1 },
                            C: { options: [{ name: food.fishSalmon, isSelected: false }, { name: "Rawas", isSelected: false }, { name: "Bombay Duck", isSelected: false }], score: 1 },
                            D: { options: [{ name: "Prawns", isSelected: false }, { name: food.shrimps, isSelected: false }], score: 1 }
                        },
                        nutrient: {
                            A: { name: "Essential Amino Acids | Iron", value: 1 },
                            B: { name: "Essential Amino Acids", value: 1 },
                            C: { name: "DHA", value: 1 },
                            D: { name: "DHA", value: 1 }
                        },
                        score: 0,
                        multiSelect: true
                    }]
                }]
            },
            {
                sectionName: "Diary Products",
                question: [{
                    name: "How often do you consume Dairy Products ?",
                    options: {
                        option: [{
                            option: "Never",
                            score: 1,
                            isSelected: false,
                            nextQuestionKey: null
                        }, {
                            option: "Once a week",
                            score: 2,
                            isSelected: false,
                            // nextQuestionKey: 1394848
                        }, {
                            option: "2 to 3 times a week",
                            score: 3,
                            isSelected: false
                        }, {
                            option: "Everyday",
                            score: 4,
                            isSelected: false
                        }],
                        calculatedScore: 0,
                        multiSelect: false
                    },
                    subQuestions: [{
                        name: "Which Dairy Products do you consume ?",
                        option: {
                            A: { options: [{ name: food.paneer.name, isSelected: false }], score: 1 },
                            B: { options: [{ name: food.milk.name, isSelected: false }], score: 1 },
                            C: { options: [{ name: food.yogurt.name, isSelected: false }], score: 1 },
                            D: { options: [{ name: food.cheese.name, isSelected: false }], score: 1 }
                        },
                        nutrient: {
                            A: { name: "Calcium | Amino Acids", value: 1 },
                            B: { name: "Calcium | Amino Acids", value: 1 },
                            C: { name: "Calcium | Amino Acids", value: 1 },
                            D: { name: "Calcium | Amino Acids", value: 1 }
                        },
                        score: 0,
                        multiSelect: true
                    }]
                }]
            },
            {
                sectionName: "Dals & Pulses",
                question: [{
                    name: "How often do you consume Dal & Pulses ?",
                    options: {
                        option: [{
                            option: "Never",
                            score: 1,
                            isSelected: false,
                            nextQuestionKey: null
                        }, {
                            option: "Once a week",
                            score: 2,
                            isSelected: false,
                            // nextQuestionKey: 1394848
                        }, {
                            option: "2 to 3 times a week",
                            score: 3,
                            isSelected: false
                        }, {
                            option: "Everyday",
                            score: 4,
                            isSelected: false
                        }],
                        calculatedScore: 0,
                        multiSelect: false
                    },
                    subQuestions: [{
                        name: "Which Dals & Pulses do you consume ?",
                        option: {
                            A: { options: [{ name: `Rajma or ${food.kidneyBeans.name}`, isSelected: false }], score: 1 },
                            B: { options: [{ name: food.chickpeas.name, isSelected: false }, { name: "Chana", isSelected: false }, { name: "Chole or Kala Chana", isSelected: false }], score: 1 },
                            C: { options: [{ name: "Hare Mung", isSelected: false }, { name: "Toor Dal", isSelected: false }, { name: "Urad Dal", isSelected: false }, { name: "Masoor Dal" }], score: 1 },
                            D: { options: [{ name: "Til", isSelected: false }, { name: food.sesameSeeds.name, isSelected: false }], score: 1 }
                        },
                        nutrient: {
                            A: { name: "Iron", value: 1 },
                            B: { name: "Iron", value: 1 },
                            C: { name: "Protein | Fiber | Iron", value: 1 },
                            D: { name: "Fat | Iron | Calcium", value: 1 }
                        },
                        score: 0,
                        multiSelect: true
                    }]
                }]
            }
        ]
    },
    {
        category: getCategories.LIFESTYLE,
        subCategory: "DHA",
        section: [
            {
                sectionName: null,
                question: [
                    {
                        name: "How often do you consume Walnuts ?",
                        options: {
                            option: [{
                                option: "Never",
                                score: 1,
                                isSelected: false,
                                nextQuestionKey: null
                            }, {
                                option: "Once a week",
                                score: 2,
                                isSelected: false,
                                // nextQuestionKey: 1394848
                            }, {
                                option: "2 to 3 times a week",
                                score: 3,
                                isSelected: false
                            }, {
                                option: "Everyday",
                                score: 4,
                                isSelected: false
                            }],
                            calculatedScore: 0,
                            multiSelect: false
                        },
                    },
                    {
                        name: "How often do you consume Chai Seeds ?",
                        options: {
                            option: [{
                                option: "Never",
                                score: 1,
                                isSelected: false,
                                nextQuestionKey: null
                            }, {
                                option: "Once a week",
                                score: 2,
                                isSelected: false,
                                // nextQuestionKey: 1394848
                            }, {
                                option: "2 to 3 times a week",
                                score: 3,
                                isSelected: false
                            }, {
                                option: "Everyday",
                                score: 4,
                                isSelected: false
                            }],
                            calculatedScore: 0,
                            multiSelect: false
                        },
                    }
                ]
            }
        ]
    },
    {
        category: getCategories.LIFESTYLE,
        subCategory: "DHA - Non Veg",
        section: [
            {
                sectionName: null,
                question: [
                    {
                        name: "How often do you consume Fish - Salmon Rawas ?",
                        options: {
                            option: [{
                                option: "Never",
                                score: 1,
                                isSelected: false,
                                nextQuestionKey: null
                            }, {
                                option: "Once a week",
                                score: 2,
                                isSelected: false,
                                // nextQuestionKey: 1394848
                            }, {
                                option: "2 to 3 times a week",
                                score: 3,
                                isSelected: false
                            }, {
                                option: "Everyday",
                                score: 4,
                                isSelected: false
                            }],
                            calculatedScore: 0,
                            multiSelect: false
                        },
                    },
                    {
                        name: "How often do you consume Prawns / Shrimps ?",
                        options: {
                            option: [{
                                option: "Never",
                                score: 1,
                                isSelected: false,
                                nextQuestionKey: null
                            }, {
                                option: "Once a week",
                                score: 2,
                                isSelected: false,
                                // nextQuestionKey: 1394848
                            }, {
                                option: "2 to 3 times a week",
                                score: 3,
                                isSelected: false
                            }, {
                                option: "Everyday",
                                score: 4,
                                isSelected: false
                            }],
                            calculatedScore: 0,
                            multiSelect: false
                        },
                    },
                    {
                        name: "How often do you consume Walnuts ?",
                        options: {
                            option: [{
                                option: "Never",
                                score: 1,
                                isSelected: false,
                                nextQuestionKey: null
                            }, {
                                option: "Once a week",
                                score: 2,
                                isSelected: false,
                                // nextQuestionKey: 1394848
                            }, {
                                option: "2 to 3 times a week",
                                score: 3,
                                isSelected: false
                            }, {
                                option: "Everyday",
                                score: 4,
                                isSelected: false
                            }],
                            calculatedScore: 0,
                            multiSelect: false
                        },
                    },
                    {
                        name: "How often do you consume Chai Seeds ?",
                        options: {
                            option: [{
                                option: "Never",
                                score: 1,
                                isSelected: false,
                                nextQuestionKey: null
                            }, {
                                option: "Once a week",
                                score: 2,
                                isSelected: false,
                                // nextQuestionKey: 1394848
                            }, {
                                option: "2 to 3 times a week",
                                score: 3,
                                isSelected: false
                            }, {
                                option: "Everyday",
                                score: 4,
                                isSelected: false
                            }],
                            calculatedScore: 0,
                            multiSelect: false
                        },
                    }
                ]
            }
        ]
    },
    {
        category: getCategories.LIFESTYLE,
        subCategory: "Good Fats",
        section: [
            {
                sectionName: null,
                question: [
                    {
                        name: "How often do you consume Fish - Paneer ?",
                        options: {
                            option: [{
                                option: "Never",
                                score: 1,
                                isSelected: false,
                                nextQuestionKey: null
                            }, {
                                option: "Once a week",
                                score: 2,
                                isSelected: false,
                                // nextQuestionKey: 1394848
                            }, {
                                option: "2 to 3 times a week",
                                score: 3,
                                isSelected: false
                            }, {
                                option: "Everyday",
                                score: 4,
                                isSelected: false
                            }],
                            calculatedScore: 0,
                            multiSelect: false
                        },
                    },
                    {
                        name: "How often do you consume Til / Sesame Seeds / Tahini ?",
                        options: {
                            option: [{
                                option: "Never",
                                score: 1,
                                isSelected: false,
                                nextQuestionKey: null
                            }, {
                                option: "Once a week",
                                score: 2,
                                isSelected: false,
                                // nextQuestionKey: 1394848
                            }, {
                                option: "2 to 3 times a week",
                                score: 3,
                                isSelected: false
                            }, {
                                option: "Everyday",
                                score: 4,
                                isSelected: false
                            }],
                            calculatedScore: 0,
                            multiSelect: false
                        },
                    },
                    {
                        name: "How often do you consume Edamame ?",
                        options: {
                            option: [{
                                option: "Never",
                                score: 1,
                                isSelected: false,
                                nextQuestionKey: null
                            }, {
                                option: "Once a week",
                                score: 2,
                                isSelected: false,
                                // nextQuestionKey: 1394848
                            }, {
                                option: "2 to 3 times a week",
                                score: 3,
                                isSelected: false
                            }, {
                                option: "Everyday",
                                score: 4,
                                isSelected: false
                            }],
                            calculatedScore: 0,
                            multiSelect: false
                        },
                    },
                    {
                        name: "How often do you consume Milk ?",
                        options: {
                            option: [{
                                option: "Never",
                                score: 1,
                                isSelected: false,
                                nextQuestionKey: null
                            }, {
                                option: "Once a week",
                                score: 2,
                                isSelected: false,
                                // nextQuestionKey: 1394848
                            }, {
                                option: "2 to 3 times a week",
                                score: 3,
                                isSelected: false
                            }, {
                                option: "Everyday",
                                score: 4,
                                isSelected: false
                            }],
                            calculatedScore: 0,
                            multiSelect: false
                        },
                    },
                    {
                        name: "How often do you consume Yogurt ?",
                        options: {
                            option: [{
                                option: "Never",
                                score: 1,
                                isSelected: false,
                                nextQuestionKey: null
                            }, {
                                option: "Once a week",
                                score: 2,
                                isSelected: false,
                                // nextQuestionKey: 1394848
                            }, {
                                option: "2 to 3 times a week",
                                score: 3,
                                isSelected: false
                            }, {
                                option: "Everyday",
                                score: 4,
                                isSelected: false
                            }],
                            calculatedScore: 0,
                            multiSelect: false
                        },
                    }
                ]
            },
            {
                sectionName: "Non-Veg",
                question: [
                    {
                        name: "How often do you consume Salmon ?",
                        options: {
                            option: [{
                                option: "Never",
                                score: 1,
                                isSelected: false,
                                nextQuestionKey: null
                            }, {
                                option: "Once a week",
                                score: 2,
                                isSelected: false,
                                // nextQuestionKey: 1394848
                            }, {
                                option: "2 to 3 times a week",
                                score: 3,
                                isSelected: false
                            }, {
                                option: "Everyday",
                                score: 4,
                                isSelected: false
                            }],
                            calculatedScore: 0,
                            multiSelect: false
                        },
                    },
                    {
                        name: "How often do you consume Eggs ?",
                        options: {
                            option: [{
                                option: "Never",
                                score: 1,
                                isSelected: false,
                                nextQuestionKey: null
                            }, {
                                option: "Once a week",
                                score: 2,
                                isSelected: false,
                                // nextQuestionKey: 1394848
                            }, {
                                option: "2 to 3 times a week",
                                score: 3,
                                isSelected: false
                            }, {
                                option: "Everyday",
                                score: 4,
                                isSelected: false
                            }],
                            calculatedScore: 0,
                            multiSelect: false
                        },
                    }
                ]
            }
        ]
    },
    {
        category: getCategories.LIFESTYLE,
        subCategory: "High Fibre Foods",
        section: [
            {
                sectionName: null,
                question: [
                    {
                        name: "How often do you consume Fish - Lentils ?",
                        options: {
                            option: [{
                                option: "Never",
                                score: 1,
                                isSelected: false,
                                nextQuestionKey: null
                            }, {
                                option: "Once a week",
                                score: 2,
                                isSelected: false,
                                // nextQuestionKey: 1394848
                            }, {
                                option: "2 to 3 times a week",
                                score: 3,
                                isSelected: false
                            }, {
                                option: "Everyday",
                                score: 4,
                                isSelected: false
                            }],
                            calculatedScore: 0,
                            multiSelect: false
                        },
                    },
                    {
                        name: "How often do you consum food.chickpeas.name?",
                        options: {
                            option: [{
                                option: "Never",
                                score: 1,
                                isSelected: false,
                                nextQuestionKey: null
                            }, {
                                option: "Once a week",
                                score: 2,
                                isSelected: false,
                                // nextQuestionKey: 1394848
                            }, {
                                option: "2 to 3 times a week",
                                score: 3,
                                isSelected: false
                            }, {
                                option: "Everyday",
                                score: 4,
                                isSelected: false
                            }],
                            calculatedScore: 0,
                            multiSelect: false
                        },
                    },
                    {
                        name: "How often do you consume Green Peas ?",
                        options: {
                            option: [{
                                option: "Never",
                                score: 1,
                                isSelected: false,
                                nextQuestionKey: null
                            }, {
                                option: "Once a week",
                                score: 2,
                                isSelected: false,
                                // nextQuestionKey: 1394848
                            }, {
                                option: "2 to 3 times a week",
                                score: 3,
                                isSelected: false
                            }, {
                                option: "Everyday",
                                score: 4,
                                isSelected: false
                            }],
                            calculatedScore: 0,
                            multiSelect: false
                        },
                    },
                    {
                        name: "How often do you consume Flax Seeds ?",
                        options: {
                            option: [{
                                option: "Never",
                                score: 1,
                                isSelected: false,
                                nextQuestionKey: null
                            }, {
                                option: "Once a week",
                                score: 2,
                                isSelected: false,
                                // nextQuestionKey: 1394848
                            }, {
                                option: "2 to 3 times a week",
                                score: 3,
                                isSelected: false
                            }, {
                                option: "Everyday",
                                score: 4,
                                isSelected: false
                            }],
                            calculatedScore: 0,
                            multiSelect: false
                        },
                    },
                    {
                        name: "How often do you consume Chai Seeds ?",
                        options: {
                            option: [{
                                option: "Never",
                                score: 1,
                                isSelected: false,
                                nextQuestionKey: null
                            }, {
                                option: "Once a week",
                                score: 2,
                                isSelected: false,
                                // nextQuestionKey: 1394848
                            }, {
                                option: "2 to 3 times a week",
                                score: 3,
                                isSelected: false
                            }, {
                                option: "Everyday",
                                score: 4,
                                isSelected: false
                            }],
                            calculatedScore: 0,
                            multiSelect: false
                        },
                    },
                    //healthy carbs veg average score
                    {
                        name: "How often do you consume Salmon ?",
                        options: {
                            option: [{
                                option: "Never",
                                score: 1,
                                isSelected: false,
                                nextQuestionKey: null
                            }, {
                                option: "Once a week",
                                score: 2,
                                isSelected: false,
                                // nextQuestionKey: 1394848
                            }, {
                                option: "2 to 3 times a week",
                                score: 3,
                                isSelected: false
                            }, {
                                option: "Everyday",
                                score: 4,
                                isSelected: false
                            }],
                            calculatedScore: 0,
                            multiSelect: false
                        },
                    },
                    {
                        name: "How often do you consume Eggs ?",
                        options: {
                            option: [{
                                option: "Never",
                                score: 1,
                                isSelected: false,
                                nextQuestionKey: null
                            }, {
                                option: "Once a week",
                                score: 2,
                                isSelected: false,
                                // nextQuestionKey: 1394848
                            }, {
                                option: "2 to 3 times a week",
                                score: 3,
                                isSelected: false
                            }, {
                                option: "Everyday",
                                score: 4,
                                isSelected: false
                            }],
                            calculatedScore: 0,
                            multiSelect: false
                        },
                    }
                ]
            }
        ]
    },
    {
        category: getCategories.LIFESTYLE,
        subCategory: "Healthy Carbs",
        section: [
            {
                sectionName: null,
                question: [
                    {
                        name: "How often do you consume Fish - Sweet Potatoes ?",
                        options: {
                            option: [{
                                option: "Never",
                                score: 1,
                                isSelected: false,
                                nextQuestionKey: null
                            }, {
                                option: "Once a week",
                                score: 2,
                                isSelected: false,
                                // nextQuestionKey: 1394848
                            }, {
                                option: "2 to 3 times a week",
                                score: 3,
                                isSelected: false
                            }, {
                                option: "Everyday",
                                score: 4,
                                isSelected: false
                            }],
                            calculatedScore: 0,
                            multiSelect: false
                        },
                    },
                    {
                        name: "How often do you consume Brown Rice ?",
                        options: {
                            option: [{
                                option: "Never",
                                score: 1,
                                isSelected: false,
                                nextQuestionKey: null
                            }, {
                                option: "Once a week",
                                score: 2,
                                isSelected: false,
                                // nextQuestionKey: 1394848
                            }, {
                                option: "2 to 3 times a week",
                                score: 3,
                                isSelected: false
                            }, {
                                option: "Everyday",
                                score: 4,
                                isSelected: false
                            }],
                            calculatedScore: 0,
                            multiSelect: false
                        },
                    },
                    {
                        name: "How often do you consume Millets ?",
                        options: {
                            option: [{
                                option: "Never",
                                score: 1,
                                isSelected: false,
                                nextQuestionKey: null
                            }, {
                                option: "Once a week",
                                score: 2,
                                isSelected: false,
                                // nextQuestionKey: 1394848
                            }, {
                                option: "2 to 3 times a week",
                                score: 3,
                                isSelected: false
                            }, {
                                option: "Everyday",
                                score: 4,
                                isSelected: false
                            }],
                            calculatedScore: 0,
                            multiSelect: false
                        },
                    },
                    {
                        name: "How often do you consume Quinao ?",
                        options: {
                            option: [{
                                option: "Never",
                                score: 1,
                                isSelected: false,
                                nextQuestionKey: null
                            }, {
                                option: "Once a week",
                                score: 2,
                                isSelected: false,
                                // nextQuestionKey: 1394848
                            }, {
                                option: "2 to 3 times a week",
                                score: 3,
                                isSelected: false
                            }, {
                                option: "Everyday",
                                score: 4,
                                isSelected: false
                            }],
                            calculatedScore: 0,
                            multiSelect: false
                        },
                    },
                    //healthy carbs veg average score
                    {
                        name: "How often do you consume Salmon ?",
                        options: {
                            option: [{
                                option: "Never",
                                score: 1,
                                isSelected: false,
                                nextQuestionKey: null
                            }, {
                                option: "Once a week",
                                score: 2,
                                isSelected: false,
                                // nextQuestionKey: 1394848
                            }, {
                                option: "2 to 3 times a week",
                                score: 3,
                                isSelected: false
                            }, {
                                option: "Everyday",
                                score: 4,
                                isSelected: false
                            }],
                            calculatedScore: 0,
                            multiSelect: false
                        },
                    }

                ],
            }
        ]
    },
    {
        category: getCategories.LIFESTYLE,
        subCategory: null,
        section: [
            {
                sectionName: null,
                question: [{
                    name: "How many hours do you sleep everyday ?",
                    options: {
                        option: [{
                            option: "<7 hours",
                            score: 2,
                            isSelected: false,
                            nextQuestionKey: null
                        }, {
                            option: "7 hours",
                            score: 4,
                            isSelected: false,
                        }, {
                            option: "8 hours",
                            score: 4,
                            isSelected: false
                        }, {
                            option: "9 hours",
                            score: 3,
                            isSelected: false
                        }, {
                            option: "10 hours",
                            score: 3,
                            isSelected: false
                        }, {
                            option: "More than 10 hours",
                            score: 1,
                            isSelected: false
                        }
                        ],
                        calculatedScore: 0,
                        multiSelect: false
                    },
                    subQuestions: null
                }]
            },
            {
                sectionName: null,
                question: [{
                    name: "How many glasses of water do you drink everyday ?",
                    options: {
                        option: [{
                            option: "< 8 glasses per day",
                            score: 1,
                            isSelected: false,
                            nextQuestionKey: null
                        }, {
                            option: "8 - 10 glasses per day",
                            score: 3,
                            isSelected: false,
                        }, {
                            option: "10 - 12 glasses",
                            score: 4,
                            isSelected: false
                        }, {
                            option: "> 12 glasses",
                            score: 2,
                            isSelected: false
                        }],
                        calculatedScore: 0,
                        multiSelect: false
                    },
                    subQuestions: null
                }]
            },
            {
                sectionName: null,
                question: [{
                    name: "Do you smoke and/ or consume alcohol?",
                    options: {
                        option: [{
                            option: "Yes",
                            score: 1,
                            isSelected: false,
                            nextQuestionKey: null
                        }, {
                            option: "No",
                            score: 4,
                            isSelected: false,
                        }],
                        calculatedScore: 0,
                        multiSelect: false
                    },
                    subQuestions: null
                }]
            },
            {
                sectionName: null,
                question: [{
                    name: "Are you a vegetarian or Non – vegetarian ?",
                    options: {
                        option: [{
                            option: "Vegetarian",
                            score: null,
                            isSelected: false,
                            nextQuestionKey: null
                        }, {
                            option: "Non-vegetarian",
                            score: null,
                            isSelected: false,
                        }],
                        calculatedScore: 0,
                        multiSelect: false
                    },
                    subQuestions: null
                }]
            },
            {
                sectionName: null,
                question: [{
                    name: "How often do you have fruits ?",
                    options: {
                        option: [{
                            option: "Daily",
                            score: 4,
                            isSelected: false,
                            nextQuestionKey: null
                        }, {
                            option: "Sometimes",
                            score: 2,
                            isSelected: false,
                        }, {
                            option: "often",
                            score: 3,
                            isSelected: false
                        }, {
                            option: "Never",
                            score: 1,
                            isSelected: false
                        }],
                        calculatedScore: 0,
                        multiSelect: false
                    },
                    subQuestions: null
                }]
            },
            {
                sectionName: null,
                question: [{
                    name: "Which of the following diary products do you consume regularly?",
                    options: {
                        option: [{
                            option: "Paneer",
                            score: 1,
                            isSelected: false,
                            nextQuestionKey: null
                        }, {
                            option: "Milk",
                            score: 1,
                            isSelected: false,
                        }, {
                            option: "Others",
                            score: 1,
                            isSelected: false
                        }, {
                            option: "None",
                            score: 1,
                            isSelected: false
                        }],
                        calculatedScore: 0,
                        multiSelect: false
                    },
                    subQuestions: null
                }]
            },
            {
                sectionName: null,
                question: [{
                    name: "Do you consume Dal/pulses in every meal ?",
                    options: {
                        option: [{
                            option: "Never",
                            score: 1,
                            isSelected: false,
                            nextQuestionKey: null
                        }, {
                            option: "Sometimes",
                            score: 2,
                            isSelected: false,
                        }, {
                            option: "Often",
                            score: 3,
                            isSelected: false
                        }, {
                            option: "Daily",
                            score: 4,
                            isSelected: false
                        }],
                        calculatedScore: 0,
                        multiSelect: false
                    },
                    subQuestions: null
                }]
            },
            {
                sectionName: null,
                question: [{
                    name: "Which type of nuts do you consume regularly ?",
                    options: {
                        option: [{
                            option: "Almonds",
                            score: 1,
                            isSelected: false,
                            nextQuestionKey: null
                        }, {
                            option: "Pistachios",
                            score: 1,
                            isSelected: false,
                        }, {
                            option: "Others",
                            score: 1,
                            isSelected: false
                        }, {
                            option: "None",
                            score: 1,
                            isSelected: false
                        }],
                        calculatedScore: 0,
                        multiSelect: false
                    },
                    subQuestions: null
                }]
            },
            {
                sectionName: null,
                question: [{
                    name: "Do you regularly consume any of the following ?",
                    options: {
                        option: [{
                            option: food.walnuts.name,
                            score: 1,
                            isSelected: false,
                            nextQuestionKey: null
                        }, {
                            option: `Others like ${food.flaxSeeds.name,food.sunflowerSeeds.name,food.pumpkinSeeds.name}`,
                            score: 1,
                            isSelected: false,
                        }, {
                            option: food.chiaSeeds.name,
                            score: 1,
                            isSelected: false
                        }, {
                            option: "None",
                            score: 1,
                            isSelected: false
                        }],
                        calculatedScore: 0,
                        multiSelect: false
                    },
                    subQuestions: null
                }]
            },
            // {
            //     sectionName: null,
            //     question: [{
            //         name: "How often do you consume green leafy vegetables ?",
            //         options: {
            //             option: [{
            //                 option: "Never",
            //                 score: 4,
            //                 isSelected: false,
            //             }, {
            //                 option: "Sometimes",
            //                 score: 3,
            //                 isSelected: false,
            //             }, {
            //                 option: "Fairly often",
            //                 score: 2,
            //                 isSelected: false
            //             }, {
            //                 option: "Very often",
            //                 score: 1,
            //                 isSelected: false
            //             }],
            //             calculatedScore: 0,
            //             multiSelect: false
            //         },
            //         subQuestions: null
            //     }]
            // },
            {
                sectionName: null,
                question: [{
                    name: "How many spoons of sugar do you consume everyday ?",
                    options: {
                        option: [{
                            option: "2 spoons",
                            score: 3,
                            isSelected: false,
                            nextQuestionKey: null
                        }, {
                            option: "4 spoons",
                            score: 2,
                            isSelected: false,
                        }, {
                            option: "6 spoons",
                            score: 1,
                            isSelected: false
                        }, {
                            option: "none",
                            score: 4,
                            isSelected: false
                        }],
                        calculatedScore: 0,
                        multiSelect: false
                    },
                    subQuestions: null
                }]
            },
            {
                sectionName: null,
                question: [{
                    name: "Which types of meat do you consume ?",
                    options: {
                        option: [{
                            option: `Pork/${food.beef.name}/lamb`,
                            score: 1,
                            isSelected: false,
                            nextQuestionKey: null
                        }, {
                            option: `${food.chicken.name}/${food.salmon.name}/Rawas`,
                            score: 1,
                            isSelected: false,
                        }, {
                            option: `Prawns/${food.shrimps.name}`,
                            score: 1,
                            isSelected: false
                        }, {
                            option: "None",
                            score: 1,
                            isSelected: false
                        }],
                        calculatedScore: 0,
                        multiSelect: false
                    },
                    subQuestions: null
                }]
            },
            {
                sectionName: null,
                question: [{
                    name: "How often do you consumer eggs ?",
                    options: {
                        option: [{
                            option: "Daily",
                            score: 4,
                            isSelected: false,
                            nextQuestionKey: null
                        }, {
                            option: "Often",
                            score: 3,
                            isSelected: false,
                        }, {
                            option: "Sometimes",
                            score: 2,
                            isSelected: false
                        }, {
                            option: "Never",
                            score: 1,
                            isSelected: false
                        }],
                        calculatedScore: 0,
                        multiSelect: false
                    },
                    subQuestions: null
                }]
            }
        ]
    }
]