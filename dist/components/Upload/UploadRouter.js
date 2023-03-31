"use strict";
/**
 * UploadRouter.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AwsHelper_1 = require("../../helpers/AwsHelper");
const JwtHelper_1 = require("../../helpers/JwtHelper");
const uploadController = require("./UploadController");
const router = (0, express_1.Router)();
router.post("/", AwsHelper_1.upload.single("file"), JwtHelper_1.decodeToken, uploadController.uploadSingleFile);
router.post("/files", AwsHelper_1.upload.array("file"), JwtHelper_1.decodeToken, uploadController.uploadMultiFiles);
exports.default = router;
