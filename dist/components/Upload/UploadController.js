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
exports.uploadMultiFiles = exports.uploadSingleFile = void 0;
// classes
const UploadClass_1 = require("./UploadClass");
const ResponseClass_1 = require("../../utils/ResponseClass");
let uploadSingleFile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.file) {
            return res.status(400).send({
                success: false,
                message: "Bad Request",
                error: "Error In uploading.",
            });
        }
        let response = new UploadClass_1.SingleFileResponseSuccess({
            location: req.file.location,
        });
        return res.status(200).json(response);
    }
    catch (error) {
        let response = new ResponseClass_1.ResponseError({
            message: "Something went wrong",
            error: error.message,
        });
        return res.status(500).send(response);
    }
});
exports.uploadSingleFile = uploadSingleFile;
let uploadMultiFiles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.files) {
            return res.status(400).send({
                success: false,
                message: "Bad Request",
                error: "Error In uploading.",
            });
        }
        let locations = req.files.map((file) => file.location);
        let response = new UploadClass_1.MultipleFileResponseSuccess({ location: locations });
        return res.status(200).json(response);
    }
    catch (error) {
        let response = new ResponseClass_1.ResponseError({
            message: "Something went wrong",
            error: error.message,
        });
        return res.status(500).send(response);
    }
});
exports.uploadMultiFiles = uploadMultiFiles;
