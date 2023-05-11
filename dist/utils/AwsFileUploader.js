"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = exports.s3 = void 0;
const Aws = require("aws-sdk");
const multer = require("multer");
const path = require("path");
const multerS3 = require("multer-s3");
const Config_1 = require("../config/Config");
Aws.config.update({
    secretAccessKey: Config_1.default.SECRETACCESSKEY,
    accessKeyId: Config_1.default.ACCESSKEYID,
    region: Config_1.default.REGION
});
exports.s3 = new Aws.S3();
exports.upload = multer({
    storage: multerS3({
        s3: exports.s3,
        bucket: Config_1.default.BUCKETNAME,
        acl: "public-read",
        contentType: multerS3.AUTO_CONTENT_TYPE,
        metadata: function (req, file, cb) {
            cb(undefined, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            cb(undefined, `${Date.now().toString()}${path.extname(file.originalname)}`);
        },
    }),
});
