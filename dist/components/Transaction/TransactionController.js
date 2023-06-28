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
exports.getTransactionList = exports.deleteTransactionById = exports.getTransactionById = void 0;
const Master_1 = require("../../Constant/Master");
const pagination_1 = require("../../helpers/pagination");
const ResponseClass_1 = require("../../utils/ResponseClass");
const TransactionModel_1 = require("./TransactionModel");
const getTransactionById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const params = req.params;
    if (!params.transactionId) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad request! Transaction ID must be provide!"
        }));
    }
    try {
        const transaction = yield TransactionModel_1.default.findOne({ _id: params.transactionId, isDeleted: false });
        if (!transaction) {
            return res.status(Master_1.HTTP_NOT_FOUND).send(new ResponseClass_1.ResponseError({
                success: false,
                message: "Transaction not found!"
            }));
        }
        return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: 'Get transaction successfully!',
            result: transaction
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
exports.getTransactionById = getTransactionById;
const deleteTransactionById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const params = req.params;
    if (!params.transactionId) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad request! Transaction ID must be provide!"
        }));
    }
    try {
        const transaction = yield TransactionModel_1.default.findOneAndUpdate({ _id: params.transactionId }, { $set: { isDeleted: true } });
        if (!transaction) {
            return res.status(Master_1.HTTP_NOT_FOUND).send(new ResponseClass_1.ResponseError({
                success: false,
                message: "Transaction Not found!"
            }));
        }
        return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: 'Delete transaction successfully!',
            result: transaction
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
exports.deleteTransactionById = deleteTransactionById;
const getTransactionList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { limit, skips } = (0, pagination_1.pagination)(req.query);
    try {
        const transactionList = yield TransactionModel_1.default.find({ isDeleted: false }).sort({ $natural: -1 }).skip(skips).limit(limit);
        return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: 'Get transaction list successfully!',
            result: transactionList
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
exports.getTransactionList = getTransactionList;
