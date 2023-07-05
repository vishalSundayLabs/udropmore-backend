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
exports.uploader = void 0;
const cloudinary = require('cloudinary').v2;
const { cloudinaryConnecton } = require('../config/cloudinaryKey');
const uploader = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.files) {
        try {
            if (req.files.homePageImageUrl) {
                yield cloudinary.uploader.upload(req.files.homePageImageUrl.tempFilePath, (error, result) => __awaiter(void 0, void 0, void 0, function* () {
                    req.body.homePageImageUrl = result.secure_url;
                    console.log("line 11", req.files.homePageImageUrl.tempFilePath, result.secure_url);
                }));
            }
            if (req.files.productPageImageUrl) {
                yield cloudinary.uploader.upload(req.files.productPageImageUrl.tempFilePath, (error, result) => __awaiter(void 0, void 0, void 0, function* () {
                    req.body.productPageImageUrl = result.secure_url;
                    console.log("line 21", req.files.productPageImageUrl.tempFilePath, result.secure_url);
                }));
            }
        }
        catch (error) {
            console.log(error.message);
            return res.status(500).send({
                message: "Internal server error! Image Not Upload.",
            });
        }
    }
    next();
});
exports.uploader = uploader;
