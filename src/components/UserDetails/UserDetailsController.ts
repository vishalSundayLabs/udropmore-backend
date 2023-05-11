import { bodyTraverse } from "../../helpers/bodyTraverse"
import { HTTP_BAD_REQUEST, HTTP_NOT_FOUND, HTTP_OK } from "../../Constant/Master"
import { ResponseError, ResponseSuccess } from "../../utils/ResponseClass"
import { diseases, whoInFamily, typeOfTermination, typeOfAbortion, typeOfDelivery, liveBirthsDescription, genderOfChild, pregnancyType, assisted, donor, flow, natureOfCycle, sourceOfVisit, language, medicines } from "../../Constant/Master"
import UserModel from "../Users/UserModel"
import UserDetailsModel from "./UserDetailsModel"
import { babyWeights, weightRange } from '../../Constant/WeightChart'
import { calculateCurrentWeekAndDays } from "../../helpers/calculateCurrentWeekHelper"

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

        const userDetails = await UserDetailsModel.findOne({ userId: body.motherId, isDeleted: false })

        const user = await UserModel.findOne({ _id: userDetails.userId, isActive: true, isDeleted: false })
        //add feilds for update 
        user.firstName = body.firstName ? body.firstName : user.firstName
        user.lastName = body.lastName ? body.lastName : user.lastName
        user.email = body.email ? body.email : user.email
        user.updatedBy = req.userId

        await user.save()

        if (!userDetails) {

            return res.status(HTTP_NOT_FOUND).send(new ResponseError({
                success: false,
                message: "user details not found."
            }))

        }
        //add feilds for update 
        bodyTraverse(userDetails, body)

        userDetails.updatedBy = req.userId

        await userDetails.save()

        return res.status(HTTP_OK).send(new ResponseSuccess({
            success: true,
            message: "User details update successfully.",
            result: { userDetails, firstName: user.firstName, lastName: user.lastName, email: user.email }
        }))

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }

}

export const getUserDetailsbyId = async (req, res) => {

    const params = req.params

    if (!params.motherId) {

        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: "Bad request! Mother id must be provide."
        }))

    }

    try {

        const userDetails = await UserDetailsModel.findOne({ userId: params.motherId, isDeleted: false })

        const user = await UserModel.findOne({ _id: userDetails.userId, isActive: true, isDeleted: false })

        if (!userDetails) {

            return res.status(HTTP_NOT_FOUND).send(new ResponseError({
                success: false,
                message: "user details not found."
            }))

        }

        const currentWeek = calculateCurrentWeekAndDays(userDetails.lastMenstrualDate)

        userDetails.pregnancyWeek = currentWeek.week

        return res.status(HTTP_OK).send(new ResponseSuccess({
            success: true,
            message: "get User details successfully.",
            result: { userDetails, firstName: user.firstName, lastName: user.lastName, email: user.email }
        }))

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }
}

export const getWeightByBmi = async (req, res) => {

    const query = req.query
    const params = req.params

    if (!params.motherId || !query.bmi) {

        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: "Bad request! Mother id or BMI must be provide."
        }))

    }

    try {

        const motherWeightGainChart = await UserDetailsModel.findOne({ userId: params.motherId }, { weightGainChart: true, weightRangeRecommendedByDoctor: true })

        if (!motherWeightGainChart) {
            return res.status(HTTP_NOT_FOUND).send(new ResponseError({
                success: true,
                message: "Weight gain chart not found!"
            }))
        }

        for (let i = 0; i < motherWeightGainChart.weightGainChart.length; i++) {

            const weightKey = motherWeightGainChart.weightGainChart[i].week

            motherWeightGainChart.weightGainChart[i].babyWeight.value = babyWeights[weightKey].babyWeight.value

        }

        let weightRangeUsingBmi = null

        if (!motherWeightGainChart.weightRangeRecommendedByDoctor || !motherWeightGainChart.weightRangeRecommendedByDoctor.length) {

            weightRangeUsingBmi = weightRange(Number(query.bmi))

        } else {

            weightRangeUsingBmi = motherWeightGainChart.weightRangeRecommendedByDoctor

        }

        return res.status(HTTP_OK).send(new ResponseSuccess({
            success: true,
            message: "get weight data successfully.",
            result: { item: motherWeightGainChart.weightGainChart, weightGainRange: weightRangeUsingBmi }
        }))

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);
    }

}

export const getPastHistoryMasterConstant = (req, res) => {

    return res.status(HTTP_OK).send(new ResponseSuccess({
        success: true,
        message: "get Constant successfully.",
        result: {
            whoInFamily,
            diseases,
            typeOfTermination,
            typeOfAbortion,
            typeOfDelivery,
            liveBirthsDescription,
            genderOfChild,
            pregnancyType,
            assisted,
            donor,
            flow,
            natureOfCycle,
            sourceOfVisit,
            language,
            item:medicines
        }
    }))

}

export const getCurrentMedications = async (req, res) => {

    const params = req.params

    if (!params.motherId) {

        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: "Bad request! Mother id or BMI must be provide."
        }))

    }

    try {

        const currentMedicationsData = await UserDetailsModel.findOne({ userId: params.motherId, isDeleted: false }, { pastHistory: true })
        console.log(currentMedicationsData)
        return res.status(HTTP_OK).send(new ResponseSuccess({
            success: true,
            message: "get currentMedications successfully.",
            result: currentMedicationsData.pastHistory.currentPregnancy.currentMedications
        }))

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }

}