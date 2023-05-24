"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.anatomy = void 0;
const LeapCategories_1 = require("./LeapCategories");
exports.anatomy = [
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
    }
];
