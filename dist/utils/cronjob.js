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
const TimezoneConverter_1 = require("./TimezoneConverter");
const cronJobForChangesStatus = () => {
    cron.schedule("*/1 * * * *", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const auction = yield AuctionModel_1.default.find({ status: "ACTIVE", isDeleted: false });
            const auctionScheduled = yield AuctionModel_1.default.find({ status: "SCHEDULED", isDeleted: false });
            auction.forEach((item) => __awaiter(void 0, void 0, void 0, function* () {
                if ((0, TimezoneConverter_1.getISTmsTime)(item.endTime) <= (0, TimezoneConverter_1.getISTmsTime)()) {
                    item.status = "COMPLETED";
                    console.log("Auction status changes successfully auction Id", item._id);
                    const updated = yield AuctionModel_1.default.findOneAndUpdate({ _id: item._id }, item);
                    console.log(updated);
                }
            }));
            auctionScheduled.forEach((ele) => __awaiter(void 0, void 0, void 0, function* () {
                console.log("mili seconds", (0, TimezoneConverter_1.getISTmsTime)(ele.startTime), (0, TimezoneConverter_1.getISTmsTime)());
                if ((0, TimezoneConverter_1.getISTmsTime)(ele.startTime) <= (0, TimezoneConverter_1.getISTmsTime)()) {
                    ele.status = "ACTIVE";
                    console.log("Auction status schedule to active successfully auction Id", ele._id);
                    const updated = yield AuctionModel_1.default.findOneAndUpdate({ _id: ele._id }, ele);
                    console.log(updated);
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
