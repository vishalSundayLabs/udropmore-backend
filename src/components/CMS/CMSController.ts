import { HTTP_BAD_REQUEST, HTTP_NOT_FOUND } from "../../Constant/Master"
import { bodyTraverse } from "../../helpers/bodyTraverse"
import { pagination } from "../../helpers/pagination"
import { ResponseError, ResponseSuccess } from "../../utils/ResponseClass"
import CMSModel from "./CMSModel"

export const createWeeklyContent = async (req, res) => {

    const body = req.body

    const reqData = {}

    bodyTraverse(reqData, body)

    try {

        const weeklyContent = await CMSModel.create(reqData)

        return res.status(HTTP_NOT_FOUND).send(new ResponseSuccess({
            success: true,
            message: "Create weekly data successfully .",
            result: weeklyContent
        }))

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }

}

export const updateWeeklyContent = async (req, res) => {

    const body = req.body

    if (!body.contentId) {

        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: "Bad Request! Content Id must be provide."
        }))

    }

    try {

        const weeklyContent = await CMSModel.findOne({ week: body.week })

        if (!weeklyContent) {

            return res.status(HTTP_NOT_FOUND).send(new ResponseSuccess({
                success: true,
                message: "Weekly data not found!"
            }))

        }

        bodyTraverse(weeklyContent, body)

        await weeklyContent.save()

        return res.status(HTTP_NOT_FOUND).send(new ResponseSuccess({
            success: true,
            message: "update Weekly data successfully .",
            result: weeklyContent
        }))

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }

}

export const getWeeklyContent = async (req, res) => {

    const query = req.query

    query.isDeleted = false
    console.log(query)
    const { limit, skips } = pagination(query)
    console.log()
    try {

        const weeklyContent = await CMSModel.find(query).skip(skips).limit(limit)

        if (weeklyContent.length == 0) {

            return res.status(HTTP_NOT_FOUND).send(new ResponseSuccess({
                success: true,
                message: "Weekly data not found!"
            }))

        }

        return res.status(HTTP_NOT_FOUND).send(new ResponseSuccess({
            success: true,
            message: "get Weekly data successfully .",
            result: weeklyContent
        }))

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }

}