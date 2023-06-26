import { HTTP_BAD_REQUEST, HTTP_CREATED, HTTP_NOT_FOUND } from "../../Constant/Master";
import { pagination } from "../../helpers/pagination";
import { ResponseError, ResponseSuccess } from "../../utils/ResponseClass";
import OrderModel from "./OrderModel";

export const getOrderList = async (req, res) => {

    const {skips, limit} = pagination(req.query)

    try {

        const orderList = await OrderModel.find({ isDeleted: false }).sort({ $natural: -1 }).skip(skips).limit(limit)

        if (orderList.length == 0) {

            return res.status(HTTP_NOT_FOUND).send(new ResponseError({
                success: false,
                message: "order Not found!"
            }))

        }

        return res.status(HTTP_CREATED).send(new ResponseSuccess({
            success: true,
            message: 'Get order list successfully!',
            result: orderList
        }))

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }

}

export const getOrderHistory = async (req, res) => {

    const params = req.params

    if (!params.userId) {

        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: "Bad request! User ID must be provide!"
        }))

    }

    try {

        const orderHistory = await OrderModel.find({ userId: params.userId, isDeleted: false }).sort({ $natural: -1 })

        return res.status(HTTP_CREATED).send(new ResponseSuccess({
            success: true,
            message: 'Get order history successfully!',
            result: orderHistory
        }))

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }

}

export const getUserCartOrder = async (req, res) => {

    const params = req.params

    if (!params.userId) {

        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: "Bad request! User ID must be provide!"
        }))

    }

    try {

        const cartOrder = await OrderModel.find({ userId: params.userId, status: { $in: ["PENDING"] }, isDeleted: false }).sort({ $natural: -1 })

        return res.status(HTTP_CREATED).send(new ResponseSuccess({
            success: true,
            message: 'Get user cart successfully!',
            result: cartOrder
        }))

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }
}