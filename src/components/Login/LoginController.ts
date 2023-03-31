// external libraries
import * as bcrypt from "bcryptjs";
import { Request, Response } from "express";

// utils
import {
  createOtp,
  decodeBase64String,
} from "../../utils/utility";

// helpers
import { createToken } from "../../helpers/JwtHelper";

// models
import UserModel from "../Users/UserModel";
import OtpModel from "../Otp/OtpModel";

// interfaces
import IUser from "../Users/UserInterface";
import { ILogin } from "./LoginInterface";

// classes
import {
  LoginSuccessResponse,
  UnverifiedLoginSuccessResponse,
} from "./LoginClass";
import { ResponseError, ResponseSuccess } from "../../utils/ResponseClass";

// validation

export let login = async (req: Request, res: Response) => {
  try {
    let auth: string = req.headers.authorization;
    let data: string[] = auth.split("Basic ");
    let encrypt: string = Buffer.from(data[1], "base64").toString();
    if (!encrypt) {
      let response = new ResponseError({
        error: "missing login credentials",
        message: "missing login credentials",
      });
      return res.status(400).json(response);
    }
    let decode = await decodeBase64String(encrypt);

    let userInfo: IUser = await UserModel.findOne({ email: decode.email, isActive: true });
    if (!userInfo) {
      let response = new ResponseError({
        message: "User does dot exists.",
        error: "User does dot exists.",
      });
      return res.status(404).json(response);
    }
    let match: boolean = await bcrypt.compare(
      decode.password,
      userInfo.password
    );
    if (!match) {
      let response = new ResponseError({
        error: "incorrect username or password.",
        message: "incorrect email password",
      });
      return res.status(400).json(response);
    }
    if (userInfo.emailVerified) {
      const token: ILogin = await createToken({
        email: userInfo.email,
        _id: userInfo._id,
      });

      let response = new LoginSuccessResponse({
        ...token,
        emailVerified: userInfo.emailVerified,
      });
      return res.status(200).json(response);
    } else {
      const code: string = createOtp();
      let update = await OtpModel.updateOne(
        { email: decode.email },
        { uid: userInfo._id, code: code },
        { upsert: true }
      );
      let response = new UnverifiedLoginSuccessResponse({
        emailVerified: userInfo.emailVerified,
      });
      return res.status(200).json(response);
    }
  } catch (error) {
    let response = new ResponseError({
      message: "Something went wrong",
      error: error.message,
    });
    return res.status(500).send(response);
  }
};
