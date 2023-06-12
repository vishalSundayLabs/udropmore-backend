import { query } from "express"
import { anatomy } from "../../Constant/LeapScore/Anatomy"
import { anatomyArticals, articalBasedOnScore } from "../../Constant/LeapScore/ArticalBasedOnScore"
import { emotion } from "../../Constant/LeapScore/Emotion"
import { getLeapCategories } from "../../Constant/LeapScore/LeapCategories"
import { lifeStyle } from "../../Constant/LeapScore/LifeStyle"
import { physicalFitness } from "../../Constant/LeapScore/PhysicalFitness"
import { LeapScoreQuestionnaireSchedule } from "../../Constant/LeapScore/QuestionnaireSchedule"
import { HTTP_BAD_REQUEST, HTTP_NOT_FOUND, HTTP_OK } from "../../Constant/Master"
import { ResponseError, ResponseSuccess } from "../../utils/ResponseClass"
import LeapScoreModel from "./LeapScoreModel"

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
            score: savedQuestions.details[query.category.toLowerCase()].score ? savedQuestions.details[query.category.toLowerCase()].score : 0,
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

        const calculatedValues = await calculateLeapScoreAndSetStatus(savedQuestions.details[query.category.toLowerCase()].answers, query.category.toLowerCase())
        console.log(calculatedValues)
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

export const getArticalBasedOnLeapScoreAndStatus = async (req, res) => {

    const params = req.params
    const query = req.query

    if (!params.motherId || !query.week) {

        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: `Bad Request! Mother ID , Week must be provide.`
        }))

    }

    try {

        const leapScoreQuestionnaire = await LeapScoreModel.findOne({ userId: params.motherId, pregnancyWeek: query.week, isDeleted: false })

        const categoryScore = leapScoreQuestionnaire.details

        if (query.height && query.weight) {
            categoryScore.anatomy.score = (parseFloat(query.weight) / (Math.pow((parseFloat(query.height) * 0.0254), 2))).toFixed(1)
            await leapScoreQuestionnaire.save()
        }

        let articalOfLifestyle = []
        let articalOfEmotion = []
        let articalOfPhysical = []
        let articalOfAnatomy = []

        if (leapScoreQuestionnaire.status == "COMPLETED") {
            articalOfLifestyle = findArticalBasedOnScore(categoryScore.lifestyle.answers, "lifestyle")
            articalOfEmotion = findArticalBasedOnScore(categoryScore.emotion.answers, "emotion")
            articalOfAnatomy = getArticalForAnatomy(categoryScore.anatomy.score)
            articalOfPhysical = findArticalBasedOnScore(categoryScore.physical.answers, "physical")
        }



        return res.status(HTTP_OK).send({
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
        })


    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }
}

export const getAllLeapScore = async (req, res) => {
    const params = req.params

    if (!params.motherId) {

        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: `Bad Request! Mother ID  must be provide.`
        }))

    }

    try {
        const leapScore = await LeapScoreModel.find({ userId: params.motherId })
        
        if(!leapScore) {

            return res.status(HTTP_NOT_FOUND).send(new ResponseSuccess({
                success: false,
                message: `Leap score not found!`
            }))

        }

        const leapScoreList = leapScore.map((item) => {
            return {
                week: item.pregnancyWeek,
                score: {
                    emotion: item.details.emotion.score,
                    anatomy: item.details.anatomy.score,
                    lifeStyle: item.details.lifestyle.score,
                    physical: item.details.physical.score
                }
            }
        })

        return res.status(HTTP_OK).send({
            success: true,
            message: `Get all week leap score successfully.`,
            result: leapScoreList
         })

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }
}

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
                                    if (subOption[p].value) {
                                        console.log(subOption[p].value, subQuestions[m].option[subQuestionOptionKey[n]].score)
                                        subQuestionScore += Number(subOption[p].value) * subQuestions[m].option[subQuestionOptionKey[n]].score;
                                        subQuestionScore -= subQuestions[m].option[subQuestionOptionKey[n]].score
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

    let artical = []
    let totalScoreForemotion = 0
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
                                const articalData = articalBasedOnScore[option.articalIndex]
                                articalData.data.userData.value = option.option
                                artical.push(articalData)
                            }
                            totalScoreForemotion += option.score
                        }
                    }

                    if (subQuestions != null && subQuestions.length > 0) {
                        for (let m = 0; m < subQuestions.length; m++) {
                            const subQuestionOptionKey = Object.keys(subQuestions[m].option);

                            for (let n = 0; n < subQuestionOptionKey.length; n++) {
                                const subOption =
                                    subQuestions[m].option[subQuestionOptionKey[n]].options;

                                for (let p = 0; p < subOption.length; p++) {
                                    if (subOption[p].isSelected == true || subOption[p].value) {
                                        if (subOption[p].articalIndex) {
                                            const articalData = articalBasedOnScore[subOption[p].articalIndex]
                                            articalData.data.userData.value = subOption[p].option
                                            artical.push(articalData)
                                        }
                                        if (subOption[p].value) {
                                            console.log(subOption[p].value, subQuestions[m].option[subQuestionOptionKey[n]].score)
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
        artical = []
        if (totalScoreForemotion >= 0 && totalScoreForemotion <= 13) {
            artical.push(articalBasedOnScore[12])
        } else if (totalScoreForemotion >= 14 && totalScoreForemotion <= 25) {
            artical.push(articalBasedOnScore[13])
        } else {
            artical.push(articalBasedOnScore[14])
        }
    }
    return artical;
}

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

const getAnatomyScoreByBMI = (bmi) => {

    if (bmi < 18.5) {
        return 1;
    } else if (bmi >= 18.5 && bmi < 23) {
        return 4
    } else if (bmi >= 23 && bmi < 25) {
        return 2
    } else {
        return 1
    }

}

const getArticalForAnatomy = (score) => {
    if (score < 18.5) {
        return [anatomyArticals[0]];
    } else if (score >= 18.5 && score < 23) {
        return [anatomyArticals[1]];
    } else if (score >= 23 && score < 25) {
        return [anatomyArticals[2]];
    } else {
        return [anatomyArticals[3]];
    }
}