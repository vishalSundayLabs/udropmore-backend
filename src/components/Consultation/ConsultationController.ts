import dayjs = require("dayjs")
import moment = require("moment")
import { toDoTasks } from "../../Constant/DoctorToDoTask"
import { lifeStyleRecommendation } from "../../Constant/LEPRecommendation/lifestyle"
import { HTTP_BAD_REQUEST, HTTP_NOT_FOUND, HTTP_OK } from "../../Constant/Master"
import { masterAntenatalTest } from "../../Constant/MasterAntenatalTest"
import { bodyTraverse } from "../../helpers/bodyTraverse"
import { calculateCurrentWeekAndDays } from "../../helpers/calculateCurrentWeekHelper"
import { ResponseError, ResponseSuccess } from "../../utils/ResponseClass"
import { sampleAntentalTest } from "../../utils/sampleAntenatalTest"
import { sampleCurrentObservastion } from "../../utils/sampleCurrentObservastion"
import { additionalTests, standardTests } from "../../utils/sampleNextAntenatalTest"
import { sampleTreatment } from "../../utils/sampleTreatment"
import AppointmentModel from "../Appointment/AppointmentModel"
import LeapScoreModel from "../LeapScore/LeapScoreModel"
import { getDayOrTimeFromDate } from "../Users/UserController"
import UserModel from "../Users/UserModel"
import antenatalTestModel from "./AntenatalTestModel"
import CurrentObservastionModel from "./CurrentObservastionModel"
import NextAntenatalTestModel from "./NextAntenatalTestModel"
import TreatmentModel from "./TreatmentModel"

