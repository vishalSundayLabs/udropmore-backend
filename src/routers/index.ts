/**
 * Router file
 * index.ts
 */

import { Router } from "express";
import userRouter from "../components/Users/UserRouter";
import authRouter from "../components/Auth/AuthRouter";
import productRouter from "../components/Product/ProductRouter"
import auctionRouter from "../components/Auction/AuctionRouter"
import orderRouter from "../components/Order/OrderRouter"
const router = Router();

router.use("/v1/users", userRouter);

router.use('/v1/auth', authRouter)

router.use("/v1/product", productRouter)

router.use("/v1/auction", auctionRouter)

router.use("/v1/order", orderRouter)

export default router;
