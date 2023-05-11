import { Dayjs } from "dayjs"
import dayjs = require("dayjs")
import moment = require("moment")
import { toDoTasks } from "../../Constant/DoctorToDoTask"
import { HTTP_BAD_REQUEST, HTTP_NOT_FOUND, HTTP_OK } from "../../Constant/Master"
import { masterAntenatalTest } from "../../Constant/MasterAntenatalTest"
import { bodyTraverse } from "../../helpers/bodyTraverse"
import { calculateCurrentWeekAndDays } from "../../helpers/calculateCurrentWeekHelper"
import { ResponseError, ResponseSuccess } from "../../utils/ResponseClass"
import { sampleAntentalTest } from "../../utils/sampleAntenatalTest"
import { sampleCurrentObservastion } from "../../utils/sampleCurrentObservastion"
import AppointmentModel from "../Appointment/AppointmentModel"
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

        const { week, days } = calculateCurrentWeekAndDays(body.lmpDate)

        const currentObservastionDataTemp = currentObservastionData.currentObservastion

        const weeks = [5, 8, 12, 15, 18, 21, 24, 26, 28, 30, 32, 34, 36, 37, 38, 39, 40]

        let previousWeekIndex = getPreviousWeekIndex(week) == -1 ? 0 : getPreviousWeekIndex(week)

        const endIndex = currentObservastionDataTemp.length - 1

        if (currentObservastionDataTemp[endIndex].week !== week) {

            const prevData = createPreviousWeekData(week, sampleCurrentObservastion.currentObservastion[0])
            const actualData = []

            for (let j = 0; j < prevData.length; j++) {

                if (j < currentObservastionDataTemp.length && currentObservastionDataTemp[j].week == prevData[j].week) {
                    actualData.push(currentObservastionDataTemp[j])
                } else {
                    actualData.push(prevData[j])
                }

            }

            // for (let i = 0; i < actualData.length; i++) {

            //     if (!actualData[i].riskFactor.length) {
            //         actualData[i].riskFactor = sampleCurrentObservastion.currentObservastion[0].riskFactor
            //     }

            //     if (!actualData[i].complaints.length) {
            //         actualData[i].complaints = sampleCurrentObservastion.currentObservastion[0].complaints
            //     }

            // }

            currentObservastionData.currentObservastion = actualData

        } else {

            //    if(currentObservastionData.currentObservastion[endIndex]!==week) {

            //     const currentObservastionTemp = sampleCurrentObservastion.currentObservastion[0]

            //     currentObservastionTemp.week = weeks[previousWeekIndex == 0 ? week < 5 ? 0 : previousWeekIndex + 1 : previousWeekIndex + 1]

            //     currentObservastionData.currentObservastion.push(currentObservastionTemp)

            //    }

        }

        for (let j = 0; j < currentObservastionData.currentObservastion.length; j++) {

            const date = currentObservastionData.currentObservastion[j].date ? currentObservastionData.currentObservastion[j].date : new Date(moment(body.lmpDate).add(currentObservastionData.currentObservastion[j].week, 'weeks').format('YYYY-MM-DD'))
            const consultationDate = calculateCurrentWeekAndDays(date)
            let diffWeek = week - consultationDate.week
            let diffDays = days - consultationDate.days
            currentObservastionData.currentObservastion[j].weekAndDays = `${currentObservastionData.currentObservastion[j].week} week ${Math.floor((diffDays % diffWeek) % 7)} days`
            currentObservastionData.currentObservastion[j].date = new Date(date)

        }

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

    if (!body.motherId || !body.doctorId || !body.lmpDate) {

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

        const { week, days } = calculateCurrentWeekAndDays(body.lmpDate)

        const antenatalTestTemp = antenatalTest.antenatalTest
        const testOfTheWeek = []
        console.log(week)
        for (let k = 0; k < masterAntenatalTest.length; k++) {

            const tempTest = { ...masterAntenatalTest[k] }

            if (tempTest.week.includes(week)) {
                console.log("in if")
                tempTest.week = [tempTest.week[tempTest.week.length - 1]]
                testOfTheWeek.push(tempTest)
                break;

            } else {
                console.log("in else")
                tempTest.week = [tempTest.week[tempTest.week.length - 1]]
                testOfTheWeek.push(tempTest)

            }

        }

        for (let j = 0; j < testOfTheWeek.length; j++) {

            if (antenatalTestTemp[j] && antenatalTestTemp[j].week == testOfTheWeek[j].week[0]) {
                continue;
            } else {
                testOfTheWeek[j].week = testOfTheWeek[j].week[0]
                antenatalTest.antenatalTest.push(testOfTheWeek[j])
            }

        }

        for (let j = 0; j < antenatalTest.antenatalTest.length; j++) {

            const date = antenatalTest.antenatalTest[j].date ? antenatalTest.antenatalTest[j].date : new Date(moment(body.lmpDate).add(antenatalTest.antenatalTest[j].week, 'weeks').format('YYYY-MM-DD'))
            const consultationDate = calculateCurrentWeekAndDays(date)
            let diffWeek = week - consultationDate.week
            let diffDays = days - consultationDate.days
            antenatalTest.antenatalTest[j].weekAndDays = `${antenatalTest.antenatalTest[j].week} week ${Math.floor((diffDays % diffWeek) % 7)} days`
            antenatalTest.antenatalTest[j].date = new Date(date)

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

export const uploadAntenatalTest = async (req, res) => {

    const body = req.body

    if (!body.motherId || !body.doctorId) {

        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: "Bad Request! Mother Id , Doctor Id must be provide.",
        }))

    }

    try {
        console.log(req)
        return res.status(HTTP_OK).send(new ResponseSuccess({
            success: true,
            message: "update Antenatal Test successfully .",
            result: { motherId: body.motherId, doctorId: body.doctorId, testFile: req.files }
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
            message: "Create Treatment data successfully .",
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
            message: "Update Treatment data successfully .",
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

    const weeks = [[3, 4, 6, 5], [7, 9, 10, 8], [11, 13, 12], [14, 16, 15], [17, 19, 18], [20, 22, 21], [23, 24], [25, 26], [27, 28], [29, 30], [31, 32], [33, 34], [35, 36], [37], [38], [39], [40]]
    const result = []

    for (let i = 0; i < weeks.length; i++) {

        const dummy = { ...sample }
        if (weeks[i].indexOf(week) != -1) {

            dummy.week = weeks[i][weeks[i].length - 1]
            result.push(dummy)
            break;

        } else {

            dummy.week = weeks[i][weeks[i].length - 1]
            result.push(dummy)
        }

    }

    // if (week < 5 && result.length == 0) {

    //     const dummy = { ...sample }

    //     dummy.week = weeks[0]

    //     result.push(dummy)

    // }

    if (result.length > 0) {
        result[result.length - 1].date = new Date()
    }

    return result;

}

const getPreviousWeekIndex = (currentWeek) => {

    var previousWeekIndex = 0
    const weeks = [5, 8, 12, 15, 18, 21, 24, 26, 28, 30, 32, 34, 36, 37, 38, 39, 40]

    for (let i = 0; i < weeks.length; i++) {

        if (weeks[i] >= currentWeek) {

            previousWeekIndex = i - 1
            break;

        }

    }
    return previousWeekIndex
}