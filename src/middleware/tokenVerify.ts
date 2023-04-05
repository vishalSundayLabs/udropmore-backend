import { HTTP_BAD_REQUEST, HTTP_UNAUTHORIZED } from "../utils/Constants"
import { ResponseError } from "../utils/ResponseClass"
import { Response, Request } from "express";
const jwt = require("jsonwebtoken")
export const verifyToken = (req, res, next) => {
    const header = req.headers["authorization"]
    if (!header) {
        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: 'headers must be provide!',
            error: "Bad Request!"
        }))
    }

    const token = header.split(' ')[1]

    if (!token) {
        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: "token must be provide!",
            error: 'Bad Request!'
        }))
    }

    jwt.verify(token, process.env.JWTSECRET, (error, decoded) => {
        if (error) {
            return res.status(HTTP_UNAUTHORIZED).send(new ResponseError({
                success: false,
                message: "Unauthorized User",
            }))
        }
        req.userId = decoded.userId
        req.platform = decoded.platform
        req.userType = decoded.userType
        next()
    })
}