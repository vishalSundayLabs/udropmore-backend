import { Dayjs } from "dayjs"
import dayjs = require("dayjs")
import { toDoTasks } from "../../Constant/DoctorToDoTask"
import { HTTP_BAD_REQUEST, HTTP_NOT_FOUND, HTTP_OK } from "../../Constant/Master"
import { bodyTraverse } from "../../helpers/bodyTraverse"
import { ResponseError, ResponseSuccess } from "../../utils/ResponseClass"
import { sampleCurrentObservastion } from "../../utils/sampleCurrentObservastion"
import { getDayOrTimeFromDate } from "../Users/UserController"
import antenatalTestModel from "./AntenatalTestModel"
import CurrentObservastionModel from "./CurrentObservastionModel"
import NextAntenatalTestModel from "./NextAntenatalTestModel"
import TreatmentModel from "./TreatmentModel"

export const getWeeklyTestOrAppointmentsByLmp = async (req, res) => {

    const body = req.body

    if (!body.lmpDate) {

        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: "Bad Request! LMP must be provide.",
        }))

    }

    try {

        const lmpDays = getDayOrTimeFromDate(body.lmpDate)
        let task;

        for (let i = 0; i < toDoTasks.length - 1; i++) {

            const tasks = toDoTasks[i]
            const nextTask = toDoTasks[i + 1]

            if (lmpDays.noOfDays >= tasks.daysFromLMP && lmpDays.noOfDays < nextTask.daysFromLMP) {
                task = tasks
            }

        }

        return res.status(HTTP_OK).send(new ResponseSuccess({
            success: true,
            message: `Tests according to this lmp date : ${body.lmpDate}.`,
            result: task
        }))

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }

}
//start current observastion
export const createCurrentObservastion = async (req, res) => {

    const body = req.body

    if (!body.motherId || !body.doctorId) {

        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: "Bad Request! Mother Id or Doctor Id must be provide.",
        }))

    }

    const reqData = {
        userId: body.motherId,
        createdBy: req.userId
    }

    bodyTraverse(reqData, body)

    try {

        const currentObservastionData = await CurrentObservastionModel.create(reqData)

        return res.status(HTTP_OK).send(new ResponseSuccess({
            success: true,
            message: "Create Current Observastion successfully .",
            result: currentObservastionData
        }))

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }

}

export const updateCurrentObservastion = async (req, res) => {

    const body = req.body

    if (!body.motherId || !body.doctorId || !body.date) {

        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: "Bad Request! Mother Id , Doctor Id or date must be provide.",
        }))

    }

    try {

        const currentObservastionData = await CurrentObservastionModel.findOne({ userId: body.motherId, doctorId: body.doctorId, isDeleted: false })

        if (!currentObservastionData) {

            return res.status(HTTP_NOT_FOUND).send(new ResponseSuccess({
                success: true,
                message: "Current Observastion Data not found!",
            }))

        }

        bodyTraverse(currentObservastionData, body)

        currentObservastionData.updatedBy = req.userId

        await currentObservastionData.save()

        return res.status(HTTP_OK).send(new ResponseSuccess({
            success: true,
            message: "update Current Observastion data successfully .",
            result: currentObservastionData
        }))

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }
}

