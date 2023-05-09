import { Router } from "express"
import { verifyToken } from "../../middleware/tokenVerify"
import { createPrescriptionTemplate, deletePrescriptionTemplate, getPrescriptionTemplate, updatePrescriptionTemplate } from "./TemplateController"

const router = Router()

router.post("/template/create", verifyToken, createPrescriptionTemplate)
router.get("/template/get/:doctorId", verifyToken, getPrescriptionTemplate)
router.put("/template/update/:templateId", verifyToken, updatePrescriptionTemplate)
router.delete("/template/delete/:templateId", verifyToken, deletePrescriptionTemplate)

export default router