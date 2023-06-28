import { Router } from "express";
import { verifyToken } from "../../middleware/tokenVerify";
import { deleteTransactionById, getTransactionById, getTransactionList } from "./TransactionController";

const router = Router();

router.get("/list",getTransactionList)
router.get("/id/:transaction",getTransactionById)
router.delete("/id/:transaction",deleteTransactionById)



export default router;