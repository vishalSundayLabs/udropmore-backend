"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TransactionController_1 = require("./TransactionController");
const router = (0, express_1.Router)();
router.get("/list", TransactionController_1.getTransactionList);
router.get("/id/:transaction", TransactionController_1.getTransactionById);
router.delete("/id/:transaction", TransactionController_1.deleteTransactionById);
exports.default = router;
