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
exports.getBidInAuction = exports.getLiveAndUpcommingAuction = exports.getAuctionHistory = exports.getParticipants = exports.addParticipants = exports.getauctionList = exports.getAuctionById = exports.updateAuction = exports.createAuction = void 0;
const moment = require("moment");
const Master_1 = require("../../Constant/Master");
const bodyTraverse_1 = require("../../helpers/bodyTraverse");
const pagination_1 = require("../../helpers/pagination");
const GenerateRandomArray_1 = require("../../utils/GenerateRandomArray");
const getDiffrenceBetweenTwoDate_1 = require("../../utils/getDiffrenceBetweenTwoDate");
const ResponseClass_1 = require("../../utils/ResponseClass");
const UserModel_1 = require("../Users/UserModel");
const AuctionModel_1 = require("./AuctionModel");
const createAuction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!body.productId) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad request! Product ID must be provide!"
        }));
    }
    const reqData = {
        productId: body.productId,
        types: body.types,
        startTime: new Date(body.startTime),
        endTime: new Date(body.endTime),
        minDropInterval: body.minDropInterval,
        maxDropInterval: body.maxDropInterval,
        lowestDropPrice: body.lowestDropPrice,
        entryFees: body.entryFees,
        dropStartPrice: body.dropStartPrice,
        status: body.status,
        minDropPrice: body.minDropPrice,
        maxDropPrice: body.maxDropPrice,
        winners: body.winners,
        participants: body.participants,
        priceDrop: []
    };
    try {
        const targetPrice = reqData.dropStartPrice - reqData.lowestDropPrice;
        const dropPrice = (0, GenerateRandomArray_1.generateRandomArray)(targetPrice, body.minDropPrice, body.maxDropPrice);
        const targetTime = (0, getDiffrenceBetweenTwoDate_1.getDateDifferenceInSeconds)(reqData.endTime, reqData.startTime);
        console.log("line 46", reqData.startTime, reqData.endTime, targetTime);
        const dropTime = (0, GenerateRandomArray_1.generateRandomArray)(targetTime, body.minDropInterval, body.maxDropInterval, dropPrice.length);
        console.log("line 48 time", targetTime, dropTime.length);
        console.log("line 49 time", targetPrice, dropPrice.length);
        let sum = 0;
        let secondSum = reqData.startTime.getSeconds();
        reqData.priceDrop = dropPrice.map((item, index) => {
            sum += item;
            secondSum += dropTime[index];
            const newDate = moment(reqData.startTime).add(secondSum, "seconds");
            return {
                timeStamp: newDate,
                dropAmount: item,
                newDropPrice: reqData.dropStartPrice - sum
            };
        });
        console.log(sum, "line 62");
        const auction = yield AuctionModel_1.default.create(reqData);
        console.log("line 59", reqData.priceDrop);
        return res.status(Master_1.HTTP_CREATED).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: 'auction created successfully!',
            result: auction
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
exports.createAuction = createAuction;
const updateAuction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const params = req.params;
    if (!params.auctionId) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad request! auction ID must be provide!"
        }));
    }
    try {
        const auction = yield AuctionModel_1.default.findOne({ _id: params.auctionId, isDeleted: false });
        (0, bodyTraverse_1.bodyTraverse)(auction, body);
        yield auction.save();
        return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: 'auction update successfully!',
            result: auction
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
exports.updateAuction = updateAuction;
const getAuctionById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!body.auctionId) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad request! auction ID must be provide!"
        }));
    }
    try {
        const auction = yield AuctionModel_1.default.findOne({ _id: body.auctionId });
        if (!auction) {
            return res.status(Master_1.HTTP_NOT_FOUND).send(new ResponseClass_1.ResponseError({
                success: false,
                message: "auction Not found!"
            }));
        }
        return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: 'Get auction successfully!',
            result: auction
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
exports.getAuctionById = getAuctionById;
const getauctionList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { limit, skips } = (0, pagination_1.pagination)(req.query);
    try {
        const auctionList = yield AuctionModel_1.default.find({ isDeleted: false }).skip(skips).limit(limit);
        if (auctionList.length == 0) {
            return res.status(Master_1.HTTP_NOT_FOUND).send(new ResponseClass_1.ResponseError({
                success: false,
                message: "auction Not found!"
            }));
        }
        return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: 'Get auction list successfully!',
            result: auctionList
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
exports.getauctionList = getauctionList;
const addParticipants = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const params = req.params;
    if (!params.auctionId || !params.userId) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad request! auction ID must be provide!"
        }));
    }
    try {
        const user = yield UserModel_1.default.findOne({ _id: params.userId });
        if (!user) {
            return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseSuccess({
                message: "Invalid user Id"
            }));
        }
        const auction = yield AuctionModel_1.default.findOne({ _id: params.auctionId, isDeleted: false });
        if (!auction) {
            return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseSuccess({
                message: "Auction not found!"
            }));
        }
        if (user.walletBalance < auction.entryFees) {
            return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
                message: "Insufficient Wallet Balance ! please Recharge"
            }));
        }
        if (auction.participants.includes(user._id)) {
            return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
                message: "You are already participate in this auction."
            }));
        }
        if (!auction.participants.includes(user._id)) {
            auction.participants.push(user._id);
            user.walletBalance -= auction.entryFees;
            yield auction.save();
            yield user.save();
        }
        return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: 'Get auction list successfully!',
            result: auction
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
exports.addParticipants = addParticipants;
const getParticipants = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const params = req.params;
    if (!params.auctionId) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad request! auction ID must be provide!"
        }));
    }
    try {
        const auctionParticipants = yield AuctionModel_1.default.findOne({ _id: params.auctionId, isDeleted: false }).
            populate("participants.userId", "firstName lastName middleName email phoneNumber").select("participants");
        return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: 'Get auction list successfully!',
            result: auctionParticipants.participants
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
exports.getParticipants = getParticipants;
const getAuctionHistory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const params = req.params;
    if (!params.userId) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad request! auction ID must be provide!"
        }));
    }
    try {
        const auctionHistory = yield AuctionModel_1.default.find({ participants: { $in: { userId: params.userId } }, isDeleted: false });
        return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: 'Get auction history successfully!',
            result: auctionHistory
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
exports.getAuctionHistory = getAuctionHistory;
const getLiveAndUpcommingAuction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const activeAuctions = yield AuctionModel_1.default.find({ isDeleted: false, status: "ACTIVE" }).sort({ endTime: 1 });
        const scheduledAuctions = yield AuctionModel_1.default.find({ isDeleted: false, status: "SCHEDULED" }).sort({ endTime: 1 });
        const completedAuctions = yield AuctionModel_1.default.find({ isDeleted: false, status: "COMPLETED" }).sort({ endTime: 1 });
        return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: 'Get auction history successfully!',
            result: [...activeAuctions, ...scheduledAuctions, ...completedAuctions]
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
exports.getLiveAndUpcommingAuction = getLiveAndUpcommingAuction;
const getBidInAuction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.getBidInAuction = getBidInAuction;
