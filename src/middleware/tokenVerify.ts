import UserModel from "../components/Users/UserModel"
import { HTTP_BAD_REQUEST, HTTP_UNAUTHORIZED } from "../Constant/Master"
import { ResponseError } from "../utils/ResponseClass"
const jwt = require("jsonwebtoken")

export const verifyToken = (req, res, next) => {

    const header = req.headers

    if (!header) {

        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: 'Headers must be provide!',
            error: "Bad Request!"
        }))

    }

    const token = header.accesstoken

    if (!token) {

        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: "Token must be provided!",
            error: 'Bad Request!'
        }))

    }

    jwt.verify(token, process.env.JWTSECRET, async (error, decoded) => {

        if (error) {

            return res.status(HTTP_UNAUTHORIZED).send(new ResponseError({
                success: false,
                message: "Unauthorized User",
                error: error
            }))

        }

        req.userId = decoded.userId
        req.platform = decoded.platform
        req.userType = decoded.userType

        const user = await UserModel.findOne({ _id: decoded.userId, userType: decoded.userType, isDeleted: false })

        if (!user || user.jwtToken != token) {

            return res.status(HTTP_UNAUTHORIZED).send(new ResponseError({
                success: false,
                message: "Unauthorized Token",
                error: error
            }))

        }

        next()

    })

}