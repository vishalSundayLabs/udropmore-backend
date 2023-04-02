// external libraries
import { Response, Request } from "express";

// utils
import { createOtp } from "../../utils/utility";

// helpers
import { createToken } from "../../helpers/JwtHelper";
import { validateJson } from "../../helpers/ValidatorHelper";

// models
import UserModel from "../Users/UserModel";
import OtpModel from "./OtpModel";

// interfaces
import IOtp from "./OtpInterface";
import { ILogin } from "../Login/LoginInterface";

// classes
import { ResponseError, ResponseSuccess } from "../../utils/ResponseClass";
import { LoginSuccessResponse } from "../Login/LoginClass";

// validation
import { OtpValidate } from "./OtpValidate";

export let confirmOtp = async (req: Request, res: Response) => {
  let otpValidate: OtpValidate = new OtpValidate();
  otpValidate.email = req.body.email;
  otpValidate.code = req.body.code;

  try {
    let result = await validateJson(otpValidate);
  } catch (e) {
    let response = new ResponseError(e);
    return res.status(404).send(response);
  }
  try {
    let record: IOtp = await OtpModel.findOne(req.body).populate(
      "uid",
      "email ssn"
    );
    if (record) {
      let info = JSON.parse(JSON.stringify(record.uid));
      const token: ILogin = await createToken(info);
      await record.remove();
      await UserModel.findOneAndUpdate(
        { _id: record.uid._id },
        { $set: { emailVerified: true } }
      );

      let response = new LoginSuccessResponse({
        ...token,
        emailVerified: true,
      });
      return res.status(200).json(response);
    } else {
      let response = new ResponseError({
        error: "Invalid OTP.",
        message: "Invalid OTP.",
      });
      return res.status(400).json(response);
    }
  } catch (error) {
    let response = new ResponseError({
      message: "Something went wrong",
      error: error.message,
    });
    return res.status(500).send(response);
  }
};

export let resendOtp = async (req: Request, res: Response) => {
  try {
    const code: string = createOtp();
    let userRecord = await UserModel.findOne({ email: req.body.email });
    let update: IOtp = await OtpModel.findOneAndUpdate(
      { email: req.body.email },
      { $set: { code: code } },
      { upsert: true, new: true }
    );
    let response = new ResponseSuccess({});
    return res.status(200).json(response);
  } catch (error) {
    let response = new ResponseError({
      message: "Something went wrong",
      error: error.message,
    });
    return res.status(500).send(response);
  }
};
