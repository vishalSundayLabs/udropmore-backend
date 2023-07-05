import { Router } from "express";
import { verifyToken } from "../../middleware/tokenVerify";
import { getOrderHistory, getOrderList, getUserCartOrder } from "./OrderController";

const router = Router();

router.get("/list", getOrderList)
router.get("/history/:userId", getOrderHistory)
router.get("/cart/:userId", getUserCartOrder)

export default router;