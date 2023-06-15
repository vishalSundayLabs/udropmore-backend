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
exports.getAllLeapScore = exports.getArticalBasedOnLeapScoreAndStatus = exports.updateLeapScoreQuestionnairDetails = exports.getLeapScoreQuestions = void 0;
const moment = require("moment");
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
            score: savedQuestions ? savedQuestions.details[query.category.toLowerCase()].score ? savedQuestions.details[query.category.toLowerCase()].score : 0 : 0,
            leapScoreStatus: savedQuestions ? savedQuestions.status ? savedQuestions.status : "PENDING" : "PENDING",
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
        if (!leapScoreQuestionnaire) {
            return res.status(Master_1.HTTP_NOT_FOUND).send(new ResponseClass_1.ResponseSuccess({
                success: false,
                message: `Leap Questions not found for ${query.week}th week or may be User not found!`
            }));
        }
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
        const nextLeapIndex = QuestionnaireSchedule_1.LeapScoreQuestionnaireSchedule["LIFESTYLE"].indexOf(Number(query.week));
        const nextLeapScoreDiff = QuestionnaireSchedule_1.LeapScoreQuestionnaireSchedule["LIFESTYLE"][nextLeapIndex + 1] - Number(query.week);
        const nextLeapScoreDate = new Date(moment(new Date()).add(nextLeapScoreDiff, 'weeks').format('YYYY-MM-DD'));
        const currentDate = new Date();
        const diffDays = moment(nextLeapScoreDate).diff(new Date(), 'days');
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
            leapScoreStatus: leapScoreQuestionnaire.status,
            nextLeapScore: diffDays <= 7 ?
                { value: diffDays, unit: "Days" }
                :
                    { value: QuestionnaireSchedule_1.LeapScoreQuestionnaireSchedule["LIFESTYLE"][nextLeapIndex + 1], unit: "Week" }
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
const getAllLeapScore = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const params = req.params;
    if (!params.motherId) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: `Bad Request! Mother ID  must be provide.`
        }));
    }
    try {
        const leapScore = yield LeapScoreModel_1.default.find({ userId: params.motherId });
        if (!leapScore) {
            return res.status(Master_1.HTTP_NOT_FOUND).send(new ResponseClass_1.ResponseSuccess({
                success: false,
                message: `Leap score not found!`
            }));
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
            };
        });
        return res.status(Master_1.HTTP_OK).send({
            success: true,
            message: `Get all week leap score successfully.`,
            result: leapScoreList
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
exports.getAllLeapScore = getAllLeapScore;
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
