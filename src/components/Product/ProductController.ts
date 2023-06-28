import { HTTP_BAD_REQUEST, HTTP_CREATED, HTTP_NOT_FOUND, HTTP_OK } from "../../Constant/Master"
import { bodyTraverse } from "../../helpers/bodyTraverse"
import { pagination } from "../../helpers/pagination"
import { ResponseError, ResponseSuccess } from "../../utils/ResponseClass"
import AuctionModel from "../Auction/AuctionModel"
import ProductModel from "./ProductModel"

export const createProduct = async (req, res) => {

    const body = req.body

    if (!body.name || !body.marketPrice) {

        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: "Bad request! ,product name  , description , market price must be provide!"
        }))

    }

    const reqData = {
        name: body.name,
        description: body.description,
        marketPrice: body.marketPrice,
        features: body.features,
        status: body.status,
        quantity: body.quantity,
        createdBy: req.userId
    }

    try {

        const product = await ProductModel.create(reqData)

        return res.status(HTTP_CREATED).send(new ResponseSuccess({
            success: true,
            message: 'Product created successfully!',
            result: product
        }))

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }

}

export const updateProduct = async (req, res) => {

    const body = req.body
    const params = req.params

    if (!params.productId) {

        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: "Bad request! Product ID must be provide!"
        }))

    }

    try {

        const product = await ProductModel.findOne({ _id: params.productId, isDeleted: false })

        if (!product) {

            return res.status(HTTP_NOT_FOUND).send(new ResponseError({
                success: false,
                message: "Product Not found!"
            }))

        }

        bodyTraverse(product, body)

        await product.save()

        return res.status(HTTP_OK).send(new ResponseSuccess({
            success: true,
            message: 'Product update successfully!',
            result: product
        }))

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }

}

export const getProductById = async (req, res) => {

    const params = req.params

    if (!params.productId) {

        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: "Bad request! Product ID must be provide!"
        }))

    }

    try {

        const product = await ProductModel.findOne({ _id: params.productId, isDeleted: false })
        const auction = await AuctionModel.findOne({ productId: params.productId })

        if (!product) {

            return res.status(HTTP_NOT_FOUND).send(new ResponseError({
                success: false,
                message: "Product Not found!"
            }))

        }

        return res.status(HTTP_OK).send(new ResponseSuccess({
            success: true,
            message: 'Get product successfully!',
            result: { product, auction }
        }))

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }

}

export const deleteProductById = async (req, res) => {

    const params = req.params

    if (!params.productId) {

        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: "Bad request! Product ID must be provide!"
        }))

    }

    try {

        const product = await ProductModel.findOneAndUpdate({ _id: params.productId }, { $set: { isDeleted: true } })

        if (!product) {

            return res.status(HTTP_NOT_FOUND).send(new ResponseError({
                success: false,
                message: "Product Not found!"
            }))

        }

        return res.status(HTTP_OK).send(new ResponseSuccess({
            success: true,
            message: 'Delete product successfully!',
            result: product
        }))

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }

}

export const getProductList = async (req, res) => {

    let { limit, skips } = pagination(req.query)

    try {

        const productList = await ProductModel.find({ isDeleted: false }).sort({ $natural: -1 }).skip(skips).limit(limit)

        if (productList.length == 0) {

            return res.status(HTTP_NOT_FOUND).send(new ResponseError({
                success: false,
                message: "Product Not found!"
            }))

        }

        return res.status(HTTP_OK).send(new ResponseSuccess({
            success: true,
            message: 'Get product list successfully!',
            result: productList
        }))

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }

}