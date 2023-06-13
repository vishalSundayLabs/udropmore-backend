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
exports.preprocessMiddlewareForCreatingPath = void 0;
const Master_1 = require("../Constant/Master");
const ResponseClass_1 = require("../utils/ResponseClass");
const preprocessMiddlewareForCreatingPath = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.params.week) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad Request! Week must be provide.",
        }));
    }
    let path = 'Content/';
    if (req.params.type == "Weekly") {
        path = "WeeklyTestReports/";
    }
    path = path + req.params.week;
    req.processedpath = path;
    next();
});
exports.preprocessMiddlewareForCreatingPath = preprocessMiddlewareForCreatingPath;
