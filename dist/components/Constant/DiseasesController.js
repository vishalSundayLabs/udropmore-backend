"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDiseases = void 0;
const Constants_1 = require("../../utils/Constants");
const ResponseClass_1 = require("../../utils/ResponseClass");
const getDiseases = (req, res) => {
    return res.status(Constants_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
        success: true,
        message: "get diseases successfully.",
        result: { whoInFamily: Constants_1.whoInFamily, diseases: Constants_1.diseases }
    }));
};
exports.getDiseases = getDiseases;
