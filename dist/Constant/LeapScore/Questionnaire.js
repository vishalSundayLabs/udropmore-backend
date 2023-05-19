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
            }
        ]
    }
];
