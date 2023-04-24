import { Router } from 'express'
import { getDiseases } from './DiseasesController'

const router = Router()

router.get("/diseases", getDiseases)

export default router