import * as  moment from "moment-timezone"
import config from "../../config/Config"
import { HTTP_BAD_REQUEST, HTTP_CREATED, HTTP_NOT_FOUND, HTTP_OK } from "../../Constant/Master"
import { bodyTraverse } from "../../helpers/bodyTraverse"
import { pagination } from "../../helpers/pagination"
import { generateRandomArray } from "../../utils/GenerateRandomArray"
import { getDateDifferenceInSeconds } from "../../utils/getDiffrenceBetweenTwoDate"
import { ResponseError, ResponseSuccess } from "../../utils/ResponseClass"
import { getISTmsTime } from "../../utils/TimezoneConverter"
import OrderModel from "../Order/OrderModel"
import TransactionModel from "../Transaction/TransactionModel"
import UserModel from "../Users/UserModel"
import AuctionModel from "./AuctionModel"

export const createAuction = async (req, res) => {

    const body = req.body

    if (!body.productId) {

        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: "Bad request! Product ID must be provide!"
        }))

    }
    console.log(moment(body.startTime).tz("Asia/Kolkata"))
    const reqData = {
        productId: body.productId,
        types: body.types,
        startTime: moment(body.startTime).tz("Asia/Kolkata"),
        endTime: new Date(getISTmsTime(body.endTime)),
        lowestDropPrice: body.lowestDropPrice,
        entryFees: body.entryFees,
        dropStartPrice: body.dropStartPrice,
        status: "SCHEDULED"
    }

    console.log("line 39", reqData.startTime, body.startTime, reqData.endTime, body.endTime)

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
        const auction = await AuctionModel.create(reqData)

        return res.status(HTTP_CREATED).send(new ResponseSuccess({
            success: true,
            message: 'auction created successfully!',
            result: auction
        }))

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }

}

export const updateAuction = async (req, res) => {

    const body = req.body
    const params = req.params

    if (!params.auctionId) {

        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: "Bad request! auction ID must be provide!"
        }))

    }

    try {

        const auction = await AuctionModel.findOne({ _id: params.auctionId, isDeleted: false })

        bodyTraverse(auction, body)

        await auction.save()

        return res.status(HTTP_OK).send(new ResponseSuccess({
            success: true,
            message: 'auction update successfully!',
            result: auction
        }))

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }

}

export const getAuctionById = async (req, res) => {

    const params = req.params

    if (!params.auctionId) {

        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: "Bad request! auction ID must be provide!"
        }))

    }

    try {

        const auction = await AuctionModel.findOne({ _id: params.auctionId })

        if (!auction) {

            return res.status(HTTP_NOT_FOUND).send(new ResponseError({
                success: false,
                message: "auction Not found!"
            }))

        }

        return res.status(HTTP_OK).send(new ResponseSuccess({
            success: true,
            message: 'Get auction successfully!',
            result: auction
        }))

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }

}

export const getauctionList = async (req, res) => {

    const { limit, skips } = pagination(req.query)

    try {

        const auctionList = await AuctionModel.find({ isDeleted: false }).sort({ $natural: -1 }).skip(skips).limit(limit)

        if (auctionList.length == 0) {

            return res.status(HTTP_NOT_FOUND).send(new ResponseError({
                success: false,
                message: "auction Not found!"
            }))

        }

        return res.status(HTTP_OK).send(new ResponseSuccess({
            success: true,
            message: 'Get auction list successfully!',
            result: auctionList
        }))

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }

}

export const addParticipants = async (req, res) => {
    const params = req.params

    if (!params.auctionId || !params.userId) {

        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: "Bad request! auction ID must be provide!"
        }))

    }

    try {

        const user = await UserModel.findOne({ _id: params.userId, isDeleted: false })

        if (!user) {
            return res.status(HTTP_BAD_REQUEST).send(new ResponseSuccess({
                message: "Invalid User Id"
            }))
        }

        const auction = await AuctionModel.findOne({ _id: params.auctionId, isDeleted: false })

        if (!auction) {
            return res.status(HTTP_BAD_REQUEST).send(new ResponseSuccess({
                message: "Auction not found!"
            }))
        }

        const dublecateUser = auction.participants.filter(ele => ele.userId == params.userId);
        console.log("line 252", dublecateUser)
        if (dublecateUser && dublecateUser.length > 0) {
            const value = {
                isParticipated: true
            }
            return res.status(HTTP_OK).send(new ResponseSuccess({
                message: "You have already participated in this auction!",
                result: value
            }))
        }

        if (user.walletBalance < auction.entryFees) {
            const value = {
                insufficientBalance: true
            }
            return res.status(HTTP_OK).send(new ResponseSuccess({
                message: "Insufficient Wallet Balance! Please Recharge!",
                result: value
            }))
        }

        if (!auction.participants.includes(user._id)) {
            const securityFees = auction.types == "COOL_DROP" ? config.COOLDROP_SECURITY_FEES : auction.types == "MEGA_DROP" ? config.MEGADROP_SECURITY_FEES : config.DASHDROP_SECURITY_FEES
            auction.participants.push({ userId: user._id, time: new Date() })
            user.walletBalance -= auction.entryFees + securityFees
            await TransactionModel.create({ userId: user._id, amount: securityFees, type: "DEBIT", category: "SECURITY_DEPOSIT" })
            await TransactionModel.create({ userId: user._id, amount: auction.entryFees, type: "DEBIT", category: "JOINING_FEES" })
            await auction.save()
            await user.save()
        }

        return res.status(HTTP_OK).send(new ResponseSuccess({
            success: true,
            message: 'You have successfully participated in this auction!',
            result: auction
        }))

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }
}