export const getCurrentObservastion = async (req, res) => {

    const body = req.body

    if (!body.motherId || !body.doctorId || !body.lmpDate) {

        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: "Bad Request! Mother Id , Doctor Id or LMP Date must be provide.",
        }))

    }

    try {

        const currentObservastionData = await CurrentObservastionModel.findOne({ userId: body.motherId, doctorId: body.doctorId, isDeleted: false })

        if (!currentObservastionData) {

            return res.status(HTTP_NOT_FOUND).send(new ResponseSuccess({
                success: true,
                message: "Current Observastion not found!",
            }))

        }

        const currentDate = dayjs(new Date())

        const week = currentDate.diff(body.lmpDate, "week") + 1

        const currentObservastionDataTemp = currentObservastionData.currentObservastion

        const weeks = [5, 8, 12, 15, 18, 21, 24, 26, 28, 30, 32, 34, 36, 37, 38, 39, 40]

        let previousWeekIndex = 0;

        for (let i = 0; i < weeks.length; i++) {

            if (weeks[i] >= week) {

                previousWeekIndex = i - 1
                break;

            }

        }

        const endIndex = currentObservastionDataTemp.length - 1

        if (currentObservastionDataTemp[endIndex].week !== weeks[previousWeekIndex]) {

            const prevData = createPreviousWeekData(week, currentObservastionData.currentObservastion)

            const actualData = []

            for (let j = 0; j < prevData.length; j++) {

                if (j < currentObservastionDataTemp.length && currentObservastionDataTemp[j].week == prevData[j].week) {
                    actualData.push(currentObservastionDataTemp[j])
                } else {
                    actualData.push(prevData[j])
                }

            }

            const currentObservastionTemp = sampleCurrentObservastion.currentObservastion[0]

            currentObservastionTemp.week = weeks[previousWeekIndex + 1]

            actualData.push(currentObservastionTemp)

            for (let i = 0; i < actualData.length; i++) {

                if (!actualData[i].riskFactor.length) {
                    actualData[i].riskFactor = sampleCurrentObservastion.currentObservastion[0].riskFactor
                }

                if (!actualData[i].complaints.length) {
                    actualData[i].complaints = sampleCurrentObservastion.currentObservastion[0].complaints
                }

            }

            currentObservastionData.currentObservastion = actualData

        } else {

            const currentObservastionTemp = sampleCurrentObservastion.currentObservastion[0]

            currentObservastionTemp.week = weeks[previousWeekIndex + 1]

            currentObservastionData.currentObservastion.push(currentObservastionTemp)

        }

        await currentObservastionData.save()

        return res.status(HTTP_OK).send(new ResponseSuccess({
            success: true,
            message: "get Current Observastion Data successfully .",
            result: currentObservastionData
        }))

    } catch (error) {
        console.log(error)
        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }
}
//end

//start Antenatal test
export const createAntenatalTest = async (req, res) => {

    const body = req.body

    if (!body.motherId || !body.doctorId) {

        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: "Bad Request! Mother Id or Doctor Id must be provide.",
        }))

    }

    const reqData = {
        userId: body.motherId,
        createdBy: req.userId
    }

    bodyTraverse(reqData, body)

    try {

        const antenatalTest = await antenatalTestModel.create(reqData)

        return res.status(HTTP_OK).send(new ResponseSuccess({
            success: true,
            message: "Create Antenatal Test successfully .",
            result: antenatalTest
        }))

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }

}

export const updateAntenatalTest = async (req, res) => {

    const body = req.body

    if (!body.motherId || !body.doctorId || !body.date) {

        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: "Bad Request! Mother Id , Doctor Id or date must be provide.",
        }))

    }

    try {

        const antenatalTest = await antenatalTestModel.findOne({ userId: body.motherId, doctorId: body.doctorId, isDeleted: false })

        if (!antenatalTest) {

            return res.status(HTTP_NOT_FOUND).send(new ResponseSuccess({
                success: true,
                message: "Antenatal test not found!",
            }))

        }

        bodyTraverse(antenatalTest, body)
        antenatalTest.updatedBy = req.userId

        await antenatalTest.save()

        return res.status(HTTP_OK).send(new ResponseSuccess({
            success: true,
            message: "update Antenatal Test successfully .",
            result: antenatalTest
        }))

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }

}

export const getAntenatalTest = async (req, res) => {

    const body = req.body

    if (!body.motherId || !body.doctorId || !body.date) {

        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: "Bad Request! Mother Id , Doctor Id or date must be provide.",
        }))

    }

    try {

        const antenatalTest = await antenatalTestModel.findOne({ userId: body.motherId, doctorId: body.doctorId, isDeleted: false })

        if (!antenatalTest) {

            return res.status(HTTP_NOT_FOUND).send(new ResponseSuccess({
                success: true,
                message: "Antenatal test not found!",
            }))

        }

        return res.status(HTTP_OK).send(new ResponseSuccess({
            success: true,
            message: "find Antenatal Test successfully .",
            result: antenatalTest
        }))

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }

}
//end

//start Treatment
export const createTreatment = async (req, res) => {

    const body = req.body

    if (!body.motherId || !body.doctorId) {

        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: "Bad Request! Mother Id or Doctor Id must be provide.",
        }))

    }

    const reqData = {
        userId: body.motherId,
        createdBy: req.userId
    }

    bodyTraverse(reqData, body)

    try {

        const treatment = await TreatmentModel.create(reqData)

        return res.status(HTTP_OK).send(new ResponseSuccess({
            success: true,
            message: "Create Current Observastion successfully .",
            result: treatment
        }))

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }

}

