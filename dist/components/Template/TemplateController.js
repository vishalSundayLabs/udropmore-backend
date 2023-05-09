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
exports.deletePrescriptionTemplate = exports.getPrescriptionTemplate = exports.createPrescriptionTemplate = void 0;
const Master_1 = require("../../Constant/Master");
const bodyTraverse_1 = require("../../helpers/bodyTraverse");
const ResponseClass_1 = require("../../utils/ResponseClass");
const TemplateModel_1 = require("./TemplateModel");
const createPrescriptionTemplate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!body.doctorId) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad Request! Doctor Id must be provide.",
        }));
    }
    const reqData = {};
    (0, bodyTraverse_1.bodyTraverse)(reqData, body);
    try {
        const template = yield TemplateModel_1.default.create(reqData);
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "Template created successfully.",
            result: template
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
exports.createPrescriptionTemplate = createPrescriptionTemplate;
const getPrescriptionTemplate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const params = req.params;
    if (!params.doctorId) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad Request! Doctor Id must be provide.",
        }));
    }
    try {
        const template = yield TemplateModel_1.default.find({ doctorId: params.doctorId }).sort({ $nature: -1 }).limit(3);
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "3 latest Template get successfully.",
            result: template
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
exports.getPrescriptionTemplate = getPrescriptionTemplate;
const deletePrescriptionTemplate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const params = req.params;
    if (!params.templateId) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad Request! Template Id must be provide.",
        }));
    }
    try {
        const template = yield TemplateModel_1.default.findOne({ _id: params.templateId });
        template.isDeleted = true;
        yield template.save();
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "Template Deleted successfully.",
            result: template
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
exports.deletePrescriptionTemplate = deletePrescriptionTemplate;
