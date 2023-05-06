"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNextAntenatalTest = exports.updateNextAntenatalTest = exports.createNextAntenatalTest = exports.getTreatment = exports.updateTreatment = exports.createTreatment = exports.getAntenatalTest = exports.updateAntenatalTest = exports.createAntenatalTest = exports.getCurrentObservastion = exports.updateCurrentObservastion = exports.createCurrentObservastion = exports.getWeeklyTestOrAppointmentsByLmp = void 0;
const DoctorToDoTask_1 = require("../../Constant/DoctorToDoTask");
const Master_1 = require("../../Constant/Master");
const MasterAntenatalTest_1 = require("../../Constant/MasterAntenatalTest");
const bodyTraverse_1 = require("../../helpers/bodyTraverse");
const calculateCurrentWeekHelper_1 = require("../../helpers/calculateCurrentWeekHelper");
const ResponseClass_1 = require("../../utils/ResponseClass");
const sampleAntenatalTest_1 = require("../../utils/sampleAntenatalTest");
const sampleCurrentObservastion_1 = require("../../utils/sampleCurrentObservastion");
const UserController_1 = require("../Users/UserController");
const AntenatalTestModel_1 = require("./AntenatalTestModel");
const CurrentObservastionModel_1 = require("./CurrentObservastionModel");
const NextAntenatalTestModel_1 = require("./NextAntenatalTestModel");
const TreatmentModel_1 = require("./TreatmentModel");
const getWeeklyTestOrAppointmentsByLmp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!body.lmpDate) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad Request! LMP must be provide.",
        }));
    }
    try {
        const lmpDays = (0, UserController_1.getDayOrTimeFromDate)(body.lmpDate);
        let task;
        for (let i = 0; i < DoctorToDoTask_1.toDoTasks.length - 1; i++) {
            const tasks = DoctorToDoTask_1.toDoTasks[i];
            const nextTask = DoctorToDoTask_1.toDoTasks[i + 1];
            if (lmpDays.noOfDays >= tasks.daysFromLMP && lmpDays.noOfDays < nextTask.daysFromLMP) {
                task = tasks;
            }
        }
        return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: `Tests according to this lmp date : ${body.lmpDate}.`,
            result: task
        }));
    }
    catch (error) {
        let response = new ResponseClass_1.ResponseError({
            message: "Something went wrong",
            error: error.message,
        });
        return res.status(500).json(response);
    }
});
exports.getWeeklyTestOrAppointmentsByLmp = getWeeklyTestOrAppointmentsByLmp;
//start current observastion
const createCurrentObservastion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!body.motherId || !body.doctorId) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad Request! Mother Id or Doctor Id must be provide.",
        }));
    }
    const reqData = {
        userId: body.motherId,
        createdBy: req.userId
    };
    (0, bodyTraverse_1.bodyTraverse)(reqData, body);
    try {
        const currentObservastionData = yield CurrentObservastionModel_1.default.create(reqData);
        return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "Create Current Observastion successfully .",
            result: currentObservastionData
        }));
    }
    catch (error) {
        let response = new ResponseClass_1.ResponseError({
            message: "Something went wrong",
            error: error.message,
        });
        return res.status(500).json(response);
    }
});
exports.createCurrentObservastion = createCurrentObservastion;
const updateCurrentObservastion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!body.motherId || !body.doctorId || !body.date) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad Request! Mother Id , Doctor Id or date must be provide.",
        }));
    }
    try {
        const currentObservastionData = yield CurrentObservastionModel_1.default.findOne({ userId: body.motherId, doctorId: body.doctorId, isDeleted: false });
        if (!currentObservastionData) {
            return res.status(Master_1.HTTP_NOT_FOUND).send(new ResponseClass_1.ResponseSuccess({
                success: true,
                message: "Current Observastion Data not found!",
            }));
        }
        (0, bodyTraverse_1.bodyTraverse)(currentObservastionData, body);
        currentObservastionData.updatedBy = req.userId;
        yield currentObservastionData.save();
        return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "update Current Observastion data successfully .",
            result: currentObservastionData
        }));
    }
    catch (error) {
        let response = new ResponseClass_1.ResponseError({
            message: "Something went wrong",
            error: error.message,
        });
        return res.status(500).json(response);
    }
});
exports.updateCurrentObservastion = updateCurrentObservastion;
const getCurrentObservastion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!body.motherId || !body.doctorId || !body.lmpDate) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad Request! Mother Id , Doctor Id or LMP Date must be provide.",
        }));
    }
    try {
        const currentObservastionData = yield CurrentObservastionModel_1.default.findOne({ userId: body.motherId, doctorId: body.doctorId, isDeleted: false });
        if (!currentObservastionData) {
            return res.status(Master_1.HTTP_NOT_FOUND).send(new ResponseClass_1.ResponseSuccess({
                success: true,
                message: "Current Observastion not found!",
            }));
        }
        const { week, days } = (0, calculateCurrentWeekHelper_1.calculateCurrentWeekAndDays)(body.lmpDate);
        const currentObservastionDataTemp = currentObservastionData.currentObservastion;
        const weeks = [5, 8, 12, 15, 18, 21, 24, 26, 28, 30, 32, 34, 36, 37, 38, 39, 40];
        let previousWeekIndex = getPreviousWeekIndex(week) == -1 ? 0 : getPreviousWeekIndex(week);
        const endIndex = currentObservastionDataTemp.length - 1;
        console.log(week, weeks[previousWeekIndex], previousWeekIndex, currentObservastionDataTemp[endIndex].week, week);
        if (currentObservastionDataTemp[endIndex].week !== week) {
            const prevData = createPreviousWeekData(week, sampleCurrentObservastion_1.sampleCurrentObservastion.currentObservastion[0]);
            console.log("in if", prevData);
            const actualData = [];
            for (let j = 0; j < prevData.length; j++) {
                if (j < currentObservastionDataTemp.length && currentObservastionDataTemp[j].week == prevData[j].week) {
                    actualData.push(currentObservastionDataTemp[j]);
                }
                else {
                    actualData.push(prevData[j]);
                }
            }
            // if (week >= 5) {
            //     const currentObservastionTemp = sampleCurrentObservastion.currentObservastion[0]
            //     currentObservastionTemp.week = weeks[previousWeekIndex + 1]
            //     actualData.push(currentObservastionTemp)
            // }
            // for (let i = 0; i < actualData.length; i++) {
            //     if (!actualData[i].riskFactor.length) {
            //         actualData[i].riskFactor = sampleCurrentObservastion.currentObservastion[0].riskFactor
            //     }
            //     if (!actualData[i].complaints.length) {
            //         actualData[i].complaints = sampleCurrentObservastion.currentObservastion[0].complaints
            //     }
            // }
            for (let j = 0; j < actualData.length; j++) {
                const date = actualData[j].date ? actualData[j].date : new Date();
                const consultationDate = (0, calculateCurrentWeekHelper_1.calculateCurrentWeekAndDays)(date);
                const diffWeek = week - consultationDate.week;
                const diffDays = days - consultationDate.days;
                actualData[j].weekAndDays = `${diffWeek} week ${diffDays % diffWeek} days`;
            }
            currentObservastionData.currentObservastion = actualData;
        }
        else {
            console.log("in else");
            // const currentObservastionTemp = sampleCurrentObservastion.currentObservastion[0]
            // currentObservastionTemp.week = weeks[previousWeekIndex == 0 ? week < 5 ? 0 : previousWeekIndex + 1 : previousWeekIndex + 1]
            // currentObservastionData.currentObservastion.push(currentObservastionTemp)
        }
        // await currentObservastionData.save()
        return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "get Current Observastion Data successfully .",
            result: currentObservastionData
        }));
    }
    catch (error) {
        console.log(error);
        let response = new ResponseClass_1.ResponseError({
            message: "Something went wrong",
            error: error.message,
        });
        return res.status(500).json(response);
    }
});
exports.getCurrentObservastion = getCurrentObservastion;
//end
//start Antenatal test
const createAntenatalTest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!body.motherId || !body.doctorId) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad Request! Mother Id or Doctor Id must be provide.",
        }));
    }
    const reqData = {
        userId: body.motherId,
        createdBy: req.userId
    };
    (0, bodyTraverse_1.bodyTraverse)(reqData, body);
    try {
        const antenatalTest = yield AntenatalTestModel_1.default.create(reqData);
        return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "Create Antenatal Test successfully .",
            result: antenatalTest
        }));
    }
    catch (error) {
        let response = new ResponseClass_1.ResponseError({
            message: "Something went wrong",
            error: error.message,
        });
        return res.status(500).json(response);
    }
});
exports.createAntenatalTest = createAntenatalTest;
const updateAntenatalTest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!body.motherId || !body.doctorId || !body.date) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad Request! Mother Id , Doctor Id or date must be provide.",
        }));
    }
    try {
        const antenatalTest = yield AntenatalTestModel_1.default.findOne({ userId: body.motherId, doctorId: body.doctorId, isDeleted: false });
        if (!antenatalTest) {
            return res.status(Master_1.HTTP_NOT_FOUND).send(new ResponseClass_1.ResponseSuccess({
                success: true,
                message: "Antenatal test not found!",
            }));
        }
        (0, bodyTraverse_1.bodyTraverse)(antenatalTest, body);
        antenatalTest.updatedBy = req.userId;
        yield antenatalTest.save();
        return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "update Antenatal Test successfully .",
            result: antenatalTest
        }));
    }
    catch (error) {
        let response = new ResponseClass_1.ResponseError({
            message: "Something went wrong",
            error: error.message,
        });
        return res.status(500).json(response);
    }
});
exports.updateAntenatalTest = updateAntenatalTest;
const getAntenatalTest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!body.motherId || !body.doctorId || !body.lmpDate) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad Request! Mother Id , Doctor Id or date must be provide.",
        }));
    }
    try {
        const antenatalTest = yield AntenatalTestModel_1.default.findOne({ userId: body.motherId, doctorId: body.doctorId, isDeleted: false });
        if (!antenatalTest) {
            return res.status(Master_1.HTTP_NOT_FOUND).send(new ResponseClass_1.ResponseSuccess({
                success: true,
                message: "Antenatal test not found!",
            }));
        }
        const { week, days } = (0, calculateCurrentWeekHelper_1.calculateCurrentWeekAndDays)(body.lmpDate);
        const antenatalTestTemp = antenatalTest.antenatalTest;
        const weeks = [5, 8, 12, 15, 18, 21, 24, 26, 28, 30, 32, 34, 36, 37, 38, 39, 40];
        let previousWeekIndex = getPreviousWeekIndex(week);
        const endIndex = antenatalTestTemp.length - 1;
        const weekString = `week${week}`;
        const testOfTheWeek = MasterAntenatalTest_1.MasterAntenatalTest[weekString];
        if (antenatalTestTemp[endIndex].week !== weeks[previousWeekIndex]) {
            const prevData = createPreviousWeekData(week, MasterAntenatalTest_1.MasterAntenatalTest);
            const actualData = [];
            for (let j = 0; j < prevData.length; j++) {
                if (j < antenatalTestTemp.length && antenatalTestTemp[j].week == prevData[j].week) {
                    actualData.push(antenatalTestTemp[j]);
                }
                else {
                    actualData.push(prevData[j]);
                }
            }
            const sampleAntenatalTestTemp = sampleAntenatalTest_1.sampleAntentalTest.antenatalTest[0];
            sampleAntenatalTestTemp.week = weeks[previousWeekIndex + 1];
            actualData.push(sampleAntenatalTestTemp);
            antenatalTest.antenatalTest = actualData;
        }
        else {
            const sampleAntenatalTestTemp = sampleAntenatalTest_1.sampleAntentalTest.antenatalTest[0];
            sampleAntenatalTestTemp.week = weeks[previousWeekIndex + 1];
            antenatalTest.antenatalTest.push(sampleAntenatalTestTemp);
        }
        // await antenatalTest.save()
        return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "find Antenatal Test successfully .",
            result: antenatalTest
        }));
    }
    catch (error) {
        let response = new ResponseClass_1.ResponseError({
            message: "Something went wrong",
            error: error.message,
        });
        return res.status(500).json(response);
    }
});
exports.getAntenatalTest = getAntenatalTest;
//end
//start Treatment
const createTreatment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!body.motherId || !body.doctorId) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad Request! Mother Id or Doctor Id must be provide.",
        }));
    }
    const reqData = {
        userId: body.motherId,
        createdBy: req.userId
    };
    (0, bodyTraverse_1.bodyTraverse)(reqData, body);
    try {
        const treatment = yield TreatmentModel_1.default.create(reqData);
        return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "Create Current Observastion successfully .",
            result: treatment
        }));
    }
    catch (error) {
        let response = new ResponseClass_1.ResponseError({
            message: "Something went wrong",
            error: error.message,
        });
        return res.status(500).json(response);
    }
});
exports.createTreatment = createTreatment;
const updateTreatment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!body.motherId || !body.doctorId || !body.date) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad Request! Mother Id , Doctor Id or date must be provide.",
        }));
    }
    try {
        const treatment = yield TreatmentModel_1.default.findOne({ userId: body.motherId, doctorId: body.doctorId, isDeleted: false });
        if (!treatment) {
            return res.status(Master_1.HTTP_NOT_FOUND).send(new ResponseClass_1.ResponseSuccess({
                success: true,
                message: "Treatment Data not found!",
            }));
        }
        (0, bodyTraverse_1.bodyTraverse)(treatment, body);
        treatment.updatedBy = req.userId;
        yield treatment.save();
        return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "update Treatment data successfully .",
            result: treatment
        }));
    }
    catch (error) {
        let response = new ResponseClass_1.ResponseError({
            message: "Something went wrong",
            error: error.message,
        });
        return res.status(500).json(response);
    }
});
exports.updateTreatment = updateTreatment;
const getTreatment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!body.motherId || !body.doctorId || !body.date) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad Request! Mother Id , Doctor Id or date must be provide.",
        }));
    }
    try {
        const treatment = yield TreatmentModel_1.default.findOne({ userId: body.motherId, doctorId: body.doctorId, isDeleted: false });
        if (!treatment) {
            return res.status(Master_1.HTTP_NOT_FOUND).send(new ResponseClass_1.ResponseSuccess({
                success: true,
                message: "Treatment Data not found!",
            }));
        }
        return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "find Treatment data successfully .",
            result: treatment
        }));
    }
    catch (error) {
        let response = new ResponseClass_1.ResponseError({
            message: "Something went wrong",
            error: error.message,
        });
        return res.status(500).json(response);
    }
});
exports.getTreatment = getTreatment;
//end
//start Next Antenatal test
const createNextAntenatalTest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!body.motherId || !body.doctorId) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad Request! Mother Id or Doctor Id must be provide.",
        }));
    }
    const reqData = {
        userId: body.motherId,
        createdBy: req.userId
    };
    (0, bodyTraverse_1.bodyTraverse)(reqData, body);
    try {
        const nextAntenatalTest = yield NextAntenatalTestModel_1.default.create(reqData);
        return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "Create Next Antenatal Test successfully .",
            result: nextAntenatalTest
        }));
    }
    catch (error) {
        let response = new ResponseClass_1.ResponseError({
            message: "Something went wrong",
            error: error.message,
        });
        return res.status(500).json(response);
    }
});
exports.createNextAntenatalTest = createNextAntenatalTest;
const updateNextAntenatalTest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!body.motherId || !body.doctorId || !body.date) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad Request! Mother Id , Doctor Id or date must be provide.",
        }));
    }
    try {
        const nextAntenatalTest = yield NextAntenatalTestModel_1.default.findOne({ userId: body.motherId, doctorId: body.doctorId, isDeleted: false });
        if (!nextAntenatalTest) {
            return res.status(Master_1.HTTP_NOT_FOUND).send(new ResponseClass_1.ResponseError({
                success: true,
                message: "Next Antenatal Test data not found!",
            }));
        }
        (0, bodyTraverse_1.bodyTraverse)(nextAntenatalTest, body);
        nextAntenatalTest.updatedBy = req.userId;
        return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "update Next Antenatal Test data successfully .",
            result: nextAntenatalTest
        }));
    }
    catch (error) {
        let response = new ResponseClass_1.ResponseError({
            message: "Something went wrong",
            error: error.message,
        });
        return res.status(500).json(response);
    }
});
exports.updateNextAntenatalTest = updateNextAntenatalTest;
const getNextAntenatalTest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!body.motherId || !body.doctorId || !body.date) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad Request! Mother Id , Doctor Id or date must be provide.",
        }));
    }
    try {
        const nextAntenatalTest = yield NextAntenatalTestModel_1.default.findOne({ userId: body.motherId, doctorId: body.doctorId, isDeleted: false });
        if (!nextAntenatalTest) {
            return res.status(Master_1.HTTP_NOT_FOUND).send(new ResponseClass_1.ResponseError({
                success: true,
                message: "Next Antenatal test Data not found!",
            }));
        }
        return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "find Next Antenatal Test data successfully .",
            result: nextAntenatalTest
        }));
    }
    catch (error) {
        let response = new ResponseClass_1.ResponseError({
            message: "Something went wrong",
            error: error.message,
        });
        return res.status(500).json(response);
    }
});
exports.getNextAntenatalTest = getNextAntenatalTest;
//end
//create previous week data
const createPreviousWeekData = (week, sample) => {
    const weeks = [5, 8, 12, 15, 18, 21, 24, 26, 28, 30, 32, 34, 36, 37, 38, 39, 40];
    const result = [];
    sample.date = new Date();
    for (let i = 0; i < weeks.length; i++) {
        const dummy = Object.assign({}, sample);
        if (week >= 5 && week > weeks[i]) {
            dummy.week = weeks[i];
            result.push(dummy);
        }
    }
    if (week < 5 && result.length == 0) {
        const dummy = Object.assign({}, sample);
        dummy.week = weeks[0];
        result.push(dummy);
    }
    return result;
};
const getPreviousWeekIndex = (currentWeek) => {
    var previousWeekIndex = 0;
    const weeks = [5, 8, 12, 15, 18, 21, 24, 26, 28, 30, 32, 34, 36, 37, 38, 39, 40];
    for (let i = 0; i < weeks.length; i++) {
        if (weeks[i] >= currentWeek) {
            previousWeekIndex = i - 1;
            break;
        }
    }
    return previousWeekIndex;
};
