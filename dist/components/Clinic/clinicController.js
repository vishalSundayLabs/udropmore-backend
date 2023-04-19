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
exports.getClinicByLatitudeAndLongitude = exports.getAllClinic = exports.deleteClinic = exports.updateClinic = exports.createClinic = void 0;
const Constants_1 = require("../../utils/Constants");
const ResponseClass_1 = require("../../utils/ResponseClass");
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
        if (body.clinicName) {
            clinic.clinicName = body.clinicName;
        }
        if (body.latitude) {
            clinic.latitude = body.latitude;
        }
        if (body.longitude) {
            clinic.longitude = body.longitude;
        }
        if (body.googleMapLink) {
            clinic.googleMapLink = body.googleMapLink;
        }
        if (body.address) {
            clinic.address = body.address;
        }
        if (body.status) {
            clinic.status = body.status;
        }
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
    try {
        const clinic = yield clinicModel_1.ClinicModel.find({ isDeleted: false });
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
exports.getAllClinic = getAllClinic;
const getClinicByLatitudeAndLongitude = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!body.longitude || !body.latitude) {
        return res.status(Constants_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad request! latitude and longitude must be provide."
        }));
    }
    try {
        const clinic = yield clinicModel_1.ClinicModel.find({ isDeleted: false });
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
