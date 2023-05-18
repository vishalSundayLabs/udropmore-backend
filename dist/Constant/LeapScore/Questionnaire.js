const questionnaire = [
    {
        category: "Food Diversity",
        section: [
            {
                sectionName: "Green Leafy Vegetables",
                questions: [{
                        questionName: "How often do you consume Green Leafy Vegetables ?",
                        options: {
                            option: ["Never", "Once a Week", "2 to 3 times a week", "Everyday"],
                            nutrient: [{ name: "Never", value: 1 }, { name: "Once a week", value: 2 }, { name: "2 to 3 times a week", value: 3 }, { name: "Everyday", value: 4 }],
                            score: 0,
                            multiSelect: false
                        }
                    }]
            }
        ]
    }
];
