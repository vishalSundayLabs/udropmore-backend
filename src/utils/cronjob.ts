import * as cron from "node-cron";
import AuctionModel from "../components/Auction/AuctionModel";
import { getISTmsTime } from "./TimezoneConverter";

export const cronJobForChangesStatus = () => {



  cron.schedule("*/1 * * * *", async () => {
    try {
      const auction = await AuctionModel.find({ status: "ACTIVE", isDeleted: false })
      const auctionScheduled = await AuctionModel.find({ status: "SCHEDULED", isDeleted: false })
      auction.forEach(async (item) => {
        if (getISTmsTime(item.endTime) <= getISTmsTime()) {
          item.status = "COMPLETED"
          console.log("Auction status changes successfully auction Id", item._id)
          const updated = await AuctionModel.findOneAndUpdate({ _id: item._id }, item)
          console.log(updated)
        }
      });

      auctionScheduled.forEach(async ele => {
        console.log("mili seconds", getISTmsTime(ele.startTime), getISTmsTime())
        if (getISTmsTime(ele.startTime) <= getISTmsTime()) {
          ele.status = "ACTIVE"
          console.log("Auction status schedule to active successfully auction Id", ele._id)
          const updated = await AuctionModel.findOneAndUpdate({ _id: ele._id }, ele)
          console.log(updated)
        }
      });
      console.log("cron run successfully")
    } catch (error) {
      console.log(error.message)
    }
  });
};