export const updateTreatment = async (req, res) => {

    const body = req.body

    if (!body.motherId || !body.doctorId || !body.date) {

        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: "Bad Request! Mother Id , Doctor Id or date must be provide.",
        }))

    }

    try {

        const treatment = await TreatmentModel.findOne({ userId: body.motherId, doctorId: body.doctorId, isDeleted: false })

        if (!treatment) {

            return res.status(HTTP_NOT_FOUND).send(new ResponseSuccess({
                success: true,
                message: "Treatment Data not found!",
            }))

        }

        bodyTraverse(treatment, body)
        treatment.updatedBy = req.userId

        await treatment.save()

        return res.status(HTTP_OK).send(new ResponseSuccess({
            success: true,
            message: "update Treatment data successfully .",
            result: treatment
        }))

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }

}

export const getTreatment = async (req, res) => {

    const body = req.body

    if (!body.motherId || !body.doctorId || !body.date) {

        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: "Bad Request! Mother Id , Doctor Id or date must be provide.",
        }))

    }

    try {

        const treatment = await TreatmentModel.findOne({ userId: body.motherId, doctorId: body.doctorId, isDeleted: false })

        if (!treatment) {

            return res.status(HTTP_NOT_FOUND).send(new ResponseSuccess({
                success: true,
                message: "Treatment Data not found!",
            }))

        }

        return res.status(HTTP_OK).send(new ResponseSuccess({
            success: true,
            message: "find Treatment data successfully .",
            result: treatment
        }))

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }

}
//end

//start Next Antenatal test
export const createNextAntenatalTest = async (req, res) => {

    const body = req.body

    if (!body.motherId || !body.doctorId) {

        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: "Bad Request! Mother Id or Doctor Id must be provide.",
        }))

    }

    const reqData = {
        userId: body.motherId,
        createdBy: req.userId
    }

    bodyTraverse(reqData, body)

    try {

        const nextAntenatalTest = await NextAntenatalTestModel.create(reqData)

        return res.status(HTTP_OK).send(new ResponseSuccess({
            success: true,
            message: "Create Next Antenatal Test successfully .",
            result: nextAntenatalTest
        }))

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }

}

export const updateNextAntenatalTest = async (req, res) => {

    const body = req.body

    if (!body.motherId || !body.doctorId || !body.date) {

        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: "Bad Request! Mother Id , Doctor Id or date must be provide.",
        }))

    }

    try {

        const nextAntenatalTest = await NextAntenatalTestModel.findOne({ userId: body.motherId, doctorId: body.doctorId, isDeleted: false })

        if (!nextAntenatalTest) {

            return res.status(HTTP_NOT_FOUND).send(new ResponseError({
                success: true,
                message: "Next Antenatal Test data not found!",
            }))

        }

        bodyTraverse(nextAntenatalTest, body)

        nextAntenatalTest.updatedBy = req.userId

        return res.status(HTTP_OK).send(new ResponseSuccess({
            success: true,
            message: "update Next Antenatal Test data successfully .",
            result: nextAntenatalTest
        }))

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }

}

export const getNextAntenatalTest = async (req, res) => {

    const body = req.body

    if (!body.motherId || !body.doctorId || !body.date) {

        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: "Bad Request! Mother Id , Doctor Id or date must be provide.",
        }))

    }

    try {

        const nextAntenatalTest = await NextAntenatalTestModel.findOne({ userId: body.motherId, doctorId: body.doctorId, isDeleted: false })

        if (!nextAntenatalTest) {

            return res.status(HTTP_NOT_FOUND).send(new ResponseError({
                success: true,
                message: "Next Antenatal test Data not found!",
            }))

        }

        return res.status(HTTP_OK).send(new ResponseSuccess({
            success: true,
            message: "find Next Antenatal Test data successfully .",
            result: nextAntenatalTest
        }))

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }

}
//end

//create previous week data

const createPreviousWeekData = (week, sample) => {

    const weeks = [5, 8, 12, 15, 18, 21, 24, 26, 28, 30, 32, 34, 36, 37, 38, 39, 40]
    const result = []
    sample.date = new Date()

    for (let i = 0; i < weeks.length; i++) {

        const dummy = { ...sample }

        if (week >= 5 && week > weeks[i]) {

            dummy.week = weeks[i]
            result.push(dummy)

        }

    }

    return result;

}