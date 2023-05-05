import { Router } from "express"
import { createWeeklyContent, getWeeklyContent, updateWeeklyContent } from "./CMSController"

const router = Router()

router.post("/weekly/content/create", createWeeklyContent)
router.put("/weekly/content/update", updateWeeklyContent)
router.get("/weekly/content/details", getWeeklyContent)

export default router