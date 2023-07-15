// external libraries
import { Response, Request, response } from "express";
// models
import UserModel from "../Users/UserModel";
import OtpModel from "../Otp/OtpModel";
import * as jwt from 'jsonwebtoken'
// classes
import { ResponseBodyFormatError, ResponseError, ResponseSuccess } from "../../utils/ResponseClass"
import { sendWaOtp } from "../Tpi/TpiServices"
import { loginOtpBody } from "./req_body/LoginOtp";
import { HTTP_BAD_REQUEST, HTTP_INTERNAL_SERVER_ERROR, HTTP_NOT_FOUND, HTTP_OK, HTTP_UNAUTHORIZED } from "../../Constant/Master";
import { createOtp } from "../../utils/CreateOtp";
import AuthSession from "./AuthSession";

export const sendOtp = async (req: Request, res: Response) => {

    const body = req.body;

    try {

        const otp = createOtp()

        const text = `Dear customer, use this One Time Password (${otp}) to log in to your Udropmore account. This OTP will be valid for the next 5 Mins.`
        //create otp 
        await OtpModel.create({ phoneNumber: body.phoneNumber, otp: otp });
        //send otp
        sendWaOtp(body.phoneNumber, text)
            .then((response) => {
                return res.status(HTTP_OK).send(response)
            })
            .catch((error) => {

                return res.status(HTTP_INTERNAL_SERVER_ERROR).send(new ResponseError({
                    message: "Something went wrong",
                    error: error
                }))

            })

    } catch (error) {

        return res.status(HTTP_INTERNAL_SERVER_ERROR).send(new ResponseError({
            message: "Something went wrong",
            error: error.message
        }))

    }

}

export const validateOtp = async (req: Request, res: Response) => {

    const body = req.body;

    try {

        const otp = await OtpModel.find({ phoneNumber: body.phoneNumber, isExpired: false }).sort({ $natural: -1 }).limit(1);

        const message = otp[0] ? otp[0].otp != body.otp ? "Invalid OTP" : isExpiredOtp(otp[0].createdAt) ? "OTP Expired. Please try again!" : null : "Invalid Phone number";
   
        if (message) {

            return res.status(HTTP_OK).send(new ResponseError({
                success: false,
                message: message
            }))

        }

        //create jwt token  
      
        var user = await UserModel.findOne({ phoneNumber: otp[0].phoneNumber, isDeleted: false });
     
        if (!user) {
            await UserModel.create({ phoneNumber: otp[0].phoneNumber, isDeleted: false })
        }

        user = await UserModel.findOne({ phoneNumber: otp[0].phoneNumber, isDeleted: false });
        
        const jwtToken = jwt.sign({ userId: user._id }, process.env.JWTSECRET, {
            expiresIn: process.env.JWTEXPIRESIN
        })

        user.jwtToken = jwtToken;

        await user.save()

        // create the auth session with token
        await AuthSession.create({ userId: user._id, jwtToken: jwtToken, isActive: true })

        return res.status(HTTP_OK).send(new ResponseSuccess({
            success: true,
            message: "Login successful",
            result: {
                accessToken: jwtToken,
                user: user
            }
        }))

    } catch (error) {
        console.log(error.message)
        return res.status(HTTP_INTERNAL_SERVER_ERROR).send(new ResponseError({
            success: false,
            message: "Internal server error!",
            error: error
        }))

    }

}

export const logout = async (req, res) => {

    try {

        const user = await UserModel.findOne({ _id: req.userId, platform: req.platform, userType: req.userType })

        if (!user) {

            return res.status(HTTP_UNAUTHORIZED).send(new ResponseError({
                success: false,
                message: "Invalid Token!"
            }))

        }

        user.jwtToken = null;

        await user.save()

        await AuthSession.findOneAndUpdate({ userId: user._id, jwtToken: user.jwtToken, isActive: true, isDeleted: false }, { $set: { isActive: false } })

        return res.status(HTTP_OK).send(new ResponseSuccess({
            success: true,
            message: "Logout successful"
        }))

    } catch (error) {

        return res.status(HTTP_INTERNAL_SERVER_ERROR).send(new ResponseError({
            success: false,
            message: "Internal server error!",
            error: error
        }))

    }

}

const isExpiredOtp = (otpCreationTime) => {

    const expiryTime = process.env.OTP_EXPIRY || 300

    const otpCreationTimeFormatted = new Date(otpCreationTime);

    const TotalPastSeconds = Math.floor(otpCreationTimeFormatted.getHours() * 60 * 60 + otpCreationTimeFormatted.getMinutes() * 60 + otpCreationTimeFormatted.getSeconds())

    const currTime = new Date()

    const TotalCurrTimeSeconds = Math.floor(currTime.getHours() * 60 * 60 + currTime.getMinutes() * 60 + currTime.getSeconds())

    if (TotalCurrTimeSeconds - TotalPastSeconds > expiryTime) {
        return true;
    } else {
        return false;
    }

}

