// external libraries
import { Response, Request, response } from "express";
// models
import UserModel from "../Users/UserModel";
import OtpModel from "../Otp/OtpModel";
import * as jwt from 'jsonwebtoken'
// classes
import { ResponseBodyFormatError, ResponseError, ResponseSuccess } from "../../utils/ResponseClass";
import { sendWaOtp } from "../Tpi/TpiServices";
import { loginOtpBody } from "./req_body/LoginOtp";
import { compareObjectKeys } from "../../utils/CompareObjectKeys";
import { HTTP_BAD_REQUEST, HTTP_INTERNAL_SERVER_ERROR, HTTP_NOT_FOUND, HTTP_OK, HTTP_UNAUTHORIZED, INCORRECT_BODY_FORMAT_MESSAGE } from "../../Constant/Master";
import { createOtp } from "../../utils/CreateOtp";
import { validateOtpBody } from "./req_body/ValidateOtp";
import AuthSession from "./AuthSession";
import UserDetailsModel from "../UserDetails/UserDetailsModel";
import { sampleUserDetails } from "../../utils/sampleUserDetails";
import CurrentObservastionModel from "../Consultation/CurrentObservastionModel";
import { sampleCurrentObservastion } from "../../utils/sampleCurrentObservastion";
import antenatalTestModel from "../Consultation/AntenatalTestModel";
import { sampleAntentalTest } from "../../utils/sampleAntenatalTest";
import { sampleTreatment } from "../../utils/sampleTreatment";
import { sampleNextAntenatalTest } from "../../utils/sampleNextAntenatalTest";
import TreatmentModel from "../Consultation/TreatmentModel";
import NextAntenatalTestModel from "../Consultation/NextAntenatalTestModel";

export const sendOtp = async (req: Request, res: Response) => {

    const body = req.body;

    if (compareObjectKeys(body, loginOtpBody)) {

        return res.status(HTTP_BAD_REQUEST).send(new ResponseBodyFormatError({
            message: INCORRECT_BODY_FORMAT_MESSAGE,
            bodyFormat: process.env.SHOW_BODY_FORMAT ? loginOtpBody : null
        }))

    }

    try {

        var user = await UserModel.findOne({ phoneNumber: body.phoneNumber, platform: body.platform }).exec();

        if (!user && body.platform != 'MOTHER') {

            return res.status(HTTP_NOT_FOUND).send(new ResponseError({
                message: "User Not found. Please contact your admin"
            }))

        }

        const otp = createOtp()

        const text = `Dear customer, use this One Time Password (${otp}) to log in to your Onicare account. This OTP will be valid for the next 30 Sec.`
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

    if (compareObjectKeys(body, validateOtpBody)) {

        return res.status(HTTP_BAD_REQUEST).send(new ResponseBodyFormatError({
            message: INCORRECT_BODY_FORMAT_MESSAGE,
            bodyFormat: process.env.SHOW_BODY_FORMAT ? validateOtpBody : null
        }))

    }

    if (!body.platform) {

        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: "Platform is required!"
        }))

    }

    try {

        const otp = await OtpModel.find({ phoneNumber: body.phoneNumber, isExpired: false }).sort({ $natural: -1 }).limit(1);

        const message = otp[0] ? otp[0].otp != body.otp ? "Invalid OTP" : isExpiredOtp(otp[0].createdAt) ? "OTP Expired. Please try again!" : null : "Invalid Phone number";

        if (message) {

            return res.status(HTTP_OK).send(new ResponseSuccess({
                success: false,
                message: message
            }))

        }

        //create jwt token  

        var user = await UserModel.findOne({ phoneNumber: otp[0].phoneNumber, isActive: true, isDeleted: false });

        if (!user && body.platform == 'MOTHER') {

            const newUser = await UserModel.create({ phoneNumber: body.phoneNumber, userType: "MOTHER", platform: body.platform })

            sampleUserDetails.userId = newUser._id

            await UserDetailsModel.create(sampleUserDetails)  

            user = newUser

        } else {

            user.isExist = true

        }

        if (body.platform == 'DOCTOR' && user.userType == 'DOCTOR' && !user.clinic[0]) {

            return res.status(HTTP_OK).send(new ResponseSuccess({
                success: false,
                message: 'Doctor not mapped to any clinic . Please contact your admin!'
            }))

        }

        const jwtToken = jwt.sign({ userId: user._id, userType: user.userType, platform: user.platform }, process.env.JWTSECRET, {
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

    const expiryTime = process.env.OTP_EXPIRY || 1200

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

