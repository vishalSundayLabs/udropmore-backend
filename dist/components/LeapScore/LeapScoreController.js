"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArticalBasedOnLeapScoreAndStatus = exports.updateLeapScoreQuestionnairDetails = exports.getLeapScoreQuestions = exports.createLeapScoreQuestions = void 0;
const Anatomy_1 = require("../../Constant/LeapScore/Anatomy");
const ArticalBasedOnScore_1 = require("../../Constant/LeapScore/ArticalBasedOnScore");
const Emotion_1 = require("../../Constant/LeapScore/Emotion");
const LeapCategories_1 = require("../../Constant/LeapScore/LeapCategories");
const LifeStyle_1 = require("../../Constant/LeapScore/LifeStyle");
const PhysicalFitness_1 = require("../../Constant/LeapScore/PhysicalFitness");
const QuestionnaireSchedule_1 = require("../../Constant/LeapScore/QuestionnaireSchedule");
const Master_1 = require("../../Constant/Master");
const ResponseClass_1 = require("../../utils/ResponseClass");
const LeapScoreModel_1 = require("./LeapScoreModel");
const data = {
    userId: "6469d966f99bc2081c22d6c3",
    pregnancyWeek: 6,
    details: {
        physical: {
            answers: [
                {
                    "category": "PHYSICAL",
                    "subCategory": null,
                    "section": [
                        {
                            "sectionName": null,
                            "question": [
                                {
                                    "name": "Does your work involve vigorous-intensity activity that causes large increases in breathing or heart rate like [carrying or lifting heavy loads, digging/ grinding etc] for at least 10 minutes continuously?",
                                    "options": {
                                        "option": [
                                            {
                                                "option": "Yes",
                                                "score": 2,
                                                "isSelected": true
                                            },
                                            {
                                                "option": "No",
                                                "score": 2,
                                                "isSelected": true
                                            }
                                        ],
                                        "cacalculatedScore": 0,
                                        "multiSelect": false
                                    },
                                    "subQuestions": [
                                        {
                                            "name": "In a typical week, how many days do you do vigourous activities at work ?",
                                            "option": {
                                                "A": {
                                                    "options": [
                                                        {
                                                            "name": "Monday",
                                                            "isSelected": true
                                                        }
                                                    ],
                                                    "score": 1
                                                },
                                                "B": {
                                                    "options": [
                                                        {
                                                            "name": "Tuesday",
                                                            "isSelected": true
                                                        }
                                                    ],
                                                    "score": 1
                                                },
                                                "C": {
                                                    "options": [
                                                        {
                                                            "name": "Wednesday",
                                                            "isSelected": false
                                                        }
                                                    ],
                                                    "score": 1
                                                },
                                                "D": {
                                                    "options": [
                                                        {
                                                            "name": "Thursday",
                                                            "isSelected": true
                                                        }
                                                    ],
                                                    "score": 1
                                                },
                                                "E": {
                                                    "options": [
                                                        {
                                                            "name": "Friday",
                                                            "isSelected": false
                                                        }
                                                    ],
                                                    "score": 1
                                                },
                                                "F": {
                                                    "options": [
                                                        {
                                                            "name": "Saturday",
                                                            "isSelected": false
                                                        }
                                                    ],
                                                    "score": 1
                                                },
                                                "G": {
                                                    "options": [
                                                        {
                                                            "name": "Sunday",
                                                            "isSelected": false
                                                        }
                                                    ],
                                                    "score": 1
                                                }
                                            },
                                            "calculatedScore": 0,
                                            "multiSelect": true
                                        },
                                        {
                                            "name": "How much time do you spend doing vigorous activities at work in a typical day ?",
                                            "option": {
                                                "A": {
                                                    "options": [
                                                        {
                                                            "name": "Hours",
                                                            "isSelected": false
                                                        }
                                                    ],
                                                    "score": 2
                                                },
                                                "B": {
                                                    "options": [
                                                        {
                                                            "name": "Minutes",
                                                            "isSelected": false
                                                        }
                                                    ],
                                                    "score": 2
                                                }
                                            },
                                            "calculatedScore": 0,
                                            "multiSelect": true
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "sectionName": null,
                            "question": {
                                "name": "Does your work involve moderate-intensity activity, that causes small increases in breathing or heart rate such as carrying light loads for at least 10 minutes continuously ?",
                                "options": {
                                    "option": [
                                        {
                                            "option": "Yes",
                                            "score": 2,
                                            "isSelected": false,
                                            "nextQuestionKey": null
                                        },
                                        {
                                            "option": "No",
                                            "score": 2,
                                            "isSelected": false
                                        }
                                    ],
                                    "calculatedScore": 0,
                                    "multiSelect": false
                                }
                            },
                            "subQuestions": [
                                {
                                    "name": "In a typical week, on how many days do you do moderateintensity activities as part of your work ?",
                                    "option": {
                                        "A": {
                                            "options": [
                                                {
                                                    "name": "Monday",
                                                    "isSelected": false
                                                }
                                            ],
                                            "score": 1
                                        },
                                        "B": {
                                            "options": [
                                                {
                                                    "name": "Tuesday",
                                                    "isSelected": false
                                                }
                                            ],
                                            "score": 1
                                        },
                                        "C": {
                                            "options": [
                                                {
                                                    "name": "Wednesday",
                                                    "isSelected": false
                                                }
                                            ],
                                            "score": 1
                                        },
                                        "D": {
                                            "options": [
                                                {
                                                    "name": "Thursday",
                                                    "isSelected": false
                                                }
                                            ],
                                            "score": 1
                                        },
                                        "E": {
                                            "options": [
                                                {
                                                    "name": "Friday",
                                                    "isSelected": false
                                                }
                                            ],
                                            "score": 1
                                        },
                                        "F": {
                                            "options": [
                                                {
                                                    "name": "Saturday",
                                                    "isSelected": false
                                                }
                                            ],
                                            "score": 1
                                        },
                                        "G": {
                                            "options": [
                                                {
                                                    "name": "Sunday",
                                                    "isSelected": false
                                                }
                                            ],
                                            "score": 1
                                        }
                                    },
                                    "calculatedScore": 0,
                                    "multiSelect": true
                                },
                                {
                                    "name": "How much time do you spend doing moderate-intensity activities at work on a typical day ?",
                                    "option": {
                                        "A": {
                                            "options": [
                                                {
                                                    "name": "Hours",
                                                    "isSelected": false
                                                }
                                            ],
                                            "score": 2
                                        },
                                        "B": {
                                            "options": [
                                                {
                                                    "name": "Minutes",
                                                    "isSelected": false
                                                }
                                            ],
                                            "score": 2
                                        }
                                    },
                                    "calculatedScore": 0,
                                    "multiSelect": true
                                }
                            ]
                        },
                        {
                            "sectionName": null,
                            "question": [
                                {
                                    "name": "Do you walk or use a cycle for at least 10 mins continuously to and from places ?",
                                    "options": {
                                        "option": [
                                            {
                                                "option": "Yes",
                                                "score": 2,
                                                "isSelected": false,
                                                "nextQuestionKey": null
                                            },
                                            {
                                                "option": "No",
                                                "score": 2,
                                                "isSelected": false
                                            }
                                        ],
                                        "calculatedScore": 0,
                                        "multiSelect": false
                                    },
                                    "subQuestions": [
                                        {
                                            "name": "In a typical week, on how many days do you walk or cycle to and from places ?",
                                            "option": {
                                                "A": {
                                                    "options": [
                                                        {
                                                            "name": "Monday",
                                                            "isSelected": false
                                                        }
                                                    ],
                                                    "score": 1
                                                },
                                                "B": {
                                                    "options": [
                                                        {
                                                            "name": "Tuesday",
                                                            "isSelected": false
                                                        }
                                                    ],
                                                    "score": 1
                                                },
                                                "C": {
                                                    "options": [
                                                        {
                                                            "name": "Wednesday",
                                                            "isSelected": false
                                                        }
                                                    ],
                                                    "score": 1
                                                },
                                                "D": {
                                                    "options": [
                                                        {
                                                            "name": "Thursday",
                                                            "isSelected": false
                                                        }
                                                    ],
                                                    "score": 1
                                                },
                                                "E": {
                                                    "options": [
                                                        {
                                                            "name": "Friday",
                                                            "isSelected": false
                                                        }
                                                    ],
                                                    "score": 1
                                                },
                                                "F": {
                                                    "options": [
                                                        {
                                                            "name": "Saturday",
                                                            "isSelected": false
                                                        }
                                                    ],
                                                    "score": 1
                                                },
                                                "G": {
                                                    "options": [
                                                        {
                                                            "name": "Sunday",
                                                            "isSelected": false
                                                        }
                                                    ],
                                                    "score": 1
                                                }
                                            },
                                            "calculatedScore": 0,
                                            "multiSelect": true
                                        },
                                        {
                                            "name": "How much time do you spend walking or cycling to and from places on a typical day ?",
                                            "option": {
                                                "A": {
                                                    "options": [
                                                        {
                                                            "name": "Hours",
                                                            "isSelected": false
                                                        }
                                                    ],
                                                    "score": 2
                                                },
                                                "B": {
                                                    "options": [
                                                        {
                                                            "name": "Minutes",
                                                            "isSelected": false
                                                        }
                                                    ],
                                                    "score": 2
                                                }
                                            },
                                            "calculatedScore": 0,
                                            "multiSelect": true
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "sectionName": null,
                            "question": [
                                {
                                    "name": "Do you do any vigorous-intensity sports, fitness or recreational (leisure) activities that cause large increases in breathing or heart rate like [running or football] for at least 10 minutes continuously ?",
                                    "options": {
                                        "option": [
                                            {
                                                "option": "Yes",
                                                "score": 2,
                                                "isSelected": false,
                                                "nextQuestionKey": null
                                            },
                                            {
                                                "option": "No",
                                                "score": 2,
                                                "isSelected": false
                                            }
                                        ],
                                        "calculatedScore": 0,
                                        "multiSelect": false
                                    },
                                    "subQuestions": [
                                        {
                                            "name": "In a typical week, on how many days do you do vigorous intensity sports, fitness or recreational (leisure) activities ?",
                                            "option": {
                                                "A": {
                                                    "options": [
                                                        {
                                                            "name": "Monday",
                                                            "isSelected": false
                                                        }
                                                    ],
                                                    "score": 1
                                                },
                                                "B": {
                                                    "options": [
                                                        {
                                                            "name": "Tuesday",
                                                            "isSelected": false
                                                        }
                                                    ],
                                                    "score": 1
                                                },
                                                "C": {
                                                    "options": [
                                                        {
                                                            "name": "Wednesday",
                                                            "isSelected": false
                                                        }
                                                    ],
                                                    "score": 1
                                                },
                                                "D": {
                                                    "options": [
                                                        {
                                                            "name": "Thursday",
                                                            "isSelected": false
                                                        }
                                                    ],
                                                    "score": 1
                                                },
                                                "E": {
                                                    "options": [
                                                        {
                                                            "name": "Friday",
                                                            "isSelected": false
                                                        }
                                                    ],
                                                    "score": 1
                                                },
                                                "F": {
                                                    "options": [
                                                        {
                                                            "name": "Saturday",
                                                            "isSelected": false
                                                        }
                                                    ],
                                                    "score": 1
                                                },
                                                "G": {
                                                    "options": [
                                                        {
                                                            "name": "Sunday",
                                                            "isSelected": false
                                                        }
                                                    ],
                                                    "score": 1
                                                }
                                            },
                                            "calculatedScore": 0,
                                            "multiSelect": true
                                        },
                                        {
                                            "name": "How much time do you spend doing vigorous-intensity sports, fitness or recreational activities on a typical day ?",
                                            "option": {
                                                "A": {
                                                    "options": [
                                                        {
                                                            "name": "Hours",
                                                            "isSelected": false
                                                        }
                                                    ],
                                                    "score": 2
                                                },
                                                "B": {
                                                    "options": [
                                                        {
                                                            "name": "Minutes",
                                                            "isSelected": false
                                                        }
                                                    ],
                                                    "score": 2
                                                }
                                            },
                                            "calculatedScore": 0,
                                            "multiSelect": true
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "sectionName": null,
                            "question": [
                                {
                                    "name": "Do you do any moderate-intensity sports, fitness or recreational (leisure) activities that cause a small increase in breathing or heart rate such as brisk walking, [cycling, swimming, yoga] for at least 10 minutes continuously ?",
                                    "options": {
                                        "option": [
                                            {
                                                "option": "Yes",
                                                "score": 2,
                                                "isSelected": false,
                                                "nextQuestionKey": null
                                            },
                                            {
                                                "option": "No",
                                                "score": 2,
                                                "isSelected": false
                                            }
                                        ],
                                        "calculatedScore": 0,
                                        "multiSelect": false
                                    },
                                    "subQuestions": [
                                        {
                                            "name": "In a typical week, on how many days do you do moderate intensity sports, fitness or recreational (leisure) activities ?",
                                            "option": {
                                                "A": {
                                                    "options": [
                                                        {
                                                            "name": "Monday",
                                                            "isSelected": false
                                                        }
                                                    ],
                                                    "score": 1
                                                },
                                                "B": {
                                                    "options": [
                                                        {
                                                            "name": "Tuesday",
                                                            "isSelected": false
                                                        }
                                                    ],
                                                    "score": 1
                                                },
                                                "C": {
                                                    "options": [
                                                        {
                                                            "name": "Wednesday",
                                                            "isSelected": false
                                                        }
                                                    ],
                                                    "score": 1
                                                },
                                                "D": {
                                                    "options": [
                                                        {
                                                            "name": "Thursday",
                                                            "isSelected": false
                                                        }
                                                    ],
                                                    "score": 1
                                                },
                                                "E": {
                                                    "options": [
                                                        {
                                                            "name": "Friday",
                                                            "isSelected": false
                                                        }
                                                    ],
                                                    "score": 1
                                                },
                                                "F": {
                                                    "options": [
                                                        {
                                                            "name": "Saturday",
                                                            "isSelected": false
                                                        }
                                                    ],
                                                    "score": 1
                                                },
                                                "G": {
                                                    "options": [
                                                        {
                                                            "name": "Sunday",
                                                            "isSelected": false
                                                        }
                                                    ],
                                                    "score": 1
                                                }
                                            },
                                            "calculatedScore": 0,
                                            "multiSelect": true
                                        },
                                        {
                                            "name": "How much time do you spend doing moderate-intensity sports, fitness or recreational (leisure) activities on a typical day ?",
                                            "option": {
                                                "A": {
                                                    "options": [
                                                        {
                                                            "name": "Hours",
                                                            "isSelected": false
                                                        }
                                                    ],
                                                    "score": 2
                                                },
                                                "B": {
                                                    "options": [
                                                        {
                                                            "name": "Minutes",
                                                            "isSelected": false
                                                        }
                                                    ],
                                                    "score": 2
                                                }
                                            },
                                            "calculatedScore": 0,
                                            "multiSelect": true
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "sectionName": null,
                            "question": [
                                {
                                    "name": "How much time do you usually spend sitting or reclining on a typical day ?",
                                    "options": {
                                        "option": [
                                            {
                                                "option": "Hours",
                                                "score": 2,
                                                "isSelected": false,
                                                "nextQuestionKey": null
                                            },
                                            {
                                                "option": "Minutes",
                                                "score": 2,
                                                "isSelected": false
                                            }
                                        ],
                                        "calculatedScore": 0,
                                        "multiSelect": false
                                    },
                                    "subQuestions": null
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
};
const createLeapScoreQuestions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        LeapScoreModel_1.default.create(data);
        console.log("done");
    }
    catch (error) {
        console.log(error.message);
    }
});
exports.createLeapScoreQuestions = createLeapScoreQuestions;
const getLeapScoreQuestions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.query;
    const params = req.params;
    if (!query.category || !QuestionnaireSchedule_1.LeapScoreQuestionnaireSchedule[query.category.toUpperCase()] || !query.week || !params.motherId) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: !QuestionnaireSchedule_1.LeapScoreQuestionnaireSchedule[query.category.toUpperCase()] ? `Bad Request! Please check Category Spelling .` : `Bad Request! Mother ID , Category and Week must be provide.`
        }));
    }
    try {
        const savedQuestions = yield LeapScoreModel_1.default.findOne({ userId: params.motherId, pregnancyWeek: query.week, isDeleted: false });
        if (!savedQuestions && !QuestionnaireSchedule_1.LeapScoreQuestionnaireSchedule[query.category.toUpperCase()].includes(Number(query.week))) {
            return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
                success: true,
                message: `This week no any questions .`
            }));
        }
        let question = null;
        if (!savedQuestions || !savedQuestions.details[query.category.toLowerCase()].answers) {
            if (query.category.toUpperCase() == LeapCategories_1.getLeapCategories.ANATOMY) {
                question = Anatomy_1.anatomy;
            }
            else if (query.category.toUpperCase() == LeapCategories_1.getLeapCategories.EMOTION) {
                question = Emotion_1.emotion;
            }
            else if (query.category.toUpperCase() == LeapCategories_1.getLeapCategories.LIFESTYLE) {
                question = LifeStyle_1.lifeStyle;
            }
            else if (query.category.toUpperCase() == LeapCategories_1.getLeapCategories.PHYSICAL) {
                question = PhysicalFitness_1.physicalFitness;
            }
            else {
                return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
                    success: false,
                    message: "Invalied category! category must be lifestyle,anatomy,emotion,physical."
                }));
            }
            if (!savedQuestions) {
                yield LeapScoreModel_1.default.create({ userId: params.motherId, pregnancyWeek: query.week });
            }
        }
        else {
            question = savedQuestions.details[query.category.toLowerCase()].answers;
        }
        const nextLeapIndex = QuestionnaireSchedule_1.LeapScoreQuestionnaireSchedule[query.category.toUpperCase()].indexOf(Number(query.week));
        return res.status(Master_1.HTTP_OK).send({
            success: true,
            message: `Get All Questions ${query.category} successfully.`,
            result: question,
            score: savedQuestions.details[query.category.toLowerCase()].score ? savedQuestions.details[query.category.toLowerCase()].score : 0,
            leapScoreStatus: savedQuestions.status ? savedQuestions.status : "PENDING",
            nextLeapScore: QuestionnaireSchedule_1.LeapScoreQuestionnaireSchedule[query.category.toUpperCase()][nextLeapIndex + 1]
        });
    }
    catch (error) {
        let response = new ResponseClass_1.ResponseError({
            message: "Something went wrong",
            error: error.message,
        });
        return res.status(500).json(response);
    }
});
exports.getLeapScoreQuestions = getLeapScoreQuestions;
const updateLeapScoreQuestionnairDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.query;
    const params = req.params;
    const body = req.body;
    if (!query.category || !QuestionnaireSchedule_1.LeapScoreQuestionnaireSchedule[query.category.toUpperCase()] || !query.week || !params.motherId) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: !QuestionnaireSchedule_1.LeapScoreQuestionnaireSchedule[query.category.toUpperCase()] ? `Bad Request! Please check Category Spelling .` : `Bad Request! Mother ID , Category and Week must be provide.`
        }));
    }
    try {
        const savedQuestions = yield LeapScoreModel_1.default.findOne({ userId: params.motherId, pregnancyWeek: query.week, isDeleted: false });
        savedQuestions.details[query.category.toLowerCase()].answers = body.answers;
        const calculatedValues = yield calculateLeapScoreAndSetStatus(savedQuestions.details[query.category.toLowerCase()].answers, query.category.toLowerCase());
        console.log(calculatedValues);
        savedQuestions.details[query.category.toLowerCase()].score = calculatedValues.finalScore;
        savedQuestions.details[query.category.toLowerCase()].status = calculatedValues.leapScoreStatus;
        savedQuestions.status = yield checkFinalLeapScoreStatus(savedQuestions.details);
        yield savedQuestions.save();
        const nextLeapIndex = QuestionnaireSchedule_1.LeapScoreQuestionnaireSchedule[query.category.toUpperCase()].indexOf(Number(query.week));
        return res.status(Master_1.HTTP_OK).send({
            success: true,
            message: `Update Questions of ${query.category} successfully.`,
            result: savedQuestions.details[query.category.toLowerCase()].answers,
            score: savedQuestions.details[query.category.toLowerCase()].score,
            leapScoreStatus: savedQuestions.status,
            nextLeapScore: QuestionnaireSchedule_1.LeapScoreQuestionnaireSchedule[query.category.toUpperCase()][nextLeapIndex + 1]
        });
    }
    catch (error) {
        let response = new ResponseClass_1.ResponseError({
            message: "Something went wrong",
            error: error.message,
        });
        return res.status(500).json(response);
    }
});
exports.updateLeapScoreQuestionnairDetails = updateLeapScoreQuestionnairDetails;
const getArticalBasedOnLeapScoreAndStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const params = req.params;
    const query = req.query;
    if (!params.motherId || !query.week) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: `Bad Request! Mother ID , Week must be provide.`
        }));
    }
    try {
        const leapScoreQuestionnaire = yield LeapScoreModel_1.default.findOne({ userId: params.motherId, pregnancyWeek: query.week, isDeleted: false });
        const categoryScore = leapScoreQuestionnaire.details;
        if (query.height && query.weight) {
            categoryScore.anatomy.score = (parseFloat(query.weight) / (Math.pow((parseFloat(query.height) * 0.0254), 2))).toFixed(1);
            yield leapScoreQuestionnaire.save();
        }
        let articalOfLifestyle = [];
        let articalOfEmotion = [];
        let articalOfPhysical = [];
        let articalOfAnatomy = [];
        if (leapScoreQuestionnaire.status == "COMPLETED") {
            articalOfLifestyle = findArticalBasedOnScore(categoryScore.lifestyle.answers, "lifestyle");
            articalOfEmotion = findArticalBasedOnScore(categoryScore.emotion.answers, "emotion");
            articalOfAnatomy = getArticalForAnatomy(categoryScore.anatomy.score);
            articalOfPhysical = findArticalBasedOnScore(categoryScore.physical.answers, "physical");
        }
        return res.status(Master_1.HTTP_OK).send({
            success: true,
            message: `Get Artical based on score or status successfully.`,
            result: {
                lifestyle: articalOfLifestyle,
                emotion: articalOfEmotion,
                anatomy: articalOfAnatomy,
                physical: articalOfPhysical
            },
            score: {
                lifestyle: categoryScore.lifestyle.score,
                emotion: categoryScore.emotion.score,
                anatomy: getAnatomyScoreByBMI(categoryScore.anatomy.score),
                physical: categoryScore.physical.score
            },
            leapScoreStatus: leapScoreQuestionnaire.status
        });
    }
    catch (error) {
        let response = new ResponseClass_1.ResponseError({
            message: "Something went wrong",
            error: error.message,
        });
        return res.status(500).json(response);
    }
});
exports.getArticalBasedOnLeapScoreAndStatus = getArticalBasedOnLeapScoreAndStatus;
const calculateLeapScoreAndSetStatus = (data, category) => {
    let questionScore = 0;
    let totalQuestions = 0;
    let subQuestionScore = 0;
    let countQuestions = 0;
    for (let i = 0; i < data.length; i++) {
        const section = data[i].section;
        for (let j = 0; j < section.length; j++) {
            for (let k = 0; k < section[j].question.length; k++) {
                const questionOptions = section[j].question[k].options.option;
                const subQuestions = section[j].question[k].subQuestions;
                totalQuestions++;
                let isAttempt = false;
                for (let l = 0; l < questionOptions.length; l++) {
                    const option = questionOptions[l];
                    if (option.isSelected == true || option.value) {
                        questionScore += option.score;
                        isAttempt = true;
                    }
                }
                if (isAttempt) {
                    countQuestions++;
                    isAttempt = false;
                }
                if (subQuestions != null && subQuestions.length > 0) {
                    for (let m = 0; m < subQuestions.length; m++) {
                        const subQuestionOptionKey = Object.keys(subQuestions[m].option);
                        let limitCount = 0;
                        totalQuestions++;
                        for (let n = 0; n < subQuestionOptionKey.length; n++) {
                            const subOption = subQuestions[m].option[subQuestionOptionKey[n]].options;
                            let isSelected = false;
                            for (let p = 0; p < subOption.length; p++) {
                                if (subOption[p].isSelected == true || subOption[p].value) {
                                    isSelected = true;
                                    limitCount = 1;
                                    if (subOption[p].value) {
                                        console.log(subOption[p].value, subQuestions[m].option[subQuestionOptionKey[n]].score);
                                        subQuestionScore += Number(subOption[p].value) * subQuestions[m].option[subQuestionOptionKey[n]].score;
                                        subQuestionScore -= subQuestions[m].option[subQuestionOptionKey[n]].score;
                                    }
                                }
                            }
                            if (isSelected) {
                                subQuestionScore += subQuestions[m].option[subQuestionOptionKey[n]].score;
                                isSelected = false;
                            }
                        }
                        if (limitCount) {
                            countQuestions++;
                        }
                    }
                }
            }
        }
    }
    let leapScore = Math.floor((subQuestionScore + questionScore) / totalQuestions);
    if (category == "physical") {
        leapScore = (subQuestionScore + questionScore) < 600 ? 1 : 4;
    }
    return {
        subQuestionScore,
        questionScore,
        totalQuestions,
        countQuestions,
        finalScore: leapScore,
        leapScoreStatus: countQuestions == totalQuestions ? "COMPLETED" : "PENDING"
    };
};
const findArticalBasedOnScore = (data, category) => {
    let artical = [];
    let totalScoreForemotion = 0;
    if (data) {
        for (let i = 0; i < data.length; i++) {
            const section = data[i].section;
            for (let j = 0; j < section.length; j++) {
                for (let k = 0; k < section[j].question.length; k++) {
                    const questionOptions = section[j].question[k].options.option;
                    const subQuestions = section[j].question[k].subQuestions;
                    for (let l = 0; l < questionOptions.length; l++) {
                        const option = questionOptions[l];
                        if (option.isSelected == true || option.value) {
                            if (option.articalIndex) {
                                const articalData = ArticalBasedOnScore_1.articalBasedOnScore[option.articalIndex];
                                articalData.data.userData.value = option.option;
                                artical.push(articalData);
                            }
                            totalScoreForemotion += option.score;
                        }
                    }
                    if (subQuestions != null && subQuestions.length > 0) {
                        for (let m = 0; m < subQuestions.length; m++) {
                            const subQuestionOptionKey = Object.keys(subQuestions[m].option);
                            for (let n = 0; n < subQuestionOptionKey.length; n++) {
                                const subOption = subQuestions[m].option[subQuestionOptionKey[n]].options;
                                for (let p = 0; p < subOption.length; p++) {
                                    if (subOption[p].isSelected == true || subOption[p].value) {
                                        if (subOption[p].articalIndex) {
                                            const articalData = ArticalBasedOnScore_1.articalBasedOnScore[subOption[p].articalIndex];
                                            articalData.data.userData.value = subOption[p].option;
                                            artical.push(articalData);
                                        }
                                        if (subOption[p].value) {
                                            console.log(subOption[p].value, subQuestions[m].option[subQuestionOptionKey[n]].score);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    if (category == "emotion") {
        artical = [];
        if (totalScoreForemotion >= 0 && totalScoreForemotion <= 13) {
            artical.push(ArticalBasedOnScore_1.articalBasedOnScore[12]);
        }
        else if (totalScoreForemotion >= 14 && totalScoreForemotion <= 25) {
            artical.push(ArticalBasedOnScore_1.articalBasedOnScore[13]);
        }
        else {
            artical.push(ArticalBasedOnScore_1.articalBasedOnScore[14]);
        }
    }
    return artical;
};
const checkFinalLeapScoreStatus = (data) => {
    const statusPreference = {
        COMPLETED: 0,
        PENDING: 1,
        EXPIRED: 2,
        0: "COMPLETED",
        1: "PENDING",
        2: "EXPIRED"
    };
    const maxValue = Math.max(Number(statusPreference[data.emotion.status ? data.emotion.status : "PENDING"]), Number(statusPreference[data.anatomy.status ? data.anatomy.status : "PENDING"]), Number(statusPreference[data.lifestyle.status ? data.lifestyle.status : "PENDING"]), Number(statusPreference[data.physical.status ? data.physical.status : "PENDING"]));
    return statusPreference[maxValue];
};
const getAnatomyScoreByBMI = (bmi) => {
    if (bmi < 18.5) {
        return 1;
    }
    else if (bmi >= 18.5 && bmi < 23) {
        return 4;
    }
    else if (bmi >= 23 && bmi < 25) {
        return 2;
    }
    else {
        return 1;
    }
};
const getArticalForAnatomy = (score) => {
    if (score < 18.5) {
        return [ArticalBasedOnScore_1.anatomyArticals[0]];
    }
    else if (score >= 18.5 && score < 23) {
        return [ArticalBasedOnScore_1.anatomyArticals[1]];
    }
    else if (score >= 23 && score < 25) {
        return [ArticalBasedOnScore_1.anatomyArticals[2]];
    }
    else {
        return [ArticalBasedOnScore_1.anatomyArticals[3]];
    }
};