export const getParticipants = async (req, res) => {
    const params = req.params

    if (!params.auctionId) {

        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: "Bad request! auction ID must be provide!"
        }))

    }

    try {

        const auctionParticipants = await AuctionModel.findOne({ _id: params.auctionId, isDeleted: false }).
            populate("participants.userId", "firstName lastName middleName email phoneNumber").select("participants")

        return res.status(HTTP_OK).send(new ResponseSuccess({
            success: true,
            message: 'Get auction list successfully!',
            result: auctionParticipants.participants
        }))

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }
}

export const getAuctionHistory = async (req, res) => {
    const params = req.params

    if (!params.userId) {

        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: "Bad request! auction ID must be provide!"
        }))

    }

    try {

        const auctionHistory = await AuctionModel.find({ participants: { $in: { userId: params.userId } }, isDeleted: false })

        return res.status(HTTP_OK).send(new ResponseSuccess({
            success: true,
            message: 'Get auction history successfully!',
            result: auctionHistory
        }))

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }
}

export const getLiveAndUpcommingAuction = async (req, res) => {

    try {

        const activeAuctions = await AuctionModel.find({ isDeleted: false, status: "ACTIVE" }).sort({ endTime: 1 }).populate("productId")
        const scheduledAuctions = await AuctionModel.find({ isDeleted: false, status: "SCHEDULED" }).sort({ endTime: 1 }).populate("productId")
        // const completedAuctions = await AuctionModel.find({ isDeleted: false, status: "COMPLETED" }).sort({ endTime: 1 })


        return res.status(HTTP_OK).send(new ResponseSuccess({
            success: true,
            message: 'Get auction history successfully!',
            result: [...activeAuctions, ...scheduledAuctions]
        }))

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }
}

export const bidNow = async (req, res) => {
    const params = req.params
    const body = req.body

    if (!params.auctionId || !params.userId || !body.bidAmount) {
        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: "Bad request! auction ID , user ID , Bid Amount must be provide!"
        }))
    }

    try {

        const auction = await AuctionModel.findOne({ _id: params.auctionId, isDeleted: false })
        const user = await UserModel.findOne({ _id: params.userId, isDeleted: false })

        if (!auction) {
            return res.status(HTTP_BAD_REQUEST).send(new ResponseSuccess({
                message: "Auction not found!"
            }))
        }

        if (!user) {
            return res.status(HTTP_BAD_REQUEST).send(new ResponseSuccess({
                message: "Invalid user Id"
            }))
        }

        if (auction.status != "ACTIVE") {
            return res.status(HTTP_BAD_REQUEST).send(new ResponseSuccess({
                message: "Auction not active yet!"
            }))
        }

        if (auction.winners.length < 5) {

            auction.winners.push({
                userId: params.userId,
                bidAmount: body.bidAmount,
                rank: auction.winners.length + 1
            })

            if (auction.winners.length == 1) {
                await OrderModel.create({ userId: params.userId, productId: auction.productId, auctionId: auction._id, status: "PENDING", amount: body.bidAmount })
            } else if (auction.winners.length == 2) {
                await TransactionModel.create({ userId: params.userId, amount: 1000, type: "CREDIT", category: "PRIZE_MONEY" })
                user.walletBalance += 1000
            } else if (auction.winners.length == 3) {
                await TransactionModel.create({ userId: params.userId, amount: 750, type: "CREDIT", category: "PRIZE_MONEY" })
                user.walletBalance += 750
            } else if (auction.winners.length == 4) {
                await TransactionModel.create({ userId: params.userId, amount: 500, type: "CREDIT", category: "PRIZE_MONEY" })
                user.walletBalance += 500
            } else {
                await TransactionModel.create({ userId: params.userId, amount: 250, type: "CREDIT", category: "PRIZE_MONEY" })
                user.walletBalance += 250
                auction.status = "COMPLETED"
            }

            auction.bidders.push({
                userId: params.userId,
                biddingAmount: body.bidAmount,
                rank: auction.winners.length,
                time: new Date()
            })
            await user.save()
        }

        await auction.save()

        if (auction.winners.length > 5) {
            return res.status(HTTP_OK).send(new ResponseSuccess({
                success: false,
                message: "Auction already completed."
            }))
        }

        const message = auction.winners.length <= 5 ? `In Bidding you are ${auction.winners.length}th winner.` : `Bidding completed successfully.`

        return res.status(HTTP_OK).send(new ResponseSuccess({
            success: false,
            message: message
        }))


    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }
}

export const auctionPolling = async (req, res) => {

    try {


        const activeAuctions = await AuctionModel.find({ isDeleted: false, status: "ACTIVE" }).sort({ endTime: 1 }).populate("productId")
        const scheduledAuctions = await AuctionModel.find({ isDeleted: false, status: "SCHEDULED" }).sort({ endTime: 1 }).populate("productId")

        return res.status(HTTP_OK).send(new ResponseSuccess({
            success: false,
            message: "Get auction successfully.",
            result: [...activeAuctions, ...scheduledAuctions]
        }))

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }
}