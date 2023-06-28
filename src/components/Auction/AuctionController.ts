import moment = require("moment")
import { HTTP_BAD_REQUEST, HTTP_CREATED, HTTP_NOT_FOUND, HTTP_OK } from "../../Constant/Master"
import { bodyTraverse } from "../../helpers/bodyTraverse"
import { pagination } from "../../helpers/pagination"
import { generateRandomArray } from "../../utils/GenerateRandomArray"
import { getDateDifferenceInSeconds } from "../../utils/getDiffrenceBetweenTwoDate"
import { ResponseError, ResponseSuccess } from "../../utils/ResponseClass"
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
    }

    try {


        const targetPrice = reqData.dropStartPrice - reqData.lowestDropPrice
        const dropPrice = generateRandomArray(targetPrice, body.minDropPrice, body.maxDropPrice)
        const targetTime = getDateDifferenceInSeconds(reqData.endTime, reqData.startTime)
        console.log("line 46", reqData.startTime, reqData.endTime, targetTime)
        const dropTime = generateRandomArray(targetTime, body.minDropInterval, body.maxDropInterval, dropPrice.length)
        console.log("line 48 time", targetTime, dropTime.length)
        console.log("line 49 time", targetPrice, dropPrice.length)
        let sum = 0
        let secondSum = reqData.startTime.getSeconds()
        reqData.priceDrop = dropPrice.map((item, index) => {
            sum += item
            secondSum += dropTime[index]
            const newDate = moment(reqData.startTime).add(secondSum, "seconds")
            return {
                timeStamp: newDate,
                dropAmount: item,
                newDropPrice: reqData.dropStartPrice - sum
            }
        })
        console.log(sum, "line 62")
        const auction = await AuctionModel.create(reqData)
        console.log("line 59", reqData.priceDrop)
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

        const auctionList = await AuctionModel.find({ isDeleted: false }).skip(skips).limit(limit)

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

        const user = await UserModel.findOne({ _id: params.userId })
        if (!user) {
            return res.status(HTTP_BAD_REQUEST).send(new ResponseSuccess({
                message: "Invalid user Id"
            }))
        }

        const auction = await AuctionModel.findOne({ _id: params.auctionId, isDeleted: false })

        if (!auction) {
            return res.status(HTTP_BAD_REQUEST).send(new ResponseSuccess({
                message: "Auction not found!"
            }))
        }

        if (user.walletBalance < auction.entryFees) {
            return res.status(HTTP_OK).send(new ResponseSuccess({
                message: "Insufficient Wallet Balance ! please Recharge"
            }))
        }

        if (auction.participants.includes(user._id)) {
            return res.status(HTTP_OK).send(new ResponseSuccess({
                message: "You are already participate in this auction."
            }))
        }

        if (!auction.participants.includes(user._id)) {

            auction.participants.push(user._id)
            user.walletBalance -= auction.entryFees
            await TransactionModel.create({ userId: user._id, amount: auction.entryFees, type: "DEBIT", category: "JOINING_FEES" })
            await auction.save()
            await user.save()

        }

        return res.status(HTTP_OK).send(new ResponseSuccess({
            success: true,
            message: 'Get auction list successfully!',
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

        const activeAuctions = await AuctionModel.find({ isDeleted: false, status: "ACTIVE" }).sort({ endTime: 1 })
        const scheduledAuctions = await AuctionModel.find({ isDeleted: false, status: "SCHEDULED" }).sort({ endTime: 1 })
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

        const auction = await AuctionModel.findOne({ _id: params.auctionId, status: "ACTIVE", isDeleted: false })

        if (!auction) {
            return res.status(HTTP_BAD_REQUEST).send(new ResponseSuccess({
                message: "Auction not found!"
            }))
        }

        if (auction.winners.length < 5) {

            auction.winners.push({
                userId: params.userId,
                bidAmount: params.bidAmount,
                rank: auction.winners.length
            })

            if (auction.winners.length == 1) {
                await OrderModel.create({ userId: params.userId, productId: auction.productId, auctionId: auction._id, status: "PENDING", amount: params.bidAmount })
            } else if (auction.winners.length == 2) {
                await TransactionModel.create({ userId: params.userId, amount: 1000, type: "CREDIT", category: "PRIZE_MONEY" })
            } else if (auction.winners.length == 3) {
                await TransactionModel.create({ userId: params.userId, amount: 750, type: "CREDIT", category: "PRIZE_MONEY" })
            } else if (auction.winners.length == 4) {
                await TransactionModel.create({ userId: params.userId, amount: 500, type: "CREDIT", category: "PRIZE_MONEY" })
            } else {
                await TransactionModel.create({ userId: params.userId, amount: 250, type: "CREDIT", category: "PRIZE_MONEY" })
                auction.status = "COMPLETED"
            }

        }

        await auction.save()

        if (auction.winners.length > 5) {
            return res.status(HTTP_OK).send(new ResponseSuccess({
                success: false,
                message: "Auction already completed."
            }))
        }


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


        const activeAuctions = await AuctionModel.find({ isDeleted: false, status: "ACTIVE" }).sort({ endTime: 1 })
        const scheduledAuctions = await AuctionModel.find({ isDeleted: false, status: "SCHEDULED" }).sort({ endTime: 1 })

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