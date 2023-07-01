"use strict";
/**
 * Router file
 * index.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserRouter_1 = require("../components/Users/UserRouter");
const AuthRouter_1 = require("../components/Auth/AuthRouter");
const ProductRouter_1 = require("../components/Product/ProductRouter");
const AuctionRouter_1 = require("../components/Auction/AuctionRouter");
const OrderRouter_1 = require("../components/Order/OrderRouter");
const TransactionRouter_1 = require("../components/Transaction/TransactionRouter");
const router = (0, express_1.Router)();
router.use("/v1/users", UserRouter_1.default);
router.use('/v1/auth', AuthRouter_1.default);
router.use("/v1/product", ProductRouter_1.default);
router.use("/v1/auction", AuctionRouter_1.default);
router.use("/v1/order", OrderRouter_1.default);
router.use("/v1/transaction", TransactionRouter_1.default);
exports.default = router;
