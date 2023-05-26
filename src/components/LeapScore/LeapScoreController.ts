import { anatomy } from "../../Constant/LeapScore/Anatomy"
import { emotion } from "../../Constant/LeapScore/Emotion"
import { getLeapCategories } from "../../Constant/LeapScore/LeapCategories"
import { lifeStyle } from "../../Constant/LeapScore/LifeStyle"
import { physicalFitness } from "../../Constant/LeapScore/PhysicalFitness"
import { HTTP_BAD_REQUEST, HTTP_OK } from "../../Constant/Master"
import { ResponseError, ResponseSuccess } from "../../utils/ResponseClass"

export const getLeapScoreQuestions = async (req, res) => {

    const query = req.query

    if (!query.category) {

        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: "Bad Request! Category must be provide."
        }))

    }

    try {

        let question = null;

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

        return res.status(HTTP_OK).send(new ResponseSuccess({
            success: true,
            message: "Get All Questions successfully.",
            result: question
        }))

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }
}