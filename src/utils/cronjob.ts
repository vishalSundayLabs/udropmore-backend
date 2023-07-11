import * as cron from "node-cron";
import AuctionModel from "../components/Auction/AuctionModel";
import OrderModel from "../components/Order/OrderModel";
import TransactionModel from "../components/Transaction/TransactionModel";
import UserModel from "../components/Users/UserModel";
import config from "../config/Config";
import { getISTmsTime } from "./TimezoneConverter";

export const cronJobForChangesStatus = () => {
  cron.schedule("*/1 * * * *", async () => {
    try {
      const auction = await AuctionModel.find({ status: "ACTIVE", isDeleted: false })
      const auctionScheduled = await AuctionModel.find({ status: "SCHEDULED", isDeleted: false })
      const auctionCompleted = await AuctionModel.find({ status: "COMPLETED", isDeleted: false })
      //change status to completed
      auction.forEach(async (item) => {
        if (getISTmsTime(item.endTime) <= getISTmsTime()) {
          item.status = "COMPLETED"
          console.log("Auction status changes successfully auction Id", item._id)
          const updated = await AuctionModel.findOneAndUpdate({ _id: item._id }, item)
          console.log(updated)
        }
      });
      //change status to active
      auctionScheduled.forEach(async ele => {
        console.log("mili seconds", getISTmsTime(ele.startTime), getISTmsTime())
        if (getISTmsTime(ele.startTime) <= getISTmsTime()) {
          ele.status = "ACTIVE"
          console.log("Auction status schedule to active successfully auction Id", ele._id)
          const updated = await AuctionModel.findOneAndUpdate({ _id: ele._id }, ele)
          console.log(updated)
        }
      });

      //handle security refund

      // auctionCompleted.forEach(async ele => {
      //   if (ele.winners && ele.participants) {
      //     ele.participants.forEach((parti) => {
      //       ele.winners.forEach(async (win) => {
      //         if (parti.userId != win.userId) {
      //           const user = await UserModel.findOne({ _id: parti.userId, isDeleted: false })
      //           if (user) {
      //             const securityFeesForRefund = auctionCompleted.types == "COOL_DROP" ? config.COOLDROP_SECURITY_FEES : auctionCompleted.types == "MEGA_DROP" ? config.MEGADROP_SECURITY_FEES : config.DASHDROP_SECURITY_FEES
      //             if (user.walletBalance != null && user.walletBalance != undefined) {
      //               user.walletBalance += securityFeesForRefund
      //             }
      //             await user.save()
      //             await TransactionModel.create({ userId: user._id, amount: securityFeesForRefund, type: "CREDIT", category: "SECURITY_DEPOSIT_REFUND" })
      //           }
      //         }
      //       })
      //     })
      //   }
      // })

      //end
      
      //when winner not buy the product with in 2 hours then change the order status and order move to next winner
      // auctionCompleted.forEach(async ele => {
      //   if (ele.winners) {
      //     ele.winners.forEach(async (winner, currentIndex) => {
      //       const order = await OrderModel.findOne({ userId: winner.userId, productId: ele.productId, auctionId: ele._id, status: "PENDING", isDeleted: false })
      //       if (order) {
      //         if (getISTmsTime() - getISTmsTime(order.createdAt) > 7200000) {
      //           order.status = "FAILED"
      //           await order.save()
      //           if (ele.winners[currentIndex + 1] != undefined && ele.winners[currentIndex + 1] != null) {
      //             console.log("cron job line 72",currentIndex + 1,currentIndex,ele.winners)
      //             await OrderModel.create({ userId: ele.winners[currentIndex + 1].userId, productId: ele.productId, auctionId: ele._id, status: "PENDING", amount: winner.bidAmount })
      //           }
      //         }
      //       }
      //     })
      //   }
      // })

      console.log("cron run successfully")
    } catch (error) {
      console.log(error.message)
    }
  });
};
