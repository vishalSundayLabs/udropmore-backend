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
exports.auctionPolling = exports.bidNow = exports.getLiveAndUpcommingAuction = exports.getAuctionHistory = exports.getParticipants = exports.addParticipants = exports.getauctionList = exports.getAuctionById = exports.updateAuction = exports.createAuction = void 0;
const Config_1 = require("../../config/Config");
const Master_1 = require("../../Constant/Master");
const bodyTraverse_1 = require("../../helpers/bodyTraverse");
const pagination_1 = require("../../helpers/pagination");
const ResponseClass_1 = require("../../utils/ResponseClass");
const TimezoneConverter_1 = require("../../utils/TimezoneConverter");
const OrderModel_1 = require("../Order/OrderModel");
const TransactionModel_1 = require("../Transaction/TransactionModel");
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
        startTime: new Date((0, TimezoneConverter_1.getISTmsTime)(body.startTime)),
        endTime: new Date((0, TimezoneConverter_1.getISTmsTime)(body.endTime)),
        lowestDropPrice: body.lowestDropPrice,
        entryFees: body.entryFees,
        dropStartPrice: body.dropStartPrice,
        status: "SCHEDULED"
    };
    try {
        // const targetPrice = reqData.dropStartPrice - reqData.lowestDropPrice
        // const dropPrice = generateRandomArray(targetPrice, body.minDropPrice, body.maxDropPrice)
        // const targetTime = getDateDifferenceInSeconds(reqData.endTime, reqData.startTime)
        // console.log("line 46", reqData.startTime, reqData.endTime, targetTime)
        // const dropTime = generateRandomArray(targetTime, body.minDropInterval, body.maxDropInterval, dropPrice.length)
        // console.log("line 48 time", targetTime, dropTime.length)
        // console.log("line 49 time", targetPrice, dropPrice.length)
        // let sum = 0
        // let secondSum = reqData.startTime.getSeconds()
        // reqData.priceDrop = dropPrice.map((item, index) => {
        //     sum += item
        //     secondSum += dropTime[index]
        //     const newDate = moment(reqData.startTime).add(secondSum, "seconds")
        //     return {
        //         timeStamp: newDate,
        //         dropAmount: item,
        //         newDropPrice: reqData.dropStartPrice - sum
        //     }
        // })
        // console.log(sum, "line 62")
        const auction = yield AuctionModel_1.default.create(reqData);
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
    const params = req.params;
    if (!params.auctionId) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad request! auction ID must be provide!"
        }));
    }
    try {
        const auction = yield AuctionModel_1.default.findOne({ _id: params.auctionId });
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
        const auctionList = yield AuctionModel_1.default.find({ isDeleted: false }).sort({ $natural: -1 }).skip(skips).limit(limit);
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
        const user = yield UserModel_1.default.findOne({ _id: params.userId, isDeleted: false });
        if (!user) {
            return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseSuccess({
                message: "Invalid User Id"
            }));
        }
        const auction = yield AuctionModel_1.default.findOne({ _id: params.auctionId, isDeleted: false });
        if (!auction) {
            return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseSuccess({
                message: "Auction not found!"
            }));
        }
        const dublecateUser = auction.participants.filter(ele => ele.userId == params.userId);
        console.log("line 252", dublecateUser);
        if (dublecateUser && dublecateUser.length > 0) {
            const value = {
                isParticipated: true
            };
            return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
                message: "You have already participated in this auction!",
                result: value
            }));
        }
        if (user.walletBalance < auction.entryFees) {
            const value = {
                insufficientBalance: true
            };
            return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
                message: "Insufficient Wallet Balance! Please Recharge!",
                result: value
            }));
        }
        if (!auction.participants.includes(user._id)) {
            const securityFees = auction.types == "COOL_DROP" ? Config_1.default.COOLDROP_SECURITY_FEES : auction.types == "MEGA_DROP" ? Config_1.default.MEGADROP_SECURITY_FEES : Config_1.default.DASHDROP_SECURITY_FEES;
            auction.participants.push({ userId: user._id, time: new Date() });
            user.walletBalance -= auction.entryFees + securityFees;
            yield TransactionModel_1.default.create({ userId: user._id, amount: securityFees, type: "DEBIT", category: "SECURITY_DEPOSIT" });
            yield TransactionModel_1.default.create({ userId: user._id, amount: auction.entryFees, type: "DEBIT", category: "JOINING_FEES" });
            yield auction.save();
            yield user.save();
        }
        return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: 'You have successfully participated in this auction!',
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
        const activeAuctions = yield AuctionModel_1.default.find({ isDeleted: false, status: "ACTIVE" }).sort({ endTime: 1 }).populate("productId");
        const scheduledAuctions = yield AuctionModel_1.default.find({ isDeleted: false, status: "SCHEDULED" }).sort({ endTime: 1 }).populate("productId");
        // const completedAuctions = await AuctionModel.find({ isDeleted: false, status: "COMPLETED" }).sort({ endTime: 1 })
        return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: 'Get auction history successfully!',
            result: [...activeAuctions, ...scheduledAuctions]
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
const bidNow = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const params = req.params;
    const body = req.body;
    if (!params.auctionId || !params.userId || !body.bidAmount) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad request! auction ID , user ID , Bid Amount must be provide!"
        }));
    }
    try {
        const auction = yield AuctionModel_1.default.findOne({ _id: params.auctionId, isDeleted: false });
        const user = yield UserModel_1.default.findOne({ _id: params.userId, isDeleted: false });
        if (!auction) {
            return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseSuccess({
                message: "Auction not found!"
            }));
        }
        if (!user) {
            return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseSuccess({
                message: "Invalid user Id"
            }));
        }
        if (auction.status != "ACTIVE") {
            return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseSuccess({
                message: "Auction not active yet!"
            }));
        }
        if (auction.winners.length < 5) {
            auction.winners.push({
                userId: params.userId,
                bidAmount: body.bidAmount,
                rank: auction.winners.length + 1
            });
            if (auction.winners.length == 1) {
                yield OrderModel_1.default.create({ userId: params.userId, productId: auction.productId, auctionId: auction._id, status: "PENDING", amount: body.bidAmount });
            }
            else if (auction.winners.length == 2) {
                yield TransactionModel_1.default.create({ userId: params.userId, amount: 1000, type: "CREDIT", category: "PRIZE_MONEY" });
                user.walletBalance += 1000;
            }
            else if (auction.winners.length == 3) {
                yield TransactionModel_1.default.create({ userId: params.userId, amount: 750, type: "CREDIT", category: "PRIZE_MONEY" });
                user.walletBalance += 750;
            }
            else if (auction.winners.length == 4) {
                yield TransactionModel_1.default.create({ userId: params.userId, amount: 500, type: "CREDIT", category: "PRIZE_MONEY" });
                user.walletBalance += 500;
            }
            else {
                yield TransactionModel_1.default.create({ userId: params.userId, amount: 250, type: "CREDIT", category: "PRIZE_MONEY" });
                user.walletBalance += 250;
                auction.status = "COMPLETED";
            }
            auction.bidders.push({
                userId: params.userId,
                biddingAmount: body.bidAmount,
                rank: auction.winners.length,
                time: new Date()
            });
            yield user.save();
        }
        yield auction.save();
        if (auction.winners.length > 5) {
            return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
                success: false,
                message: "Auction already completed."
            }));
        }
        const message = auction.winners.length <= 5 ? `In Bidding you are ${auction.winners.length}th winner.` : `Bidding completed successfully.`;
        return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: false,
            message: message
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
exports.bidNow = bidNow;
const auctionPolling = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const activeAuctions = yield AuctionModel_1.default.find({ isDeleted: false, status: "ACTIVE" }).sort({ endTime: 1 }).populate("productId");
        const scheduledAuctions = yield AuctionModel_1.default.find({ isDeleted: false, status: "SCHEDULED" }).sort({ endTime: 1 }).populate("productId");
        return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: false,
            message: "Get auction successfully.",
            result: [...activeAuctions, ...scheduledAuctions]
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
exports.auctionPolling = auctionPolling;
