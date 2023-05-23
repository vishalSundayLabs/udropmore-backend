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
exports.getWeeklyContent = exports.updateWeeklyContent = exports.createWeeklyContent = void 0;
const Master_1 = require("../../Constant/Master");
const bodyTraverse_1 = require("../../helpers/bodyTraverse");
const pagination_1 = require("../../helpers/pagination");
const ResponseClass_1 = require("../../utils/ResponseClass");
const CMSModel_1 = require("./CMSModel");
const createWeeklyContent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const reqData = {};
    (0, bodyTraverse_1.bodyTraverse)(reqData, body);
    try {
        const weeklyContent = yield CMSModel_1.default.create(reqData);
        return res.status(Master_1.HTTP_NOT_FOUND).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "Create weekly data successfully .",
            result: weeklyContent
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
exports.createWeeklyContent = createWeeklyContent;
const updateWeeklyContent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!body.contentId) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad Request! Content Id must be provide."
        }));
    }
    try {
        const weeklyContent = yield CMSModel_1.default.findOne({ _id: body.contentId, isDeleted: false });
        if (!weeklyContent) {
            return res.status(Master_1.HTTP_NOT_FOUND).send(new ResponseClass_1.ResponseSuccess({
                success: true,
                message: "Weekly data not found!"
            }));
        }
        (0, bodyTraverse_1.bodyTraverse)(weeklyContent, body);
        yield weeklyContent.save();
        return res.status(Master_1.HTTP_NOT_FOUND).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "update Weekly data successfully .",
            result: weeklyContent
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
exports.updateWeeklyContent = updateWeeklyContent;
const getWeeklyContent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.query;
    const { limit, skips } = (0, pagination_1.pagination)(query);
    query.isDeleted = false;
    try {
        const weeklyContent = yield CMSModel_1.default.find(query).skip(skips).limit(limit);
        if (weeklyContent.length == 0) {
            return res.status(Master_1.HTTP_NOT_FOUND).send(new ResponseClass_1.ResponseSuccess({
                success: true,
                message: "Weekly data not found!"
            }));
        }
        return res.status(Master_1.HTTP_NOT_FOUND).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "get Weekly data successfully .",
            result: weeklyContent
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
exports.getWeeklyContent = getWeeklyContent;
