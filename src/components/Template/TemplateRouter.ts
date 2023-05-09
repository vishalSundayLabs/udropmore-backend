import { Router } from "express"
import { createPrescriptionTemplate, deletePrescriptionTemplate, getPrescriptionTemplate } from "./TemplateController"

const router = Router()

router.post("/template/create", createPrescriptionTemplate)
router.get("/template/get/:doctorId", getPrescriptionTemplate)
router.delete("/template/delete/:templateId", deletePrescriptionTemplate)

export default router