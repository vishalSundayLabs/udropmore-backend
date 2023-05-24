import { lifeStyle } from "../../Constant/LeapScore/Questionnaire"
import { HTTP_BAD_REQUEST, HTTP_OK } from "../../Constant/Master"
import { ResponseError, ResponseSuccess } from "../../utils/ResponseClass"

export const getLeapScoreQuestions = async (req, res) => {
    const query = req.query

    try {

        // const questions = questionnaire.filter((item) => item.category == query.category)
        const lifestyleQuestions = lifeStyle

        return res.status(HTTP_OK).send(new ResponseSuccess({
            success: true,
            message: "Get All Questions successfully.",
            result: { lifestyle: lifestyleQuestions, emotion: null, anatomy: null, physicalFitness: null }
        }))

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }
}