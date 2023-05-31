"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.physicalFitness = void 0;
const LeapCategories_1 = require("./LeapCategories");
exports.physicalFitness = [
    {
        category: LeapCategories_1.getLeapCategories.PHYSICAL,
        subCategory: null,
        section: [
            {
                sectionName: null,
                question: [{
                        name: "Does your work involve vigorous-intensity activity that causes large increases in breathing or heart rate like [carrying or lifting heavy loads, digging/ grinding etc] for at least 10 minutes continuously?",
                        options: {
                            option: [{
                                    option: "Yes",
                                    score: 2,
                                    isSelected: false
                                }, {
                                    option: "No",
                                    score: 2,
                                    isSelected: false,
                                }],
                            cacalculatedScore: 0,
                            multiSelect: false
                        },
                        subQuestions: [{
                                name: "In a typical week, how many days do you do vigourous activities at work ?",
                                option: {
                                    A: { options: [{ name: "Monday", isSelected: false }], score: 1 },
                                    B: { options: [{ name: "Tuesday", isSelected: false }], score: 1 },
                                    C: { options: [{ name: "Wednesday", isSelected: false }], score: 1 },
                                    D: { options: [{ name: "Thursday", isSelected: false }], score: 1 },
                                    E: { options: [{ name: "Friday", isSelected: false }], score: 1 },
                                    F: { options: [{ name: "Saturday", isSelected: false }], score: 1 },
                                    G: { options: [{ name: "Sunday", isSelected: false }], score: 1 }
                                },
                                calculatedScore: 0,
                                multiSelect: true
                            },
                            {
                                name: "How much time do you spend doing vigorous activities at work in a typical day ?",
                                option: {
                                    A: { options: [{ name: "Hours", type: "inputBox", value: null }], score: 2 },
                                    B: { options: [{ name: "Minutes", type: "inputBox", value: null }], score: 2 }
                                },
                                calculatedScore: 0,
                                multiSelect: false
                            }
                        ]
                    }]
            },
            {
                sectionName: null,
                question: {
                    name: "Does your work involve moderate-intensity activity, that causes small increases in breathing or heart rate such as carrying light loads for at least 10 minutes continuously ?",
                    options: {
                        option: [{
                                option: "Yes",
                                score: 2,
                                isSelected: false
                            }, {
                                option: "No",
                                score: 2,
                                isSelected: false
                            }],
                        calculatedScore: 0,
                        multiSelect: false
                    },
                    subQuestions: [
                        {
                            name: "In a typical week, on how many days do you do moderateintensity activities as part of your work ?",
                            option: {
                                A: { options: [{ name: "Monday", isSelected: false }], score: 1 },
                                B: { options: [{ name: "Tuesday", isSelected: false }], score: 1 },
                                C: { options: [{ name: "Wednesday", isSelected: false }], score: 1 },
                                D: { options: [{ name: "Thursday", isSelected: false }], score: 1 },
                                E: { options: [{ name: "Friday", isSelected: false }], score: 1 },
                                F: { options: [{ name: "Saturday", isSelected: false }], score: 1 },
                                G: { options: [{ name: "Sunday", isSelected: false }], score: 1 }
                            },
                            calculatedScore: 0,
                            multiSelect: true
                        },
                        {
                            name: "How much time do you spend doing moderate-intensity activities at work on a typical day ?",
                            option: {
                                A: { options: [{ name: "Hours", type: "inputBox", value: null }], score: 2 },
                                B: { options: [{ name: "Minutes", type: "inputBox", value: null }], score: 2 }
                            },
                            calculatedScore: 0,
                            multiSelect: false
                        }
                    ]
                }
            },
            {
                sectionName: null,
                question: [{
                        name: "Do you walk or use a cycle for at least 10 mins continuously to and from places ?",
                        options: {
                            option: [{
                                    option: "Yes",
                                    score: 2,
                                    isSelected: false
                                }, {
                                    option: "No",
                                    score: 2,
                                    isSelected: false
                                }],
                            calculatedScore: 0,
                            multiSelect: false
                        },
                        subQuestions: [
                            {
                                name: "In a typical week, on how many days do you walk or cycle to and from places ?",
                                option: {
                                    A: { options: [{ name: "Monday", isSelected: false }], score: 1 },
                                    B: { options: [{ name: "Tuesday", isSelected: false }], score: 1 },
                                    C: { options: [{ name: "Wednesday", isSelected: false }], score: 1 },
                                    D: { options: [{ name: "Thursday", isSelected: false }], score: 1 },
                                    E: { options: [{ name: "Friday", isSelected: false }], score: 1 },
                                    F: { options: [{ name: "Saturday", isSelected: false }], score: 1 },
                                    G: { options: [{ name: "Sunday", isSelected: false }], score: 1 }
                                },
                                calculatedScore: 0,
                                multiSelect: true
                            },
                            {
                                name: "How much time do you spend walking or cycling to and from places on a typical day ?",
                                option: {
                                    A: { options: [{ name: "Hours", type: "inputBox", value: null }], score: 2 },
                                    B: { options: [{ name: "Minutes", type: "inputBox", value: null }], score: 2 }
                                },
                                calculatedScore: 0,
                                multiSelect: false
                            }
                        ]
                    }]
            },
            {
                sectionName: null,
                question: [{
                        name: "Do you do any vigorous-intensity sports, fitness or recreational (leisure) activities that cause large increases in breathing or heart rate like [running or football] for at least 10 minutes continuously ?",
                        options: {
                            option: [{
                                    option: "Yes",
                                    score: 2,
                                    isSelected: false
                                }, {
                                    option: "No",
                                    score: 2,
                                    isSelected: false
                                }],
                            calculatedScore: 0,
                            multiSelect: false
                        },
                        subQuestions: [
                            {
                                name: "In a typical week, on how many days do you do vigorous intensity sports, fitness or recreational (leisure) activities ?",
                                option: {
                                    A: { options: [{ name: "Monday", isSelected: false }], score: 1 },
                                    B: { options: [{ name: "Tuesday", isSelected: false }], score: 1 },
                                    C: { options: [{ name: "Wednesday", isSelected: false }], score: 1 },
                                    D: { options: [{ name: "Thursday", isSelected: false }], score: 1 },
                                    E: { options: [{ name: "Friday", isSelected: false }], score: 1 },
                                    F: { options: [{ name: "Saturday", isSelected: false }], score: 1 },
                                    G: { options: [{ name: "Sunday", isSelected: false }], score: 1 }
                                },
                                calculatedScore: 0,
                                multiSelect: true
                            },
                            {
                                name: "How much time do you spend doing vigorous-intensity sports, fitness or recreational activities on a typical day ?",
                                option: {
                                    A: { options: [{ name: "Hours", type: "inputBox", value: null }], score: 2 },
                                    B: { options: [{ name: "Minutes", type: "inputBox", value: null }], score: 2 }
                                },
                                calculatedScore: 0,
                                multiSelect: false
                            }
                        ]
                    }]
            },
            {
                sectionName: null,
                question: [{
                        name: "Do you do any moderate-intensity sports, fitness or recreational (leisure) activities that cause a small increase in breathing or heart rate such as brisk walking, [cycling, swimming, yoga] for at least 10 minutes continuously ?",
                        options: {
                            option: [{
                                    option: "Yes",
                                    score: 2,
                                    isSelected: false
                                }, {
                                    option: "No",
                                    score: 2,
                                    isSelected: false
                                }],
                            calculatedScore: 0,
                            multiSelect: false
                        },
                        subQuestions: [
                            {
                                name: "In a typical week, on how many days do you do moderate intensity sports, fitness or recreational (leisure) activities ?",
                                option: {
                                    A: { options: [{ name: "Monday", isSelected: false }], score: 1 },
                                    B: { options: [{ name: "Tuesday", isSelected: false }], score: 1 },
                                    C: { options: [{ name: "Wednesday", isSelected: false }], score: 1 },
                                    D: { options: [{ name: "Thursday", isSelected: false }], score: 1 },
                                    E: { options: [{ name: "Friday", isSelected: false }], score: 1 },
                                    F: { options: [{ name: "Saturday", isSelected: false }], score: 1 },
                                    G: { options: [{ name: "Sunday", isSelected: false }], score: 1 }
                                },
                                calculatedScore: 0,
                                multiSelect: true
                            },
                            {
                                name: "How much time do you spend doing moderate-intensity sports, fitness or recreational (leisure) activities on a typical day ?",
                                option: {
                                    A: { options: [{ name: "Hours", type: "inputBox", value: null }], score: 2 },
                                    B: { options: [{ name: "Minutes", type: "inputBox", value: null }], score: 2 }
                                },
                                calculatedScore: 0,
                                multiSelect: false
                            }
                        ]
                    }]
            },
            {
                sectionName: null,
                question: [{
                        name: "How much time do you usually spend sitting or reclining on a typical day ?",
                        options: {
                            option: [{
                                    option: "Hours",
                                    value: null,
                                    type: "inputBox",
                                    score: 2
                                }, {
                                    option: "Minutes",
                                    value: null,
                                    type: "inputBox",
                                    score: 2
                                }],
                            calculatedScore: 0,
                            multiSelect: false
                        },
                        subQuestions: null
                    }]
            }
        ]
    }
];
