const questionnaire = [
    {
        category: "Food Diversity",
        section: [
            {
                sectionName: "Green Leafy Vegetables",
                question: {
                    questionName: "How often do you consume Green Leafy Vegetables ?",
                    options: {
                        option: ["Never", "Once a Week", "2 to 3 times a week", "Everyday"],
                        nutrient: [{ name: "Never", value: 1 }, { name: "Once a week", value: 2 }, { name: "2 to 3 times a week", value: 3 }, { name: "Everyday", value: 4 }],
                        score: 0,
                        multiSelect: false
                    }
                },
                subQuestions: [{
                        subQuestionName: "Which Green Leafy Vegetables do you consume ?",
                        option: {
                            A: [{ name: "Spinach", value: false }, { name: "Basil", value: false }, { name: "Carrots", value: false }, { name: "Brussel Sprouts", value: false }],
                            B: [{ name: "Lettuce", value: false }, { name: "Asparagus", value: false }, { name: "Beet root", value: false }],
                            C: [{ name: "Cabbage-White | Green | Purple", value: false }, { name: "Broccoli", value: false }, { name: "Radish", value: false }],
                            D: [{ name: "Sweet Potatoes", value: false }, { name: "Red Bell Peppers", value: false }, { name: "Potatoes", value: false }]
                        },
                        nutrient: {
                            A: { name: "Vitamin A", value: 1 },
                            B: { name: "Folate", value: 1 },
                            C: { name: "Others", value: 1 },
                            D: { name: "Vitamin B6", value: 1 }
                        },
                        score: 0,
                        multiSelect: true
                    }]
            },
            {
                sectionName: "Fruits",
                question: {
                    questionName: "How often do you consume Green Leafy Vegetables ?",
                    options: {
                        option: ["Never", "Once a Week", "2 to 3 times a week", "Everyday"],
                        nutrient: [{ name: "Never", value: 1 }, { name: "Once a week", value: 2 }, { name: "2 to 3 times a week", value: 3 }, { name: "Everyday", value: 4 }],
                        score: 0,
                        multiSelect: false
                    }
                },
                subQuestions: [{
                        subQuestionName: "Which Green Leafy Vegetables do you consume ?",
                        option: {
                            A: [{ name: "Spinach", value: false }, { name: "Basil", value: false }, { name: "Carrots", value: false }, { name: "Brussel Sprouts", value: false }],
                            B: [{ name: "Lettuce", value: false }, { name: "Asparagus", value: false }, { name: "Beet root", value: false }],
                            C: [{ name: "Cabbage-White | Green | Purple", value: false }, { name: "Broccoli", value: false }, { name: "Radish", value: false }],
                            D: [{ name: "Sweet Potatoes", value: false }, { name: "Red Bell Peppers", value: false }, { name: "Potatoes", value: false }]
                        },
                        nutrient: {
                            A: { name: "Vitamin A", value: 1 },
                            B: { name: "Folate", value: 1 },
                            C: { name: "Others", value: 1 },
                            D: { name: "Vitamin B6", value: 1 }
                        },
                        score: 0,
                        multiSelect: true
                    }]
            },
            {
                sectionName: "Cereals",
                question: {
                    questionName: "How often do you consume Green Leafy Vegetables ?",
                    options: {
                        option: ["Never", "Once a Week", "2 to 3 times a week", "Everyday"],
                        nutrient: [{ name: "Never", value: 1 }, { name: "Once a week", value: 2 }, { name: "2 to 3 times a week", value: 3 }, { name: "Everyday", value: 4 }],
                        score: 0,
                        multiSelect: false
                    }
                },
                subQuestions: [{
                        subQuestionName: "Which Green Leafy Vegetables do you consume ?",
                        option: {
                            A: [{ name: "Spinach", value: false }, { name: "Basil", value: false }, { name: "Carrots", value: false }, { name: "Brussel Sprouts", value: false }],
                            B: [{ name: "Lettuce", value: false }, { name: "Asparagus", value: false }, { name: "Beet root", value: false }],
                            C: [{ name: "Cabbage-White | Green | Purple", value: false }, { name: "Broccoli", value: false }, { name: "Radish", value: false }],
                            D: [{ name: "Sweet Potatoes", value: false }, { name: "Red Bell Peppers", value: false }, { name: "Potatoes", value: false }]
                        },
                        nutrient: {
                            A: { name: "Vitamin A", value: 1 },
                            B: { name: "Folate", value: 1 },
                            C: { name: "Others", value: 1 },
                            D: { name: "Vitamin B6", value: 1 }
                        },
                        score: 0,
                        multiSelect: true
                    }]
            }
        ]
    },
    {
        category: "Micro Nutrient Dense Foods",
        section: [
            {
                sectionName: "Nuts & Seeds",
                question: [{
                        questionName: "How often do you consume Nuts ?",
                        options: {
                            option: ["Never", "Once a Week", "2 to 3 times a week", "Everyday"],
                            nutrient: [{ name: "Never", value: 1 }, { name: "Once a week", value: 2 }, { name: "2 to 3 times a week", value: 3 }, { name: "Everyday", value: 4 }],
                            score: 0,
                            multiSelect: false
                        }
                    }],
                subQuestions: [{
                        subQuestionName: "Which type of nuts do you consume regularly ?",
                        option: {
                            A: [{ name: "Almonds", value: false }, { name: "Basil", value: false }, { name: "Carrots", value: false }, { name: "Brussel Sprouts", value: false }],
                            B: [{ name: "Pistachios", value: false }, { name: "Asparagus", value: false }, { name: "Beet root", value: false }],
                            C: [{ name: "Cabbage-White | Green | Purple", value: false }, { name: "Broccoli", value: false }, { name: "Radish", value: false }],
                            D: [{ name: "Sweet Potatoes", value: false }, { name: "Red Bell Peppers", value: false }, { name: "Potatoes", value: false }]
                        },
                        nutrient: {
                            A: { name: "Vitamin A", value: 1 },
                            B: { name: "Folate", value: 1 },
                            C: { name: "Others", value: 1 },
                            D: { name: "Vitamin B6", value: 1 }
                        },
                        score: 0,
                        multiSelect: true
                    }]
            }
        ]
    },
    {
        category: "Protein",
        section: [
            {
                sectionName: "Diary Products",
                question: {
                    questionName: "How often do you consume Dairy Products ?",
                    options: {
                        option: ["Never", "Once a Week", "2 to 3 times a week", "Everyday"],
                        nutrient: [{ name: "Never", value: 1 }, { name: "Once a week", value: 2 }, { name: "2 to 3 times a week", value: 3 }, { name: "Everyday", value: 4 }],
                        score: 0,
                        multiSelect: false
                    }
                },
                subQuestions: [{
                        subQuestionName: "Which Dairy Products do you consume ?",
                        option: {
                            A: [{ name: "Paneer", value: false }],
                            B: [{ name: "Milk", value: false }],
                            C: [{ name: "Yogurt", value: false }],
                            D: [{ name: "Cheese", value: false }]
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
            },
            {
                sectionName: "Dals & Pulses",
                question: {
                    questionName: "How often do you consume Dal & Pulses ?",
                    options: {
                        option: ["Never", "Once a Week", "2 to 3 times a week", "Everyday"],
                        nutrient: [{ name: "Never", value: 1 }, { name: "Once a week", value: 2 }, { name: "2 to 3 times a week", value: 3 }, { name: "Everyday", value: 4 }],
                        score: 0,
                        multiSelect: false
                    }
                },
                subQuestions: [{
                        subQuestionName: "Which Dals & Pulses do you consume ?",
                        option: {
                            A: [{ name: "Rajma or Kidney Beans", value: false }],
                            B: [{ name: "Chickpeas", value: false }, { name: "Chana", value: false }, { name: "Chole or Kala Chana", value: false }],
                            C: [{ name: "Hare Mung", value: false }, { name: "Toor Dal", value: false }, { name: "Urad Dal", value: false }, { name: "Masoor Dal" }],
                            D: [{ name: "Til", value: false }, { name: "Sesame Seeds", value: false }]
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
            }
        ]
    },
    {
        category: "Protein - Non Veg",
        section: [
            {
                sectionName: "Eggs",
                question: [{
                        questionName: "Do you consume Eggs ?",
                        options: {
                            option: ["Never", "Once a Week", "2 to 3 times a week", "Everyday"],
                            nutrient: [{ name: "Never", value: 1 }, { name: "Once a week", value: 2 }, { name: "2 to 3 times a week", value: 3 }, { name: "Everyday", value: 4 }],
                            score: 0,
                            multiSelect: false
                        }
                    }]
            },
            {
                sectionName: "Meat",
                question: [{
                        questionName: "How often do you consume Meat ?",
                        options: {
                            option: ["Never", "Once a Week", "2 to 3 times a week", "Everyday"],
                            nutrient: [{ name: "Never", value: 1 }, { name: "Once a week", value: 2 }, { name: "2 to 3 times a week", value: 3 }, { name: "Everyday", value: 4 }],
                            score: 0,
                            multiSelect: false
                        }
                    }],
                subQuestions: [{
                        subQuestionName: "Which type of meat do you consume ?",
                        option: {
                            A: [{ name: "Meat-Pork", value: false }, { name: "Beef", value: false }, { name: "Lamp", value: false }],
                            B: [{ name: "Birds-Chicken", value: false }, { name: "Turkey", value: false }],
                            C: [{ name: "Fish-Salmon", value: false }, { name: "Rawas", value: false }, { name: "Bombay Duck", value: false }],
                            D: [{ name: "Prawns", value: false }, { name: "Shrimps", value: false }]
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
            },
            {
                sectionName: "Diary Products",
                question: {
                    questionName: "How often do you consume Dairy Products ?",
                    options: {
                        option: ["Never", "Once a Week", "2 to 3 times a week", "Everyday"],
                        nutrient: [{ name: "Never", value: 1 }, { name: "Once a week", value: 2 }, { name: "2 to 3 times a week", value: 3 }, { name: "Everyday", value: 4 }],
                        score: 0,
                        multiSelect: false
                    }
                },
                subQuestions: [{
                        subQuestionName: "Which Dairy Products do you consume ?",
                        option: {
                            A: [{ name: "Paneer", value: false }],
                            B: [{ name: "Milk", value: false }],
                            C: [{ name: "Yogurt", value: false }],
                            D: [{ name: "Cheese", value: false }]
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
            },
            {
                sectionName: "Dals & Pulses",
                question: {
                    questionName: "How often do you consume Dal & Pulses ?",
                    options: {
                        option: ["Never", "Once a Week", "2 to 3 times a week", "Everyday"],
                        nutrient: [{ name: "Never", value: 1 }, { name: "Once a week", value: 2 }, { name: "2 to 3 times a week", value: 3 }, { name: "Everyday", value: 4 }],
                        score: 0,
                        multiSelect: false
                    }
                },
                subQuestions: [{
                        subQuestionName: "Which Dals & Pulses do you consume ?",
                        option: {
                            A: [{ name: "Rajma or Kidney Beans", value: false }],
                            B: [{ name: "Chickpeas", value: false }, { name: "Chana", value: false }, { name: "Chole or Kala Chana", value: false }],
                            C: [{ name: "Hare Mung", value: false }, { name: "Toor Dal", value: false }, { name: "Urad Dal", value: false }, { name: "Masoor Dal" }],
                            D: [{ name: "Til", value: false }, { name: "Sesame Seeds", value: false }]
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
            }
        ]
    },
    {
        category: "DHA",
        section: [
            {
                sectionName: null,
                question: [
                    {
                        questionName: "How often do you consume Walnuts ?",
                        options: {
                            option: ["Never", "Once a Week", "2 to 3 times a week", "Everyday"],
                            nutrient: [{ name: "Never", value: 1 }, { name: "Once a week", value: 2 }, { name: "2 to 3 times a week", value: 3 }, { name: "Everyday", value: 4 }],
                            score: 0,
                            multiSelect: false
                        }
                    },
                    {
                        questionName: "How often do you consume Chai Seeds ?",
                        options: {
                            option: ["Never", "Once a Week", "2 to 3 times a week", "Everyday"],
                            nutrient: [{ name: "Never", value: 1 }, { name: "Once a week", value: 2 }, { name: "2 to 3 times a week", value: 3 }, { name: "Everyday", value: 4 }],
                            score: 0,
                            multiSelect: false
                        }
                    }
                ]
            }
        ]
    },
    {
        category: "DHA - Non Veg",
        section: [
            {
                sectionName: null,
                question: [
                    {
                        questionName: "How often do you consume Fish - Salmon Rawas ?",
                        options: {
                            option: ["Never", "Once a Week", "2 to 3 times a week", "Everyday"],
                            nutrient: [{ name: "Never", value: 1 }, { name: "Once a week", value: 2 }, { name: "2 to 3 times a week", value: 3 }, { name: "Everyday", value: 4 }],
                            score: 0,
                            multiSelect: false
                        }
                    },
                    {
                        questionName: "How often do you consume Prawns / Shrimps ?",
                        options: {
                            option: ["Never", "Once a Week", "2 to 3 times a week", "Everyday"],
                            nutrient: [{ name: "Never", value: 1 }, { name: "Once a week", value: 2 }, { name: "2 to 3 times a week", value: 3 }, { name: "Everyday", value: 4 }],
                            score: 0,
                            multiSelect: false
                        }
                    },
                    {
                        questionName: "How often do you consume Walnuts ?",
                        options: {
                            option: ["Never", "Once a Week", "2 to 3 times a week", "Everyday"],
                            nutrient: [{ name: "Never", value: 1 }, { name: "Once a week", value: 2 }, { name: "2 to 3 times a week", value: 3 }, { name: "Everyday", value: 4 }],
                            score: 0,
                            multiSelect: false
                        }
                    },
                    {
                        questionName: "How often do you consume Chai Seeds ?",
                        options: {
                            option: ["Never", "Once a Week", "2 to 3 times a week", "Everyday"],
                            nutrient: [{ name: "Never", value: 1 }, { name: "Once a week", value: 2 }, { name: "2 to 3 times a week", value: 3 }, { name: "Everyday", value: 4 }],
                            score: 0,
                            multiSelect: false
                        }
                    }
                ]
            }
        ]
    },
    {
        category: "Good Fats",
        section: [
            {
                sectionName: null,
                question: [
                    {
                        questionName: "How often do you consume Fish - Paneer ?",
                        options: {
                            option: ["Never", "Once a Week", "2 to 3 times a week", "Everyday"],
                            nutrient: [{ name: "Never", value: 1 }, { name: "Once a week", value: 2 }, { name: "2 to 3 times a week", value: 3 }, { name: "Everyday", value: 4 }],
                            score: 0,
                            multiSelect: false
                        }
                    },
                    {
                        questionName: "How often do you consume Til / Sesame Seeds / Tahini ?",
                        options: {
                            option: ["Never", "Once a Week", "2 to 3 times a week", "Everyday"],
                            nutrient: [{ name: "Never", value: 1 }, { name: "Once a week", value: 2 }, { name: "2 to 3 times a week", value: 3 }, { name: "Everyday", value: 4 }],
                            score: 0,
                            multiSelect: false
                        }
                    },
                    {
                        questionName: "How often do you consume Edamame ?",
                        options: {
                            option: ["Never", "Once a Week", "2 to 3 times a week", "Everyday"],
                            nutrient: [{ name: "Never", value: 1 }, { name: "Once a week", value: 2 }, { name: "2 to 3 times a week", value: 3 }, { name: "Everyday", value: 4 }],
                            score: 0,
                            multiSelect: false
                        }
                    },
                    {
                        questionName: "How often do you consume Milk ?",
                        options: {
                            option: ["Never", "Once a Week", "2 to 3 times a week", "Everyday"],
                            nutrient: [{ name: "Never", value: 1 }, { name: "Once a week", value: 2 }, { name: "2 to 3 times a week", value: 3 }, { name: "Everyday", value: 4 }],
                            score: 0,
                            multiSelect: false
                        }
                    },
                    {
                        questionName: "How often do you consume Yogurt ?",
                        options: {
                            option: ["Never", "Once a Week", "2 to 3 times a week", "Everyday"],
                            nutrient: [{ name: "Never", value: 1 }, { name: "Once a week", value: 2 }, { name: "2 to 3 times a week", value: 3 }, { name: "Everyday", value: 4 }],
                            score: 0,
                            multiSelect: false
                        }
                    }
                ]
            },
            {
                sectionName: "Non-Veg",
                question: [
                    {
                        questionName: "How often do you consume Salmon ?",
                        options: {
                            option: ["Never", "Once a Week", "2 to 3 times a week", "Everyday"],
                            nutrient: [{ name: "Never", value: 1 }, { name: "Once a week", value: 2 }, { name: "2 to 3 times a week", value: 3 }, { name: "Everyday", value: 4 }],
                            score: 0,
                            multiSelect: false
                        }
                    },
                    {
                        questionName: "How often do you consume Eggs ?",
                        options: {
                            option: ["Never", "Once a Week", "2 to 3 times a week", "Everyday"],
                            nutrient: [{ name: "Never", value: 1 }, { name: "Once a week", value: 2 }, { name: "2 to 3 times a week", value: 3 }, { name: "Everyday", value: 4 }],
                            score: 0,
                            multiSelect: false
                        }
                    }
                ]
            }
        ]
    },
    {
        category: "High Fibre Foods",
        section: [
            {
                sectionName: null,
                question: [
                    {
                        questionName: "How often do you consume Fish - Lentils ?",
                        options: {
                            option: ["Never", "Once a Week", "2 to 3 times a week", "Everyday"],
                            nutrient: [{ name: "Never", value: 1 }, { name: "Once a week", value: 2 }, { name: "2 to 3 times a week", value: 3 }, { name: "Everyday", value: 4 }],
                            score: 0,
                            multiSelect: false
                        }
                    },
                    {
                        questionName: "How often do you consume Chickpeas ?",
                        options: {
                            option: ["Never", "Once a Week", "2 to 3 times a week", "Everyday"],
                            nutrient: [{ name: "Never", value: 1 }, { name: "Once a week", value: 2 }, { name: "2 to 3 times a week", value: 3 }, { name: "Everyday", value: 4 }],
                            score: 0,
                            multiSelect: false
                        }
                    },
                    {
                        questionName: "How often do you consume Green Peas ?",
                        options: {
                            option: ["Never", "Once a Week", "2 to 3 times a week", "Everyday"],
                            nutrient: [{ name: "Never", value: 1 }, { name: "Once a week", value: 2 }, { name: "2 to 3 times a week", value: 3 }, { name: "Everyday", value: 4 }],
                            score: 0,
                            multiSelect: false
                        }
                    },
                    {
                        questionName: "How often do you consume Flax Seeds ?",
                        options: {
                            option: ["Never", "Once a Week", "2 to 3 times a week", "Everyday"],
                            nutrient: [{ name: "Never", value: 1 }, { name: "Once a week", value: 2 }, { name: "2 to 3 times a week", value: 3 }, { name: "Everyday", value: 4 }],
                            score: 0,
                            multiSelect: false
                        }
                    },
                    {
                        questionName: "How often do you consume Chai Seeds ?",
                        options: {
                            option: ["Never", "Once a Week", "2 to 3 times a week", "Everyday"],
                            nutrient: [{ name: "Never", value: 1 }, { name: "Once a week", value: 2 }, { name: "2 to 3 times a week", value: 3 }, { name: "Everyday", value: 4 }],
                            score: 0,
                            multiSelect: false
                        }
                    },
                    //healthy carbs veg average score
                    {
                        questionName: "How often do you consume Salmon ?",
                        options: {
                            option: ["Never", "Once a Week", "2 to 3 times a week", "Everyday"],
                            nutrient: [{ name: "Never", value: 1 }, { name: "Once a week", value: 2 }, { name: "2 to 3 times a week", value: 3 }, { name: "Everyday", value: 4 }],
                            score: 0,
                            multiSelect: false
                        }
                    },
                    {
                        questionName: "How often do you consume Eggs ?",
                        options: {
                            option: ["Never", "Once a Week", "2 to 3 times a week", "Everyday"],
                            nutrient: [{ name: "Never", value: 1 }, { name: "Once a week", value: 2 }, { name: "2 to 3 times a week", value: 3 }, { name: "Everyday", value: 4 }],
                            score: 0,
                            multiSelect: false
                        }
                    }
                ]
            }
        ]
    },
    {
        category: "Healthy Carbs",
        section: [
            {
                sectionName: null,
                question: [
                    {
                        questionName: "How often do you consume Fish - Sweet Potatoes ?",
                        options: {
                            option: ["Never", "Once a Week", "2 to 3 times a week", "Everyday"],
                            nutrient: [{ name: "Never", value: 1 }, { name: "Once a week", value: 2 }, { name: "2 to 3 times a week", value: 3 }, { name: "Everyday", value: 4 }],
                            score: 0,
                            multiSelect: false
                        }
                    },
                    {
                        questionName: "How often do you consume Brown Rice ?",
                        options: {
                            option: ["Never", "Once a Week", "2 to 3 times a week", "Everyday"],
                            nutrient: [{ name: "Never", value: 1 }, { name: "Once a week", value: 2 }, { name: "2 to 3 times a week", value: 3 }, { name: "Everyday", value: 4 }],
                            score: 0,
                            multiSelect: false
                        }
                    },
                    {
                        questionName: "How often do you consume Millets ?",
                        options: {
                            option: ["Never", "Once a Week", "2 to 3 times a week", "Everyday"],
                            nutrient: [{ name: "Never", value: 1 }, { name: "Once a week", value: 2 }, { name: "2 to 3 times a week", value: 3 }, { name: "Everyday", value: 4 }],
                            score: 0,
                            multiSelect: false
                        }
                    },
                    {
                        questionName: "How often do you consume Quinao ?",
                        options: {
                            option: ["Never", "Once a Week", "2 to 3 times a week", "Everyday"],
                            nutrient: [{ name: "Never", value: 1 }, { name: "Once a week", value: 2 }, { name: "2 to 3 times a week", value: 3 }, { name: "Everyday", value: 4 }],
                            score: 0,
                            multiSelect: false
                        }
                    },
                    //healthy carbs veg average score
                    {
                        questionName: "How often do you consume Salmon ?",
                        options: {
                            option: ["Never", "Once a Week", "2 to 3 times a week", "Everyday"],
                            nutrient: [{ name: "Never", value: 1 }, { name: "Once a week", value: 2 }, { name: "2 to 3 times a week", value: 3 }, { name: "Everyday", value: 4 }],
                            score: 0,
                            multiSelect: false
                        }
                    }
                ],
            }
        ]
    }
];
