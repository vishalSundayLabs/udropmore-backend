import { Router } from "express"
import { verifyToken } from "../../middleware/tokenVerify"
import { createWeeklyContent, getWeeklyContent, updateWeeklyContent } from "./CMSController"

const router = Router()

router.post("/weekly/content/create", verifyToken, createWeeklyContent)
router.put("/weekly/content/update", verifyToken, updateWeeklyContent)
router.get("/weekly/content/details", verifyToken, getWeeklyContent)

export default router