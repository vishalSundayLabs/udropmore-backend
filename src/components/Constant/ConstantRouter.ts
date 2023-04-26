import { Router } from 'express'
import { getAllConstant } from './ConstantController'

const router = Router()

router.get("/all", getAllConstant)

export default router