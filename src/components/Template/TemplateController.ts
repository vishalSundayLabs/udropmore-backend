import { HTTP_BAD_REQUEST, HTTP_NOT_FOUND } from "../../Constant/Master"
import { bodyTraverse } from "../../helpers/bodyTraverse"
import { ResponseError, ResponseSuccess } from "../../utils/ResponseClass"
import TemplateModel from "./TemplateModel"

export const createPrescriptionTemplate = async (req, res) => {

    const body = req.body

    if (!body.doctorId) {

        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: "Bad Request! Doctor Id must be provide.",
        }))

    }

    const reqData = {}
    bodyTraverse(reqData, body)

    try {

        const template = await TemplateModel.create(reqData)

        return res.status(HTTP_BAD_REQUEST).send(new ResponseSuccess({
            success: true,
            message: "Template created successfully.",
            result: template
        }))

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }

}

export const updatePrescriptionTemplate = async (req, res) => {

    const body = req.body
    const params = req.params

    if (!params.templateId) {

        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: "Bad Request! Template Id must be provide.",
        }))

    }

    try {

        const template = await TemplateModel.findOne({ _id: params.templateId, isDeleted: false })

        if (!template) {

            return res.status(HTTP_NOT_FOUND).send(new ResponseSuccess({
                success: false,
                message: " Template not found!"
            }))

        }

        bodyTraverse(template, body)

        await template.save()

        return res.status(HTTP_BAD_REQUEST).send(new ResponseSuccess({
            success: true,
            message: "Template update successfully.",
            result: template
        }))

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }

}

export const getPrescriptionTemplate = async (req, res) => {

    const params = req.params

    if (!params.doctorId) {

        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: "Bad Request! Doctor Id must be provide.",
        }))

    }

    try {

        const template = await TemplateModel.find({ doctorId: params.doctorId, isDeleted: false }).sort({ createdAt: -1 }).limit(3)

        return res.status(HTTP_BAD_REQUEST).send(new ResponseSuccess({
            success: true,
            message: "3 latest Template get successfully.",
            result: template
        }))

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }

}

export const deletePrescriptionTemplate = async (req, res) => {

    const params = req.params

    if (!params.templateId) {

        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: "Bad Request! Template Id must be provide.",
        }))

    }

    try {

        const template = await TemplateModel.findOne({ _id: params.templateId, isDeleted: false })

        template.isDeleted = true

        await template.save()

        return res.status(HTTP_BAD_REQUEST).send(new ResponseSuccess({
            success: true,
            message: "Template Deleted successfully.",
            result: template
        }))

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }

}