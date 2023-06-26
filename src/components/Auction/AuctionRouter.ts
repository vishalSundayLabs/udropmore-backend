import { Router } from "express";
import { verifyToken } from "../../middleware/tokenVerify";
import { addParticipants, createAuction, getAuctionById, getAuctionHistory, getauctionList, getBidInAuction, getLiveAndUpcommingAuction, getParticipants, updateAuction } from "./AuctionController";

const router = Router();

router.post("/create", createAuction)
router.put("/update/:auctionId", updateAuction)
router.get("/details/:auctionId", getAuctionById)
router.get("/list", getauctionList)
router.get("/participants/:auctionId", getParticipants)
router.get("/history/:userId", getAuctionHistory)
router.get('/upcomming', getLiveAndUpcommingAuction)
router.put("/participate/:auctionId/:userId", addParticipants)
router.get("/bid/auction", getBidInAuction)

export default router;