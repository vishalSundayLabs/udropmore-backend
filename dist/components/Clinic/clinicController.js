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
exports.getAllDoctorOfClinic = exports.getClinicByLatitudeAndLongitude = exports.getAllClinic = exports.deleteClinic = exports.updateClinic = exports.createClinic = void 0;
const bodyTraverse_1 = require("../../helpers/bodyTraverse");
const pagination_1 = require("../../helpers/pagination");
const Constants_1 = require("../../utils/Constants");
const ResponseClass_1 = require("../../utils/ResponseClass");
const UserModel_1 = require("../Users/UserModel");
const clinicModel_1 = require("./clinicModel");
const createClinic = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const reqData = {
        clinicName: body.clinicName,
        latitude: body.latitude,
        longitude: body.longitude,
        address: body.address,
        googleMapLink: body.googleMapLink,
        status: body.status,
        createdBy: req.userId
    };
    try {
        const clinic = yield clinicModel_1.ClinicModel.create(reqData);
        return res.status(Constants_1.HTTP_CREATED).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "Clinic created successfully.",
            result: clinic
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
exports.createClinic = createClinic;
const updateClinic = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clinicId = req.params.id;
    const body = req.body;
    try {
        const clinic = yield clinicModel_1.ClinicModel.findOne({ _id: clinicId, isDeleted: false });
        if (!clinic) {
            return res.status(Constants_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
                success: false,
                message: "Clinic does not exist."
            }));
        }
        (0, bodyTraverse_1.bodyTraverse)(clinic, body);
        clinic.updatedBy = req.userId;
        yield clinic.save();
        return res.status(Constants_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "Clinic update successfully.",
            result: clinic
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
exports.updateClinic = updateClinic;
const deleteClinic = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clinicId = req.params.id;
    try {
        const clinic = yield clinicModel_1.ClinicModel.findOne({ _id: clinicId, isDeleted: false });
        if (!clinic) {
            return res.status(Constants_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
                success: false,
                message: "Clinic already deleted ."
            }));
        }
        clinic.isDeleted = true;
        yield clinic.save();
        return res.status(Constants_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "Clinic delete successfully.",
            result: clinic
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
exports.deleteClinic = deleteClinic;
const getAllClinic = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.query;
    const { limit, skips } = (0, pagination_1.pagination)(query);
    try {
        const clinic = yield clinicModel_1.ClinicModel.find({ isDeleted: false }).skip(skips).limit(limit);
        return res.status(Constants_1.HTTP_CREATED).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "Find all Clinic successfully.",
            result: clinic
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
exports.getAllClinic = getAllClinic;
const getClinicByLatitudeAndLongitude = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const query = req.query;
    if (!body.longitude || !body.latitude) {
        return res.status(Constants_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad request! latitude and longitude must be provide."
        }));
    }
    const { limit, skips } = (0, pagination_1.pagination)(query);
    try {
        const clinic = yield clinicModel_1.ClinicModel.find({ isDeleted: false }).skip(skips).limit(limit);
        return res.status(Constants_1.HTTP_CREATED).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "find all Clinic successfully.",
            result: clinic
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
exports.getClinicByLatitudeAndLongitude = getClinicByLatitudeAndLongitude;
const getAllDoctorOfClinic = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const query = req.query;
    if (!body.clinicId) {
        return res.status(Constants_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad request! Clinic Id must be provide."
        }));
    }
    const { limit, skips } = (0, pagination_1.pagination)(query);
    try {
        const doctorsOfClinic = yield UserModel_1.default.find({ isDeleted: false, isActive: true }).skip(skips).limit(limit);
        let doctors = doctorsOfClinic.filter((item) => item.clinic.includes(body.clinicId));
        for (let i = 0; i < doctors.length; i++) {
            const availability = doctors[i].availability;
            for (let j = 0; j < availability.length; j++) {
                if (availability[j].clinic == body.clinicId) {
                    doctors[i].availability = availability[j].slots;
                }
                else {
                    availability.splice(j, 1);
                }
            }
            if (availability.length == 0) {
                doctors[i].availability = null;
            }
        }
        return res.status(Constants_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "find all doctors of this clinic successfully.",
            result: doctors
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
exports.getAllDoctorOfClinic = getAllDoctorOfClinic;
