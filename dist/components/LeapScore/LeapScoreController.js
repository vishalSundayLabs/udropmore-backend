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
exports.getLeapScoreQuestions = void 0;
const Anatomy_1 = require("../../Constant/LeapScore/Anatomy");
const Emotion_1 = require("../../Constant/LeapScore/Emotion");
const LeapCategories_1 = require("../../Constant/LeapScore/LeapCategories");
const LifeStyle_1 = require("../../Constant/LeapScore/LifeStyle");
const PhysicalFitness_1 = require("../../Constant/LeapScore/PhysicalFitness");
const Master_1 = require("../../Constant/Master");
const ResponseClass_1 = require("../../utils/ResponseClass");
const getLeapScoreQuestions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.query;
    if (!query.category) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad Request! Category must be provide."
        }));
    }
    try {
        let question = null;
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
        return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "Get All Questions successfully.",
            result: question
        }));
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
