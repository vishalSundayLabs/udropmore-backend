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
const bodyTraverse_1 = require("../../helpers/bodyTraverse");
const ResponseClass_1 = require("../../utils/ResponseClass");
const UserController_1 = require("../Users/UserController");
const antenatalTestModel_1 = require("./antenatalTestModel");
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
    if (!body.motherId || !body.doctorId) {
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
    if (!body.motherId || !body.doctorId) {
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
                message: "Current Observastion not found!",
            }));
        }
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
        const antenatalTest = yield antenatalTestModel_1.default.create(reqData);
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
    if (!body.motherId || !body.doctorId) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad Request! Mother Id , Doctor Id or date must be provide.",
        }));
    }
    try {
        const antenatalTest = yield antenatalTestModel_1.default.findOne({ userId: body.motherId, doctorId: body.doctorId, isDeleted: false });
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
    if (!body.motherId || !body.doctorId) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad Request! Mother Id , Doctor Id or date must be provide.",
        }));
    }
    try {
        const antenatalTest = yield antenatalTestModel_1.default.findOne({ userId: body.motherId, doctorId: body.doctorId, isDeleted: false });
        if (!antenatalTest) {
            return res.status(Master_1.HTTP_NOT_FOUND).send(new ResponseClass_1.ResponseSuccess({
                success: true,
                message: "Antenatal test not found!",
            }));
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
    if (!body.motherId || !body.doctorId) {
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
    if (!body.motherId || !body.doctorId) {
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
    if (!body.motherId || !body.doctorId) {
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
    if (!body.motherId || !body.doctorId) {
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