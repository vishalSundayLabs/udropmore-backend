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
exports.getUserCartOrder = exports.getOrderHistory = exports.getOrderList = void 0;
const Master_1 = require("../../Constant/Master");
const pagination_1 = require("../../helpers/pagination");
const ResponseClass_1 = require("../../utils/ResponseClass");
const OrderModel_1 = require("./OrderModel");
const getOrderList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { skips, limit } = (0, pagination_1.pagination)(req.query);
    try {
        const orderList = yield OrderModel_1.default.find({ isDeleted: false }).sort({ $natural: -1 }).skip(skips).limit(limit);
        if (orderList.length == 0) {
            return res.status(Master_1.HTTP_NOT_FOUND).send(new ResponseClass_1.ResponseError({
                success: false,
                message: "order Not found!"
            }));
        }
        return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: 'Get order list successfully!',
            result: orderList
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
exports.getOrderList = getOrderList;
const getOrderHistory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const params = req.params;
    if (!params.userId) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad request! User ID must be provide!"
        }));
    }
    let { limit, skips } = (0, pagination_1.pagination)(req.query);
    try {
        const orderHistory = yield OrderModel_1.default.find({ userId: params.userId, isDeleted: false }).sort({ $natural: -1 }).skip(skips).limit(limit);
        return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: 'Get order history successfully!',
            result: orderHistory
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
exports.getOrderHistory = getOrderHistory;
const getUserCartOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const params = req.params;
    if (!params.userId) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad request! User ID must be provide!"
        }));
    }
    try {
        const cartOrder = yield OrderModel_1.default.find({ userId: params.userId, status: { $in: ["PENDING"] }, isDeleted: false }).sort({ $natural: -1 });
        return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: 'Get user cart successfully!',
            result: cartOrder
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
exports.getUserCartOrder = getUserCartOrder;
