import { HTTP_BAD_REQUEST, HTTP_OK } from "../../utils/Constants"
import { ResponseError, ResponseSuccess } from "../../utils/ResponseClass"
import UserDetailsModel from "./UserDetailsModel"

export const createUserDetails = async (req, res) => {
    const body = req.body
    if (!body.motherId) {
        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: "Bad request! Mother id must be provide."
        }))
    }
    const reqData = {
        userId: body.motherId,
        dateOfBirth: body.dateOfBirth,
        address: body.address,
        height: body.height,
        weight: body.weight,
        lastMenstrualDate: body.lastMenstrualDate,
        dueDate: body.dueDate,
        maritalStatus: body.maritalStatus,
        occupation: body.occupation,
        education: body.education,
        pregnancyWeek: body.pregnancyWeek,
        husbandDetails: body.husbandDetails,
        refBy: body.refBy,
        previousVisit: body.previousVisit,
        language: body.language,
        emergencyMobileNumber: body.emergencyMobileNumber,
        emergencyName: body.emergencyName,
        createdBy: req.userId,
    }

    try {
        const userDetails = await UserDetailsModel.create(reqData)

        return res.status(HTTP_OK).send(new ResponseSuccess({
            success: true,
            message: "User details create successfully.",
            result: userDetails
        }))

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }

}

export const updateUserDetails = async (req, res) => {
    const body = req.body

    if (!body.motherId) {
        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: "Bad request! Mother id must be provide."
        }))
    }

    try {

        const userDetails = await UserDetailsModel.findOne({ _id: body.motherId, isDeleted: false })

        if (body.dateOfBirth) userDetails.dateOfBirth = body.dateOfBirth
        if (body.address) userDetails.address = body.address
        if (body.height) userDetails.height = body.height
        if (body.weight) userDetails.weight = body.weight
        if (body.lastMenstrualDate) userDetails.lastMenstrualDate = body.lastMenstrualDate
        if (body.dueDate) userDetails.dueDate = body.dueDate
        if (body.maritalStatus) userDetails.maritalStatus = body.maritalStatus
        if (body.education) userDetails.education = body.education
        if (body.pregnancyWeek) userDetails.pregnancyWeek = body.pregnancyWeek
        if (body.husbandDetails) userDetails.husbandDetails = body.husbandDetails
        if (body.refBy) userDetails.refBy = body.refBy
        if (body.language) userDetails.language = body.language
        if (body.emergencyMobileNumber) userDetails.emergencyMobileNumber = body.emergencyMobileNumber
        if (body.emergencyName) userDetails.emergencyName = body.emergencyName
        if (body.previousVisit) userDetails.previousVisit = body.previousVisit

        userDetails.updatedBy = req.userId
        await userDetails.save()

        return res.status(HTTP_OK).send(new ResponseSuccess({
            success: true,
            message: "User details update successfully.",
            result: userDetails
        }))

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }

}