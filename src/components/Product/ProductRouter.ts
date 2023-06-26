import { Router } from "express";
import { verifyToken } from "../../middleware/tokenVerify";
import { createProduct, getProductById, getProductList, updateProduct } from "./ProductController";

const router = Router();

router.post("/create", createProduct)
router.put("/update/:productId", updateProduct)
router.get("/get/by/id/:productId", getProductById)
router.get("/list", getProductList)


export default router;