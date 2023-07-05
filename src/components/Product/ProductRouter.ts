import { Router } from "express";
import { verifyToken } from "../../middleware/tokenVerify";
import { uploader } from "../../middleware/Uploader";
import { createProduct, getProductById, getProductList, updateProduct } from "./ProductController";

const router = Router();

router.post("/create", uploader, createProduct)
router.put("/update/:productId", uploader, updateProduct)
router.get("/get/by/id/:productId", getProductById)
router.get("/list", getProductList)

export default router;