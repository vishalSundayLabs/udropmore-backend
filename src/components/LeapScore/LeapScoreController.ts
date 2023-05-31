import { anatomy } from "../../Constant/LeapScore/Anatomy"
import { emotion } from "../../Constant/LeapScore/Emotion"
import { getLeapCategories } from "../../Constant/LeapScore/LeapCategories"
import { lifeStyle } from "../../Constant/LeapScore/LifeStyle"
import { physicalFitness } from "../../Constant/LeapScore/PhysicalFitness"
import { LeapScoreQuestionnaireSchedule } from "../../Constant/LeapScore/QuestionnaireSchedule"
import { HTTP_BAD_REQUEST, HTTP_OK } from "../../Constant/Master"
import { ResponseError, ResponseSuccess } from "../../utils/ResponseClass"
import LeapScoreModel from "./LeapScoreModel"


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
}
export const createLeapScoreQuestions = async (req, res) => {
    try {
        LeapScoreModel.create(data)

        console.log("done")
    } catch (error) {
        console.log(error.message)
    }
}

export const getLeapScoreQuestions = async (req, res) => {

    const query = req.query
    const params = req.params

    if (!query.category || !LeapScoreQuestionnaireSchedule[query.category.toUpperCase()] || !query.week || !params.motherId) {

        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: !LeapScoreQuestionnaireSchedule[query.category.toUpperCase()] ? `Bad Request! Please check Category Spelling .` : `Bad Request! Mother ID , Category and Week must be provide.`
        }))

    }

    try {

        const savedQuestions = await LeapScoreModel.findOne({ userId: params.motherId, pregnancyWeek: query.week, isDeleted: false })

        if (!savedQuestions && !LeapScoreQuestionnaireSchedule[query.category.toUpperCase()].includes(Number(query.week))) {

            return res.status(HTTP_OK).send(new ResponseSuccess({
                success: true,
                message: `This week no any questions .`
            }))

        }

        let question = null;

        if (!savedQuestions || !savedQuestions.details[query.category.toLowerCase()].answers) {

            if (query.category.toUpperCase() == getLeapCategories.ANATOMY) {
                question = anatomy
            } else if (query.category.toUpperCase() == getLeapCategories.EMOTION) {
                question = emotion
            } else if (query.category.toUpperCase() == getLeapCategories.LIFESTYLE) {
                question = lifeStyle
            } else if (query.category.toUpperCase() == getLeapCategories.PHYSICAL) {
                question = physicalFitness
            } else {

                return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
                    success: false,
                    message: "Invalied category! category must be lifestyle,anatomy,emotion,physical."
                }))

            }

            if (!savedQuestions) {
                await LeapScoreModel.create({ userId: params.motherId, pregnancyWeek: query.week })
            }

        } else {
            question = savedQuestions.details[query.category.toLowerCase()].answers
        }

        const nextLeapIndex = LeapScoreQuestionnaireSchedule[query.category.toUpperCase()].indexOf(Number(query.week))

        return res.status(HTTP_OK).send({
            success: true,
            message: `Get All Questions ${query.category} successfully.`,
            result: question,
            score:  savedQuestions.details[query.category.toLowerCase()].score ?  savedQuestions.details[query.category.toLowerCase()].answers : 0,
            leapScoreStatus: savedQuestions.status ? savedQuestions.status : "PENDING",
            nextLeapScore: LeapScoreQuestionnaireSchedule[query.category.toUpperCase()][nextLeapIndex + 1]
        })

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }
}

export const updateLeapScoreQuestionnairDetails = async (req, res) => {

    const query = req.query
    const params = req.params
    const body = req.body

    if (!query.category || !LeapScoreQuestionnaireSchedule[query.category.toUpperCase()] || !query.week || !params.motherId) {

        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: !LeapScoreQuestionnaireSchedule[query.category.toUpperCase()] ? `Bad Request! Please check Category Spelling .` : `Bad Request! Mother ID , Category and Week must be provide.`
        }))

    }

    try {

        const savedQuestions = await LeapScoreModel.findOne({ userId: params.motherId, pregnancyWeek: query.week, isDeleted: false })

        savedQuestions.details[query.category.toLowerCase()].answers = body.answers

        const calculatedValues = await calculateLeapScoreAndSetStatus(savedQuestions.details[query.category.toLowerCase()].answers)
        console.log("line", calculatedValues)
        savedQuestions.details[query.category.toLowerCase()].score = calculatedValues.finalScore

        savedQuestions.details[query.category.toLowerCase()].status = calculatedValues.leapScoreStatus

        savedQuestions.status = await checkFinalLeapScoreStatus(savedQuestions.details)

        await savedQuestions.save()

        const nextLeapIndex = LeapScoreQuestionnaireSchedule[query.category.toUpperCase()].indexOf(Number(query.week))

        return res.status(HTTP_OK).send({
            success: true,
            message: `Update Questions of ${query.category} successfully.`,
            result: savedQuestions.details[query.category.toLowerCase()].answers,
            score: savedQuestions.details[query.category.toLowerCase()].score,
            leapScoreStatus: savedQuestions.status,
            nextLeapScore: LeapScoreQuestionnaireSchedule[query.category.toUpperCase()][nextLeapIndex + 1]
        })

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }

}


const calculateLeapScoreAndSetStatus = (data) => {

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
                for (let l = 0; l < questionOptions.length; l++) {
                    const option = questionOptions[l];

                    if (option.isSelected == true || option.value) {
                        questionScore += option.score;
                        countQuestions++;
                    }
                }

                if (subQuestions != null && subQuestions.length > 0) {
                    for (let m = 0; m < subQuestions.length; m++) {
                        const subQuestionOptionKey = Object.keys(subQuestions[m].option);
                        let limitCount = 0
                        totalQuestions++;
                        for (let n = 0; n < subQuestionOptionKey.length; n++) {
                            const subOption =
                                subQuestions[m].option[subQuestionOptionKey[n]].options;
                            let isSelected = false;
                            for (let p = 0; p < subOption.length; p++) {
                                if (subOption[p].isSelected == true || subOption[p].value) {
                                    isSelected = true;
                                    limitCount = 1
                                    break;
                                }
                            }

                            if (isSelected) {
                                subQuestionScore +=
                                    subQuestions[m].option[subQuestionOptionKey[n]].score;
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

    return {
        subQuestionScore,
        questionScore,
        totalQuestions,
        countQuestions,
        finalScore: Math.floor((subQuestionScore + questionScore) / totalQuestions),
        leapScoreStatus: countQuestions == totalQuestions ? "COMPLETED" : "PENDING"
    };

};


const checkFinalLeapScoreStatus = (data) => {
    const statusPreference = {
        COMPLETED: 0,
        PENDING: 1,
        EXPIRED: 2,
        0: "COMPLETED",
        1: "PENDING",
        2: "EXPIRED"
    }

    const maxValue = Math.max(Number(statusPreference[data.emotion.status ? data.emotion.status : "PENDING"]), Number(statusPreference[data.anatomy.status ? data.anatomy.status : "PENDING"]), Number(statusPreference[data.lifestyle.status ? data.lifestyle.status : "PENDING"]), Number(statusPreference[data.physical.status ? data.physical.status : "PENDING"]))

    return statusPreference[maxValue]
}