import { HTTP_UNAUTHORIZED } from "../utils/Constants"
import { ResponseError } from "../utils/ResponseClass"

export const isAdmin = (req, res, next) => {
    if (req.userType !== 'ONI_ADMIN' || req.platform !== 'ADMIN') {
        return res.status(HTTP_UNAUTHORIZED).send(new ResponseError({
            success: false,
            message: 'You are not access this api!',
            error: 'Unauthorized User'
        }))
    }
    next()
}