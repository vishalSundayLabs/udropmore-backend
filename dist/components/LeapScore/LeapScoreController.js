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
const Questionnaire_1 = require("../../Constant/LeapScore/Questionnaire");
const Master_1 = require("../../Constant/Master");
const ResponseClass_1 = require("../../utils/ResponseClass");
const getLeapScoreQuestions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.query;
    // if (!query.category) {
    //     return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
    //         message: "Bad Request! Category must be provide."
    //     }))
    // }
    try {
        // const questions = questionnaire.filter((item) => item.category == query.category)
        return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "Get All Questions successfully.",
            result: Questionnaire_1.questionnaire
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
