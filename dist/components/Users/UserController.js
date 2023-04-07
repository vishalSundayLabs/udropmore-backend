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
exports.userUpdate = exports.getUser = void 0;
// models
const UserModel_1 = require("./UserModel");
// classes
const ResponseClass_1 = require("../../utils/ResponseClass");
const Constants_1 = require("../../utils/Constants");
let getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let uid = req.userId;
        let userInfo = yield UserModel_1.default.findOne({ _id: uid });
        if (!userInfo) {
            return res.status(404).json({
                success: false,
                message: "User does not exist.",
                error: "User does not exist.",
            });
        }
        return res.status(200).json({
            success: true,
            message: "Success",
            user: Object.assign({}, userInfo.toJSON()),
        });
    }
    catch (error) {
        let response = new ResponseClass_1.ResponseError({
            message: "Something went wrong",
            error: error.message,
        });
        return res.status(500).json(response);
    }
});
exports.getUser = getUser;
const userUpdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const reqData = {};
    if (body.firstName)
        reqData.firstName = body.firstName;
    if (body.lastName)
        reqData.lastName = body.lastName;
    if (body.email)
        reqData.email = body.email;
    if (body.userType)
        reqData.userType = body.userType;
    if (body.isActive)
        reqData.isActive = body.isActive;
    try {
        reqData.updatedBy = req.userId;
        yield UserModel_1.default.findOneAndUpdate({ phoneNumber: body.phoneNumber }, { $set: reqData });
        return res.status(Constants_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "User Update successfully",
        }));
    }
    catch (error) {
        console.log(error.message);
        let response = new ResponseClass_1.ResponseError({
            message: "Something went wrong",
            error: error.message,
        });
        return res.status(500).json(response);
    }
});
exports.userUpdate = userUpdate;
