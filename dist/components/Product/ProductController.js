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
exports.getProductList = exports.deleteProductById = exports.getProductById = exports.updateProduct = exports.createProduct = void 0;
const Master_1 = require("../../Constant/Master");
const bodyTraverse_1 = require("../../helpers/bodyTraverse");
const pagination_1 = require("../../helpers/pagination");
const ResponseClass_1 = require("../../utils/ResponseClass");
const AuctionModel_1 = require("../Auction/AuctionModel");
const ProductModel_1 = require("./ProductModel");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!body.name || !body.marketPrice) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad request! ,product name  , description , market price must be provide!"
        }));
    }
    const reqData = {
        name: body.name,
        description: body.description,
        marketPrice: body.marketPrice,
        features: body.features,
        status: body.status,
        quantity: body.quantity,
        createdBy: req.userId
    };
    try {
        const product = yield ProductModel_1.default.create(reqData);
        return res.status(Master_1.HTTP_CREATED).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: 'Product created successfully!',
            result: product
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
exports.createProduct = createProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const params = req.params;
    if (!params.productId) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad request! Product ID must be provide!"
        }));
    }
    try {
        const product = yield ProductModel_1.default.findOne({ _id: params.productId, isDeleted: false });
        if (!product) {
            return res.status(Master_1.HTTP_NOT_FOUND).send(new ResponseClass_1.ResponseError({
                success: false,
                message: "Product Not found!"
            }));
        }
        (0, bodyTraverse_1.bodyTraverse)(product, body);
        yield product.save();
        return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: 'Product update successfully!',
            result: product
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
exports.updateProduct = updateProduct;
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const params = req.params;
    if (!params.productId) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad request! Product ID must be provide!"
        }));
    }
    try {
        const product = yield ProductModel_1.default.findOne({ _id: params.productId, isDeleted: false });
        const auction = yield AuctionModel_1.default.findOne({ productId: params.productId });
        if (!product) {
            return res.status(Master_1.HTTP_NOT_FOUND).send(new ResponseClass_1.ResponseError({
                success: false,
                message: "Product Not found!"
            }));
        }
        return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: 'Get product successfully!',
            result: { product, auction }
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
exports.getProductById = getProductById;
const deleteProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const params = req.params;
    if (!params.productId) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad request! Product ID must be provide!"
        }));
    }
    try {
        const product = yield ProductModel_1.default.findOneAndUpdate({ _id: params.productId }, { $set: { isDeleted: true } });
        if (!product) {
            return res.status(Master_1.HTTP_NOT_FOUND).send(new ResponseClass_1.ResponseError({
                success: false,
                message: "Product Not found!"
            }));
        }
        return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: 'Delete product successfully!',
            result: product
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
exports.deleteProductById = deleteProductById;
const getProductList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { limit, skips } = (0, pagination_1.pagination)(req.query);
    try {
        const productList = yield ProductModel_1.default.find({ isDeleted: false }).sort({ $natural: -1 }).skip(skips).limit(limit);
        if (productList.length == 0) {
            return res.status(Master_1.HTTP_NOT_FOUND).send(new ResponseClass_1.ResponseError({
                success: false,
                message: "Product Not found!"
            }));
        }
        return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: 'Get product list successfully!',
            result: productList
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
exports.getProductList = getProductList;
