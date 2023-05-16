"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resp = void 0;
exports.resp = {
    "result": {
        "items": [
            {
                "userId": "2b74d088-6aab-4247-bec8-4bd477510567",
                "id": "292a6138-482e-4433-bfbc-e16490b559cb",
                "type": "LEAP_SCORE",
                "details": {
                    "answers": {
                        "block5": "1",
                        "block6": "2",
                        "block2": "2",
                        "q1": "2",
                        "q2": "3",
                        "q3": ["1", "2"],
                        "q5": "2",
                        "q6": "4",
                        "q7": [5, 3],
                        "q8": 60,
                        "q9": ["1", "3", "5"],
                        "q11": ["1", "3"],
                        "q12": [0, 10]
                    },
                    "questionnaireDetails": {
                        "testId": "6961e41a-c3a1-474a-9e40-2ed2b018d445",
                        "sections": [
                            {
                                "id": "cde",
                                "category": "LIFESTYLE",
                                "name": "LIFESTYLE",
                                "lowerThreshold": 0,
                                "upperThreshold": 4,
                                "blocks": [
                                    "block1",
                                    "block2"
                                ]
                            },
                            {
                                "id": "rfgs",
                                "category": "EMOTION",
                                "name": "EMOTION",
                                "lowerThreshold": 0,
                                "upperThreshold": 4,
                                "blocks": [
                                    "block3"
                                ]
                            },
                            {
                                "id": "hfth",
                                "category": "ANATOMY",
                                "name": "ANATOMY",
                                "lowerThreshold": 0,
                                "upperThreshold": 4,
                                "blocks": [
                                    "block4"
                                ]
                            },
                            {
                                "id": "bdfgdg",
                                "category": "PHYSICAL_FITNESS",
                                "name": "PHYSICAL FITNESS",
                                "lowerThreshold": 0,
                                "upperThreshold": 4,
                                "blocks": [
                                    "block5",
                                    "block6"
                                ]
                            }
                        ],
                        "blocks": {
                            "block1": {
                                "blockType": "REQUIRED",
                                "questions": [
                                    "q1",
                                    "q2",
                                ]
                            },
                            "block2": {
                                "blockType": "CONDITIONAL",
                                "question": "What is your diet type?",
                                "options": [
                                    {
                                        "key": "1",
                                        "label": "Vegeterian",
                                        "questions": [
                                            "q3"
                                        ]
                                    },
                                    {
                                        "key": "2",
                                        "label": "Non-Vegeterian",
                                        "questions": [
                                            "q3",
                                            "q4"
                                        ]
                                    }
                                ]
                            },
                            "block3": {
                                "blockType": "REQUIRED",
                                "questions": [
                                    "q5",
                                    "q6"
                                ]
                            },
                            "block4": {
                                "blockType": "REQUIRED",
                                "questions": [
                                    "q7",
                                    "q8"
                                ]
                            },
                            "block5": {
                                "blockType": "CONDITIONAL",
                                "question": "Does your work involve vigorous-intensity activity that causes large increases in breathing or heart rate like [carrying or lifting heavy loads, digging/ grinding etc] for at least 10 minutes continuously ?",
                                "options": [
                                    {
                                        "key": "1",
                                        "label": "Yes",
                                        "questions": [
                                            "q9",
                                            "q10",
                                            "q5"
                                        ]
                                    },
                                    {
                                        "key": "2",
                                        "label": "No",
                                        "questions": []
                                    }
                                ]
                            },
                            "block6": {
                                "blockType": "CONDITIONAL",
                                "question": "Does your work involve moderate-intensity activity, that causes small increases in breathing or heart rate such as carrying light loads for at least 10 minutes continuously ?",
                                "options": [
                                    {
                                        "key": "1",
                                        "label": "Yes",
                                        "questions": [
                                            "q11",
                                            "q12",
                                            "q1"
                                        ]
                                    },
                                    {
                                        "key": "2",
                                        "label": "No",
                                        "questions": []
                                    }
                                ]
                            }
                        },
                        "questions": {
                            "q1": {
                                "id": "q1",
                                "questionType": "MCQ",
                                "question": "How much sleep do you get in a night?",
                                "options": [
                                    {
                                        "key": "1",
                                        "label": "< 6 hours"
                                    },
                                    {
                                        "key": "2",
                                        "label": "7 - 8 hours"
                                    },
                                    {
                                        "key": "3",
                                        "label": "9 hours"
                                    },
                                    {
                                        "key": "4",
                                        "label": "> 10 hours"
                                    }
                                ]
                            },
                            "q2": {
                                "id": "q2",
                                "questionType": "MCQ",
                                "question": "How much water do you drink in a day?",
                                "options": [
                                    {
                                        "key": "1",
                                        "label": "< 4 glasses per day"
                                    },
                                    {
                                        "key": "2",
                                        "label": "5 - 6 glasses"
                                    },
                                    {
                                        "key": "3",
                                        "label": "7 glasses"
                                    },
                                    {
                                        "key": "4",
                                        "label": "> 8 glasses"
                                    }
                                ]
                            },
                            "q3": {
                                "id": "q3",
                                "questionType": "MULTISELECT",
                                "question": "What dairy products do you consume regularly?",
                                "options": [
                                    {
                                        "key": "1",
                                        "label": "Paneer"
                                    },
                                    {
                                        "key": "2",
                                        "label": "Milk"
                                    },
                                    {
                                        "key": "3",
                                        "label": "Curd/Yogurt"
                                    },
                                    {
                                        "key": "4",
                                        "label": "Ghee/Butter"
                                    }
                                ]
                            },
                            "q4": {
                                "id": "q4",
                                "questionType": "MCQ",
                                "question": "How often do you consume eggs ?",
                                "options": [
                                    {
                                        "key": "1",
                                        "label": "Daily"
                                    },
                                    {
                                        "key": "2",
                                        "label": "Often"
                                    },
                                    {
                                        "key": "3",
                                        "label": "Sometimes"
                                    },
                                    {
                                        "key": "4",
                                        "label": "Never"
                                    }
                                ]
                            },
                            "q5": {
                                "id": "q5",
                                "questionType": "MCQ",
                                "question": "In the last one month how often have you been upset because of something that happened unexpectedly ?",
                                "options": [
                                    {
                                        "key": "1",
                                        "label": "Never"
                                    },
                                    {
                                        "key": "2",
                                        "label": "Sometimes"
                                    },
                                    {
                                        "key": "3",
                                        "label": "Fairly often"
                                    },
                                    {
                                        "key": "4",
                                        "label": "Very often"
                                    }
                                ]
                            },
                            "q6": {
                                "id": "q6",
                                "questionType": "MCQ",
                                "question": "In the last month, how often have you felt that you have not been able to control the important things of your life ?",
                                "options": [
                                    {
                                        "key": "1",
                                        "label": "Never"
                                    },
                                    {
                                        "key": "2",
                                        "label": "Sometimes"
                                    },
                                    {
                                        "key": "3",
                                        "label": "Fairly often"
                                    },
                                    {
                                        "key": "4",
                                        "label": "Very often"
                                    }
                                ]
                            },
                            "q7": {
                                "id": "q7",
                                "questionType": "INPUT",
                                "question": "Height ?",
                                "inputs": [
                                    {
                                        "type": "INTEGER",
                                        "regex": "",
                                        "label": "feet"
                                    },
                                    {
                                        "type": "INTEGER",
                                        "regex": "",
                                        "label": "inches"
                                    }
                                ]
                            },
                            "q8": {
                                "id": "q8",
                                "questionType": "INPUT",
                                "question": "Weight ?",
                                "inputs": [
                                    {
                                        "type": "DECIMAL",
                                        "regex": "",
                                        "label": "Kgs"
                                    }
                                ]
                            },
                            "q9": {
                                "id": "q9",
                                "questionType": "MULTISELECT",
                                "question": "In a typical week, how many days do you do vigourous activities at work?",
                                "options": [
                                    {
                                        "key": "1",
                                        "label": "Mon"
                                    },
                                    {
                                        "key": "2",
                                        "label": "Tue"
                                    },
                                    {
                                        "key": "3",
                                        "label": "Wed"
                                    },
                                    {
                                        "key": "4",
                                        "label": "Thurs"
                                    },
                                    {
                                        "key": "4",
                                        "label": "Fri"
                                    },
                                    {
                                        "key": "4",
                                        "label": "Sat"
                                    },
                                    {
                                        "key": "4",
                                        "label": "Sun"
                                    }
                                ]
                            },
                            "q10": {
                                "id": "q10",
                                "questionType": "INPUT",
                                "question": "How much time do you spend doing vigorous activities at work in a typical day?",
                                "inputs": [
                                    {
                                        "type": "INTEGER",
                                        "regex": "",
                                        "label": "Hours"
                                    },
                                    {
                                        "type": "INTEGER",
                                        "regex": "",
                                        "label": "Minutes"
                                    }
                                ]
                            },
                            "q11": {
                                "id": "q11",
                                "questionType": "MULTISELECT",
                                "question": "In a typical week, how many days do you do vigourous activities at work?",
                                "options": [
                                    {
                                        "key": "1",
                                        "label": "Mon"
                                    },
                                    {
                                        "key": "2",
                                        "label": "Tue"
                                    },
                                    {
                                        "key": "3",
                                        "label": "Wed"
                                    },
                                    {
                                        "key": "4",
                                        "label": "Thurs"
                                    },
                                    {
                                        "key": "4",
                                        "label": "Fri"
                                    },
                                    {
                                        "key": "4",
                                        "label": "Sat"
                                    },
                                    {
                                        "key": "4",
                                        "label": "Sun"
                                    }
                                ]
                            },
                            "q12": {
                                "id": "q12",
                                "questionType": "INPUT",
                                "question": "How much time do you spend doing vigorous activities at work in a typical day?",
                                "inputs": [
                                    {
                                        "type": "INTEGER",
                                        "regex": "",
                                        "label": "Hours"
                                    },
                                    {
                                        "type": "INTEGER",
                                        "regex": "",
                                        "label": "Minutes"
                                    }
                                ]
                            }
                        }
                    },
                    "score": {
                        "ANATOMY": {
                            "value": 4,
                            "unit": "POINTS"
                        },
                        "EMOTION": {
                            "value": 4,
                            "unit": "POINTS"
                        },
                        "LIFESTYLE": {
                            "value": 4,
                            "unit": "POINTS"
                        }
                    },
                    "week": 6
                },
                "status": "ACTIVE"
            }
        ],
        "activityMetadata": {
            "status": "PENDING",
            "updateBy": "with in 2 days"
        }
    }
};
