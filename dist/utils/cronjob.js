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
exports.cronJobForChangesStatus = void 0;
const cron = require("node-cron");
const AuctionModel_1 = require("../components/Auction/AuctionModel");
const OrderModel_1 = require("../components/Order/OrderModel");
const TransactionModel_1 = require("../components/Transaction/TransactionModel");
const UserModel_1 = require("../components/Users/UserModel");
const Config_1 = require("../config/Config");
const TimezoneConverter_1 = require("./TimezoneConverter");
const cronJobForChangesStatus = () => {
    cron.schedule("*/1 * * * *", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const auction = yield AuctionModel_1.default.find({ status: "ACTIVE", isDeleted: false });
            const auctionScheduled = yield AuctionModel_1.default.find({ status: "SCHEDULED", isDeleted: false });
            const auctionCompleted = yield AuctionModel_1.default.find({ status: "COMPLETED", isDeleted: false });
            //change status to completed
            auction.forEach((item) => __awaiter(void 0, void 0, void 0, function* () {
                if ((0, TimezoneConverter_1.getISTmsTime)(item.endTime) <= (0, TimezoneConverter_1.getISTmsTime)()) {
                    item.status = "COMPLETED";
                    console.log("Auction status changes successfully auction Id", item._id);
                    const updated = yield AuctionModel_1.default.findOneAndUpdate({ _id: item._id }, item);
                    console.log(updated);
                }
            }));
            //change status to active
            auctionScheduled.forEach((ele) => __awaiter(void 0, void 0, void 0, function* () {
                console.log("mili seconds", (0, TimezoneConverter_1.getISTmsTime)(ele.startTime), (0, TimezoneConverter_1.getISTmsTime)());
                if ((0, TimezoneConverter_1.getISTmsTime)(ele.startTime) <= (0, TimezoneConverter_1.getISTmsTime)()) {
                    ele.status = "ACTIVE";
                    console.log("Auction status schedule to active successfully auction Id", ele._id);
                    const updated = yield AuctionModel_1.default.findOneAndUpdate({ _id: ele._id }, ele);
                    console.log(updated);
                }
            }));
            //handle security refund
            auctionCompleted.forEach((ele) => __awaiter(void 0, void 0, void 0, function* () {
                if (ele.winners && ele.participants) {
                    ele.participants.forEach((parti) => {
                        ele.winners.forEach((win) => __awaiter(void 0, void 0, void 0, function* () {
                            if (parti.userId != win.userId) {
                                const user = yield UserModel_1.default.findOne({ _id: parti.userId, isDeleted: false });
                                if (user) {
                                    const securityFeesForRefund = auctionCompleted.types == "COOL_DROP" ? Config_1.default.COOLDROP_SECURITY_FEES : auctionCompleted.types == "MEGA_DROP" ? Config_1.default.MEGADROP_SECURITY_FEES : Config_1.default.DASHDROP_SECURITY_FEES;
                                    if (user.walletBalance != null && user.walletBalance != undefined) {
                                        user.walletBalance += securityFeesForRefund;
                                    }
                                    yield user.save();
                                    yield TransactionModel_1.default.create({ userId: user._id, amount: securityFeesForRefund, type: "CREDIT", category: "SECURITY_DEPOSIT_REFUND" });
                                }
                            }
                        }));
                    });
                }
            }));
            //end
            //when winner not buy the product with in 2 hours then change the order status and order move to next winner
            auctionCompleted.forEach((ele) => __awaiter(void 0, void 0, void 0, function* () {
                if (ele.winners) {
                    ele.winners.forEach((winner, currentIndex) => __awaiter(void 0, void 0, void 0, function* () {
                        const order = yield OrderModel_1.default.findOne({ userId: winner.userId, productId: ele.productId, auctionId: ele._id, status: "PENDING", isDeleted: false });
                        if (order) {
                            if ((0, TimezoneConverter_1.getISTmsTime)() - (0, TimezoneConverter_1.getISTmsTime)(order.createdAt) > 7200000) {
                                order.status = "FAILED";
                                yield order.save();
                                if (ele.winners[currentIndex + 1] != undefined && ele.winners[currentIndex + 1] != null) {
                                    console.log("cron job line 72", currentIndex + 1, currentIndex, ele.winners);
                                    yield OrderModel_1.default.create({ userId: ele.winners[currentIndex + 1].userId, productId: ele.productId, auctionId: ele._id, status: "PENDING", amount: winner.bidAmount });
                                }
                            }
                        }
                    }));
                }
            }));
            console.log("cron run successfully");
        }
        catch (error) {
            console.log(error.message);
        }
    }));
};
exports.cronJobForChangesStatus = cronJobForChangesStatus;
