"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const OrderController_1 = require("./OrderController");
const router = (0, express_1.Router)();
router.get("/list", OrderController_1.getOrderList);
router.get("/history/:userId", OrderController_1.getUserCartOrder);
exports.default = router;
