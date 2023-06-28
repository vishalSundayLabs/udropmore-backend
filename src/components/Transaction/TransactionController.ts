import { HTTP_BAD_REQUEST, HTTP_NOT_FOUND, HTTP_OK } from "../../Constant/Master"
import { pagination } from "../../helpers/pagination"
import { ResponseError, ResponseSuccess } from "../../utils/ResponseClass"
import TransactionModel from "./TransactionModel"

export const getTransactionById = async (req, res) => {

    const params = req.params

    if (!params.transactionId) {

        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: "Bad request! Transaction ID must be provide!"
        }))

    }

    try {

        const transaction = await TransactionModel.findOne({ _id: params.transactionId, isDeleted: false })

        if (!transaction) {

            return res.status(HTTP_NOT_FOUND).send(new ResponseError({
                success: false,
                message: "Transaction not found!"
            }))

        }

        return res.status(HTTP_OK).send(new ResponseSuccess({
            success: true,
            message: 'Get transaction successfully!',
            result: transaction
        }))

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }

}

export const deleteTransactionById = async (req, res) => {

    const params = req.params


    if (!params.transactionId) {

        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: "Bad request! Transaction ID must be provide!"
        }))

    }

    try {

        const transaction = await TransactionModel.findOneAndUpdate({ _id: params.transactionId }, { $set: { isDeleted: true } })

        if (!transaction) {

            return res.status(HTTP_NOT_FOUND).send(new ResponseError({
                success: false,
                message: "Transaction Not found!"
            }))

        }

        return res.status(HTTP_OK).send(new ResponseSuccess({
            success: true,
            message: 'Delete transaction successfully!',
            result: transaction
        }))

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }

}

export const getTransactionList = async (req, res) => {

    let { limit, skips } = pagination(req.query)

    try {

        const transactionList = await TransactionModel.find({ isDeleted: false }).sort({ $natural: -1 }).skip(skips).limit(limit)

        return res.status(HTTP_OK).send(new ResponseSuccess({
            success: true,
            message: 'Get transaction list successfully!',
            result: transactionList
        }))

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }

}