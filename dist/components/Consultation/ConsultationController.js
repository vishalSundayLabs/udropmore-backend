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
exports.getNextAntenatalTest = exports.updateNextAntenatalTest = exports.createNextAntenatalTest = exports.getTreatment = exports.updateTreatment = exports.createTreatment = exports.uploadAntenatalTest = exports.getAntenatalTest = exports.updateAntenatalTest = exports.createAntenatalTest = exports.getCurrentObservastion = exports.updateCurrentObservastion = exports.createCurrentObservastion = exports.getWeeklyTestOrAppointmentsByLmp = void 0;
const moment = require("moment");
const DoctorToDoTask_1 = require("../../Constant/DoctorToDoTask");
const Master_1 = require("../../Constant/Master");
const MasterAntenatalTest_1 = require("../../Constant/MasterAntenatalTest");
const bodyTraverse_1 = require("../../helpers/bodyTraverse");
const calculateCurrentWeekHelper_1 = require("../../helpers/calculateCurrentWeekHelper");
const ResponseClass_1 = require("../../utils/ResponseClass");
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
        if (currentObservastionDataTemp[endIndex].week !== week) {
            const prevData = createPreviousWeekData(week, sampleCurrentObservastion_1.sampleCurrentObservastion.currentObservastion[0]);
            const actualData = [];
            for (let j = 0; j < prevData.length; j++) {
                if (j < currentObservastionDataTemp.length && currentObservastionDataTemp[j].week == prevData[j].week) {
                    actualData.push(currentObservastionDataTemp[j]);
                }
                else {
                    actualData.push(prevData[j]);
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
            currentObservastionData.currentObservastion = actualData;
        }
        else {
            //    if(currentObservastionData.currentObservastion[endIndex]!==week) {
            //     const currentObservastionTemp = sampleCurrentObservastion.currentObservastion[0]
            //     currentObservastionTemp.week = weeks[previousWeekIndex == 0 ? week < 5 ? 0 : previousWeekIndex + 1 : previousWeekIndex + 1]
            //     currentObservastionData.currentObservastion.push(currentObservastionTemp)
            //    }
        }
        for (let j = 0; j < currentObservastionData.currentObservastion.length; j++) {
            const date = currentObservastionData.currentObservastion[j].date ? currentObservastionData.currentObservastion[j].date : new Date(moment(body.lmpDate).add(currentObservastionData.currentObservastion[j].week, 'weeks').format('YYYY-MM-DD'));
            const consultationDate = (0, calculateCurrentWeekHelper_1.calculateCurrentWeekAndDays)(date);
            let diffWeek = week - consultationDate.week;
            let diffDays = days - consultationDate.days;
            currentObservastionData.currentObservastion[j].weekAndDays = `${currentObservastionData.currentObservastion[j].week} week ${Math.floor((diffDays % diffWeek) % 7)} days`;
            currentObservastionData.currentObservastion[j].date = new Date(date);
        }
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
        const testOfTheWeek = [];
        console.log(week);
        for (let k = 0; k < MasterAntenatalTest_1.masterAntenatalTest.length; k++) {
            const tempTest = Object.assign({}, MasterAntenatalTest_1.masterAntenatalTest[k]);
            if (tempTest.week.includes(week)) {
                console.log("in if");
                tempTest.week = [tempTest.week[tempTest.week.length - 1]];
                testOfTheWeek.push(tempTest);
                break;
            }
            else {
                console.log("in else");
                tempTest.week = [tempTest.week[tempTest.week.length - 1]];
                testOfTheWeek.push(tempTest);
            }
        }
        for (let j = 0; j < testOfTheWeek.length; j++) {
            if (antenatalTestTemp[j] && antenatalTestTemp[j].week == testOfTheWeek[j].week[0]) {
                continue;
            }
            else {
                testOfTheWeek[j].week = testOfTheWeek[j].week[0];
                antenatalTest.antenatalTest.push(testOfTheWeek[j]);
            }
        }
        for (let j = 0; j < antenatalTest.antenatalTest.length; j++) {
            const date = antenatalTest.antenatalTest[j].date ? antenatalTest.antenatalTest[j].date : new Date(moment(body.lmpDate).add(antenatalTest.antenatalTest[j].week, 'weeks').format('YYYY-MM-DD'));
            const consultationDate = (0, calculateCurrentWeekHelper_1.calculateCurrentWeekAndDays)(date);
            let diffWeek = week - consultationDate.week;
            let diffDays = days - consultationDate.days;
            antenatalTest.antenatalTest[j].weekAndDays = `${antenatalTest.antenatalTest[j].week} week ${Math.floor((diffDays % diffWeek) % 7)} days`;
            antenatalTest.antenatalTest[j].date = new Date(date);
        }
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
const uploadAntenatalTest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!body.motherId || !body.doctorId) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad Request! Mother Id , Doctor Id must be provide.",
        }));
    }
    try {
        console.log(req);
        return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "update Antenatal Test successfully .",
            result: { motherId: body.motherId, doctorId: body.doctorId, testFile: req.files }
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
exports.uploadAntenatalTest = uploadAntenatalTest;
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
            message: "Create Treatment data successfully .",
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
            message: "Update Treatment data successfully .",
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
    const weeks = [[3, 4, 6, 5], [7, 9, 10, 8], [11, 13, 12], [14, 16, 15], [17, 19, 18], [20, 22, 21], [23, 24], [25, 26], [27, 28], [29, 30], [31, 32], [33, 34], [35, 36], [37], [38], [39], [40]];
    const result = [];
    for (let i = 0; i < weeks.length; i++) {
        const dummy = Object.assign({}, sample);
        if (weeks[i].indexOf(week) != -1) {
            dummy.week = weeks[i][weeks[i].length - 1];
            result.push(dummy);
            break;
        }
        else {
            dummy.week = weeks[i][weeks[i].length - 1];
            result.push(dummy);
        }
    }
    // if (week < 5 && result.length == 0) {
    //     const dummy = { ...sample }
    //     dummy.week = weeks[0]
    //     result.push(dummy)
    // }
    if (result.length > 0) {
        result[result.length - 1].date = new Date();
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
