import { Router } from "express"
import { verifyToken } from "../../middleware/tokenVerify"
import { upload } from "../../utils/AwsFileUploader"
import { createWeeklyContent, getWeeklyContent, updateWeeklyContent, uploadImagesAndVideo } from "./CMSController"

const router = Router()

router.post("/weekly/content/create", verifyToken, createWeeklyContent)
router.put("/weekly/content/update", verifyToken, updateWeeklyContent)
router.get("/weekly/content/details", verifyToken, getWeeklyContent)
router.post("/weekly/content/upload/files", verifyToken, upload.array("file"), uploadImagesAndVideo)

export default router