import { anatomy } from "../../Constant/LeapScore/Anatomy"
import { emotion } from "../../Constant/LeapScore/Emotion"
import { lifeStyle } from "../../Constant/LeapScore/LifeStyle"
import { physicalFitness } from "../../Constant/LeapScore/PhysicalFitness"
import { HTTP_OK } from "../../Constant/Master"
import { ResponseError, ResponseSuccess } from "../../utils/ResponseClass"

export const getLeapScoreQuestions = async (req, res) => {

    try {

        return res.status(HTTP_OK).send(new ResponseSuccess({
            success: true,
            message: "Get All Questions successfully.",
            result: { lifestyle: lifeStyle, emotion: emotion, anatomy: anatomy, physicalFitness: physicalFitness }
        }))

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }
}