import { Router } from "express";
import { verifyToken } from "../../middleware/tokenVerify";
import { deleteTransactionById, getTransactionById, getTransactionList, getTransactionListOfUser } from "./TransactionController";

const router = Router();

router.get("/list",getTransactionList)
router.get("/id/:transaction",getTransactionById)
router.delete("/id/:transaction",deleteTransactionById)
router.get("/list/user/:userId",getTransactionListOfUser)


export default router;