export const getWeeklyTestOrAppointmentsByLmp = async (req, res) => {
    console.log(req.body)
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

        currentObservastionData.isDraft = body.isDraft ? body.isDraft : body.isDraft
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

            currentObservastionData.currentObservastion = actualData

        }

        for (let j = 0; j < currentObservastionData.currentObservastion.length; j++) {

            const date = currentObservastionData.currentObservastion[j].date ? currentObservastionData.currentObservastion[j].date : new Date(moment(body.lmpDate).add(currentObservastionData.currentObservastion[j].week, 'weeks').format('YYYY-MM-DD'))
            const consultationDate = calculateCurrentWeekAndDays(date)
            let diffWeek = (week - consultationDate.week) ? week - consultationDate.week : 1
            let diffDays = days - consultationDate.days
            const weekAndDay = `${currentObservastionData.currentObservastion[j].week} week ${Math.floor((diffDays % diffWeek) % 7)} days`
            currentObservastionData.currentObservastion[j].weekAndDays = weekAndDay
            currentObservastionData.currentObservastion[j].date = new Date(date)
            currentObservastionData.currentObservastion[j].dating.usg.value.week = currentObservastionData.currentObservastion[j].dating.usg.value.week ? currentObservastionData.currentObservastion[j].dating.usg.value.week : currentObservastionData.currentObservastion[j].week
            currentObservastionData.currentObservastion[j].dating.usg.value.days = currentObservastionData.currentObservastion[j].dating.usg.value.days ? currentObservastionData.currentObservastion[j].dating.usg.value.days : Math.floor((diffDays % diffWeek) % 7)
            currentObservastionData.currentObservastion[j].dating.clinical.value.week = currentObservastionData.currentObservastion[j].dating.clinical.value.week ? currentObservastionData.currentObservastion[j].dating.clinical.value.week : currentObservastionData.currentObservastion[j].week
            currentObservastionData.currentObservastion[j].dating.clinical.value.days = currentObservastionData.currentObservastion[j].dating.clinical.value.days ? currentObservastionData.currentObservastion[j].dating.clinical.value.days : Math.floor((diffDays % diffWeek) % 7)

        }

        const currentDate = getDayOrTimeFromDate(new Date())
        const currentAppointment = await AppointmentModel.findOne({ motherId: body.motherId, doctorId: body.doctorId, appointmentDateAndTime: { $gte: new Date(currentDate.fullDate), $lt: new Date(currentDate.nextDate) }, status: "CONFIRMED" }).sort({ createdAt: 1 })

        if (currentAppointment) {
            const appointmentWeek = calculateCurrentWeekAndDays(body.lmpDate, currentAppointment.appointmentDateAndTime)
            if (week == appointmentWeek.week) {

                const lastIndex = currentObservastionData.currentObservastion.length - 1
                currentObservastionData.currentObservastion[lastIndex].actualDate = currentObservastionData.currentObservastion[lastIndex].actualDate ? currentObservastionData.currentObservastion[lastIndex].actualDate : currentAppointment.appointmentDateAndTime
                currentObservastionData.currentObservastion[lastIndex].actualWeekAndDays = currentObservastionData.currentObservastion[lastIndex].actualWeekAndDays ? currentObservastionData.currentObservastion[lastIndex].actualWeekAndDays : `${appointmentWeek.week} week ${(appointmentWeek.days % appointmentWeek.week) % 7} days`
                currentObservastionData.currentObservastion[lastIndex].dating.usg.value.week = currentObservastionData.currentObservastion[lastIndex].dating.usg.value.week ? currentObservastionData.currentObservastion[lastIndex].dating.usg.value.week : appointmentWeek.week
                currentObservastionData.currentObservastion[lastIndex].dating.usg.value.days = currentObservastionData.currentObservastion[lastIndex].dating.usg.value.days ? currentObservastionData.currentObservastion[lastIndex].dating.usg.value.days : Math.floor((appointmentWeek.days % appointmentWeek.week) % 7)
                currentObservastionData.currentObservastion[lastIndex].dating.clinical.value.week = currentObservastionData.currentObservastion[lastIndex].dating.clinical.value.week ? currentObservastionData.currentObservastion[lastIndex].dating.clinical.value.week : appointmentWeek.week
                currentObservastionData.currentObservastion[lastIndex].dating.clinical.value.days = currentObservastionData.currentObservastion[lastIndex].dating.clinical.value.days ? currentObservastionData.currentObservastion[lastIndex].dating.clinical.value.days : Math.floor((appointmentWeek.days % appointmentWeek.week) % 7)

            }
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

        antenatalTest.isDraft = body.isDraft ? body.isDraft : body.isDraft
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

        for (let k = 0; k < masterAntenatalTest.length; k++) {

            const tempTest = { ...masterAntenatalTest[k] }

            if (tempTest.week.includes(week)) {

                tempTest.week = [tempTest.week[tempTest.week.length - 1]]
                testOfTheWeek.push(tempTest)
                break;

            } else {

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

        const isAvailableAntenatalTest = await antenatalTestModel.findOne({ userId: body.motherId, doctorId: body.doctorId, isDeleted: false })

        if (!isAvailableAntenatalTest) {

            return res.status(HTTP_NOT_FOUND).send(new ResponseError({
                success: false,
                message: "Antenatal test not found! So you are not able to upload test files.",
            }))

        }

        if (req.files.length == 0) {

            return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
                success: false,
                message: "Bad Request! Test file not upload by you.",
            }))

        }

        const antentalTestFilesUrl = req.files.map((item) => item.location)

        return res.status(HTTP_OK).send(new ResponseSuccess({
            success: true,
            message: "update Antenatal Test successfully .",
            result: { antenatalTestId: isAvailableAntenatalTest._id, motherId: body.motherId, doctorId: body.doctorId, testFilesUrl: antentalTestFilesUrl }
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

        treatment.isDraft = body.isDraft ? body.isDraft : body.isDraft
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

    if (!body.motherId || !body.doctorId || !body.lmpDate) {

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

        const { week, days } = calculateCurrentWeekAndDays(body.lmpDate)
        const tempTreatment = treatment.treatment

        const weeks = [5, 8, 12, 15, 18, 21, 24, 26, 28, 30, 32, 34, 36, 37, 38, 39, 40]

        let previousWeekIndex = getPreviousWeekIndex(week) == -1 ? 0 : getPreviousWeekIndex(week)

        const endIndex = tempTreatment.length - 1

        if (tempTreatment[endIndex].week !== week) {

            const prevData = createPreviousWeekData(week, sampleTreatment.treatment[0])
            const actualData = []

            for (let j = 0; j < prevData.length; j++) {

                if (j < tempTreatment.length && tempTreatment[j].week == prevData[j].week) {
                    actualData.push(tempTreatment[j])
                } else {
                    actualData.push(prevData[j])
                }

            }

            treatment.treatment = actualData

        }

        for (let j = 0; j < treatment.treatment.length; j++) {

            const date = treatment.treatment[j].date ? treatment.treatment[j].date : new Date(moment(body.lmpDate).add(treatment.treatment[j].week, 'weeks').format('YYYY-MM-DD'))
            const consultationDate = calculateCurrentWeekAndDays(date)
            let diffWeek = week - consultationDate.week
            let diffDays = days - consultationDate.days
            treatment.treatment[j].weekAndDays = `${treatment.treatment[j].week} week ${Math.floor((diffDays % diffWeek) % 7)} days`
            treatment.treatment[j].date = new Date(date)
            // treatment.treatment[j].followUp.testName = findWeeklyTests(standardTests,treatment.treatment[j].week).testName

        }

        const antenatalTestData = await antenatalTestModel.findOne({ userId: body.motherId, doctorId: body.doctorId, isDeleted: false })

        if (antenatalTestData) {

            const data = antenatalTestData.antenatalTest

            for (let i = 0; i < data.length; i++) {
                const uniqueTests = {}
                for (let key in data[i]) {
                    if (key === "tests" && data[i][key]) {
                        for (let testKey in data[i][key]) {
                            const testVal = data[i][key];
                            if (testVal[testKey].followUp) {
                                uniqueTests[testVal[testKey].testName] = { name: testVal[testKey].testName, value: testVal[testKey].followUp }
                            }
                        }
                    }
                }

                const treatmentDataIndex = treatment.treatment.findIndex((item) => item.week == data[i].week)

                if (treatmentDataIndex >= 0) {

                    treatment.treatment[treatmentDataIndex].followUp.testName.forEach(item => {
                        if (!uniqueTests[item.name]) {
                            uniqueTests[item.name] = { name: item.name, value: item.value }
                        }
                    })

                    treatment.treatment[treatmentDataIndex].followUp.testName = Object.values(uniqueTests)

                }
            }
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

        nextAntenatalTest.isDraft = body.isDraft ? body.isDraft : body.isDraft
        nextAntenatalTest.updatedBy = req.userId

        await nextAntenatalTest.save()

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

    if (!body.motherId || !body.doctorId || !body.lmpDate) {

        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: "Bad Request! Mother Id , Doctor Id or date must be provide.",
        }))

    }

    try {

        const nextAntenatalTest = await NextAntenatalTestModel.findOne({ userId: body.motherId, doctorId: body.doctorId, isDeleted: false })

        const { week, days } = calculateCurrentWeekAndDays(body.lmpDate)
        const oldTest = []

        if (nextAntenatalTest.nextAntenatalTest.length > 0) {
            oldTest.push(nextAntenatalTest.nextAntenatalTest.filter((test) => test.week == week ?? test)[0])
        }

        let additionalTest = findWeeklyTests(additionalTests, week + 1)
        let standardTest = findWeeklyTests(standardTests, week)
        let endIndex = additionalTest.week.length - 1
        let nextWeek = additionalTest.week[endIndex]

        if (week >= nextWeek) {
            additionalTest = findWeeklyTests(additionalTests, week + 2)
            endIndex = additionalTest.week.length - 1
            nextWeek = additionalTest.week[endIndex]
        }

        const responseData = {
            week: oldTest[0] ? oldTest[0].week : standardTest.week[standardTest.week.length - 1],
            nextWeek: nextWeek,
            standardTest: oldTest[0] ? oldTest[0].standardTest : standardTest.testName,
            additionalTest: oldTest[0] ? oldTest[0].additionalTest : additionalTest.testName,
            motherId: body.motherId,
            doctorId: body.doctorId
        }

        return res.status(HTTP_OK).send(new ResponseSuccess({
            success: true,
            message: "find Next Antenatal Test data successfully .",
            result: responseData
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

//next consultation date and tests

export const getNextConsultationDateAndTests = async (req, res) => {

    const body = req.body

    if (!body.motherId || !body.lmpDate) {

        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: "Bad Request! Mother Id , Date must be provide.",
        }))

    }

    try {

        const mother = await UserModel.findOne({ _id: body.motherId, isDeleted: false })

        if (!mother) {

            return res.status(HTTP_NOT_FOUND).send(new ResponseError({
                success: false,
                message: "Mother not found!"
            }))

        }

        const { week, days } = calculateCurrentWeekAndDays(body.lmpDate)
        let standardTest = findWeeklyTests(standardTests, week + 1)
        let endIndex = standardTest.week.length - 1
        let nextWeek = standardTest.week[endIndex]

        if (week >= nextWeek) {
            standardTest = findWeeklyTests(standardTests, week + 2)
            endIndex = standardTest.week.length - 1
            nextWeek = standardTest.week[endIndex]
        }

        const responseData = {
            nextConsultationDate: new Date(moment(body.lmpDate).add(nextWeek, 'weeks').format('YYYY-MM-DD')),
            currentWeek: week,
            nextWeek: nextWeek,
            tests: standardTest.testName
        }

        return res.status(HTTP_OK).send(new ResponseSuccess({
            success: true,
            message: "Next Consultation Date And Tests find successfully .",
            result: responseData
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
//upload weekly tests

export const uploadWeeklyReport = async (req, res) => {

    try {

        if (req.files.length == 0) {

            return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
                success: false,
                message: "Bad Request! file not upload by you.",
            }))

        }

        const filesUrl = req.files.map((item) => item.location)

        return res.status(HTTP_OK).send(new ResponseSuccess({
            success: true,
            message: "upload weekly Report successfully .",
            result: filesUrl
        }))

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }

}

// LEP Recommendation

export const LEPRecommendation = async (req, res) => {

    const params = req.params

    if (!params.motherId || !params.category || !params.week) {
        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: "Bad Request! Mother Id , category , week must be provide.",
        }))
    }

    try {

        let leapScoreAnswer = await LeapScoreModel.findOne({ userId: params.motherId, pregnancyWeek: params.week }).select({ details: true })
        console.log(leapScoreAnswer)
        const LEPRecommendationData = getSelectedAnswer(leapScoreAnswer.details[params.category.toLowerCase()].answers)

        return res.status(HTTP_OK).send(new ResponseSuccess({
            success: true,
            message: "LEP Recommendation get successfully",
            result: LEPRecommendationData
        }))

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }

}

//create previous week data
const findWeeklyTests = (tests, week) => {
    return tests.filter((test) => test.week.includes(week) ?? test)[0]
}

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

const findFollowUpTests = (data, followUpData) => {

    const followUpTests = []

    for (let i = 0; i < data.length; i++) {
        for (let key in data[i]) {
            if (key === "tests" && data[i][key]) {
                for (let testKey in data[i][key]) {
                    const testVal = data[i][key];
                    if (testVal[testKey].followUp) {
                        followUpTests.push(testVal[testKey].testName);
                    }
                }
            }
        }
    }

    return followUpTests
}

const getSelectedAnswer = (data) => {

    const listOfLEPRecommendationData = []

    for (let i = 0; i < data.length; i++) {
        const section = data[i].section;
        for (let j = 0; j < section.length; j++) {
            for (let k = 0; k < section[j].question.length; k++) {
                const questionOptions = section[j].question[k].options.option;
                const subQuestions = section[j].question[k].subQuestions;
                for (let l = 0; l < questionOptions.length; l++) {
                    const option = questionOptions[l];
                    if (option.isSelected == true || option.value) {
                        const dataList = lifeStyleRecommendation[option.recommendationIndex]
                        if (dataList) {
                            listOfLEPRecommendationData.push(dataList)
                        }
                    }
                }
                if (subQuestions != null && subQuestions.length > 0) {
                    for (let m = 0; m < subQuestions.length; m++) {
                        const subQuestionOptionKey = Object.keys(subQuestions[m].option);
                        for (let n = 0; n < subQuestionOptionKey.length; n++) {
                            const subOption =
                                subQuestions[m].option[subQuestionOptionKey[n]].options;

                            for (let p = 0; p < subOption.length; p++) {
                                if (subOption[p].isSelected == true || subOption[p].value) {

                                    if (subOption[p].value) {

                                    }

                                }
                            }
                        }
                    }
                }
            }
        }
    }

    return listOfLEPRecommendationData

};