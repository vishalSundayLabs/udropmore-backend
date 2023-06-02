import { getLeapCategories } from "./LeapCategories"

export const anatomy = [
    {
        category: getLeapCategories.ANATOMY,
        subCategory: null,
        section: [
            {
                sectionName: null,
                question: [{
                    name: "Height ?",
                    options: {
                        option: [{
                            option: "Never",
                            score: 1,
                            isSelected: false,
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
                        calculatedScore: 0,
                        multiSelect: false
                    },
                    subQuestions: null
                }]
            },
            {
                sectionName: null,
                question: [{
                    name: "Weight ?",
                    options: {
                        option: [{
                            option: "Never",
                            score: 1,
                            isSelected: false,
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
                        calculatedScore: 0,
                        multiSelect: false
                    },
                    subQuestions: null
                }]
            }
        ]
    }
]