"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuctionController_1 = require("./AuctionController");
const router = (0, express_1.Router)();
router.post("/create", AuctionController_1.createAuction);
router.put("/update/:auctionId", AuctionController_1.updateAuction);
router.get("/details/:auctionId", AuctionController_1.getAuctionById);
router.get("/list", AuctionController_1.getauctionList);
router.get("/participants/:auctionId", AuctionController_1.getParticipants);
router.get("/history/:userId", AuctionController_1.getAuctionHistory);
router.get('/upcomming', AuctionController_1.getLiveAndUpcommingAuction);
router.put("/participate/:auctionId/:userId", AuctionController_1.addParticipants);
router.get("/bid/:auctionId/:userId", AuctionController_1.bidNow);
router.get("/polling", AuctionController_1.auctionPolling);
exports.default = router;
