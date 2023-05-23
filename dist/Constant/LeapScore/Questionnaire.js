"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LeapCategories_1 = require("./LeapCategories");
const questionnaire = [
    {
        category: LeapCategories_1.getCategories.LIFESTYLE,
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
                            cacalculatedScore: 0,
                            multiSelect: false
                        },
                        subQuestions: [{
                                // key: 1394848,
                                name: "Which Green Leafy Vegetables do you consume ?",
                                option: {
                                    A: { options: [{ name: "Spinach", isSelected: false }, { name: "Basil", isSelected: false }, { name: "Carrots", isSelected: false }, { name: "Brussel Sprouts", isSelected: false }], score: 1 },
                                    B: { options: [{ name: "Lettuce", isSelected: false }, { name: "Asparagus", isSelected: false }, { name: "Beet root", isSelected: false }], score: 1 },
                                    C: { options: [{ name: "Cabbage-White | Green | Purple", isSelected: false }, { name: "Broccoli", isSelected: false }, { name: "Radish", isSelected: false }], score: 1 },
                                    D: { options: [{ name: "Sweet Potatoes", isSelected: false }, { name: "Red Bell Peppers", isSelected: false }, { name: "Potatoes", isSelected: false }], score: 1 }
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
                        subname: "Which fruit do you consume ?",
                        option: {
                            A: { options: [{ name: "Fruits like Tomatoes / Amla / Oranges / Lemons", isSelected: false }, { name: "Basil", isSelected: false }, { name: "Carrots", isSelected: false }, { name: "Brussel Sprouts", isSelected: false }], score: 1 },
                            B: { options: [{ name: "Seasonal Fruits - Grapes", isSelected: false }, { name: "Mangoes", isSelected: false }, { name: "Strawberries, Pomegranate, Figs", isSelected: false }], score: 1 },
                            C: { options: [{ name: "Berries - Banana, Watermelon, BlueBerries", isSelected: false }], score: 1 },
                            D: { options: [{ name: "Musk Melons", isSelected: false }, { name: "Honeydew", isSelected: false }, { name: "Papaya", isSelected: false }], score: 1 }
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
                                subname: "Which of the following you consume reqularly ?",
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
        category: LeapCategories_1.getCategories.LIFESTYLE,
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
                                subname: "Which type of nuts do you consume regularly ?",
                                option: {
                                    A: { options: [{ name: "Almonds", isSelected: false }], score: 1 },
                                    B: { options: [{ name: "Pistachios", isSelected: false }], score: 1 },
                                    C: { options: [{ name: "Raisins", isSelected: false }], score: 1 },
                                    D: { options: [{ name: "Cashews", isSelected: false }], score: 1 },
                                    E: { options: [{ name: "Walnuts", isSelected: false }], score: 1 },
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
                                subname: "Which type of Seeds do you consume regularly ?",
                                option: {
                                    A: [{ name: "Flax Seeds", isSelected: false }],
                                    B: [{ name: "Sunflower Seeds", isSelected: false }],
                                    C: [{ name: "chia Seeds", isSelected: false }],
                                    D: [{ name: "Pumpkin Seeds", isSelected: false }]
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
        category: LeapCategories_1.getCategories.LIFESTYLE,
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
                                subname: "Which Dairy Products do you consume ?",
                                option: {
                                    A: [{ name: "Paneer", isSelected: false }],
                                    B: [{ name: "Milk", isSelected: false }],
                                    C: [{ name: "Yogurt", isSelected: false }],
                                    D: [{ name: "Cheese", isSelected: false }]
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
                                subname: "Which Dals & Pulses do you consume ?",
                                option: {
                                    A: [{ name: "Rajma or Kidney Beans", isSelected: false }],
                                    B: [{ name: "Chickpeas", isSelected: false }, { name: "Chana", isSelected: false }, { name: "Chole or Kala Chana", isSelected: false }],
                                    C: [{ name: "Hare Mung", isSelected: false }, { name: "Toor Dal", isSelected: false }, { name: "Urad Dal", isSelected: false }, { name: "Masoor Dal" }],
                                    D: [{ name: "Til", isSelected: false }, { name: "Sesame Seeds", isSelected: false }]
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
        category: LeapCategories_1.getCategories.LIFESTYLE,
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
                                subname: "Which type of meat do you consume ?",
                                option: {
                                    A: [{ name: "Meat-Pork", isSelected: false }, { name: "Beef", isSelected: false }, { name: "Lamp", isSelected: false }],
                                    B: [{ name: "Birds-Chicken", isSelected: false }, { name: "Turkey", isSelected: false }],
                                    C: [{ name: "Fish-Salmon", isSelected: false }, { name: "Rawas", isSelected: false }, { name: "Bombay Duck", isSelected: false }],
                                    D: [{ name: "Prawns", isSelected: false }, { name: "Shrimps", isSelected: false }]
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
                                subname: "Which Dairy Products do you consume ?",
                                option: {
                                    A: [{ name: "Paneer", isSelected: false }],
                                    B: [{ name: "Milk", isSelected: false }],
                                    C: [{ name: "Yogurt", isSelected: false }],
                                    D: [{ name: "Cheese", isSelected: false }]
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
                                subname: "Which Dals & Pulses do you consume ?",
                                option: {
                                    A: [{ name: "Rajma or Kidney Beans", isSelected: false }],
                                    B: [{ name: "Chickpeas", isSelected: false }, { name: "Chana", isSelected: false }, { name: "Chole or Kala Chana", isSelected: false }],
                                    C: [{ name: "Hare Mung", isSelected: false }, { name: "Toor Dal", isSelected: false }, { name: "Urad Dal", isSelected: false }, { name: "Masoor Dal" }],
                                    D: [{ name: "Til", isSelected: false }, { name: "Sesame Seeds", isSelected: false }]
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
        category: LeapCategories_1.getCategories.LIFESTYLE,
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
        category: LeapCategories_1.getCategories.LIFESTYLE,
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
        category: LeapCategories_1.getCategories.LIFESTYLE,
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
        category: LeapCategories_1.getCategories.LIFESTYLE,
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
                        name: "How often do you consume Chickpeas ?",
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
        category: LeapCategories_1.getCategories.LIFESTYLE,
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
    }
];
