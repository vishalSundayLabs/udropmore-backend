// external libraries
import { Response, Request } from "express";

// utils
import {
  createOtp,
} from "../../utils/utility";

// helpers

// models
import UserModel from "./UserModel";
import OtpModel from "../Otp/OtpModel";

// interfaces
import IUser, { RequestWithUser } from "./UserInterface";

// classes
import { ResponseError } from "../../utils/ResponseClass";
import { UserResponseSuccess } from "./UserClass";

// validation
import {
  Create as UserCreate,
} from "./UserValidate";
import { validateJson } from "../../helpers/ValidatorHelper";

export let SignUp = async (req: Request, res: Response) => {
  try {
    let user: IUser = await UserModel.findOne({ email: req.body.email });
    if (user) {
      let response = new ResponseError({
        error: "Email already exists.",
        message: "Email already exists.",
      });
      return res.status(409).send(response);
    }
  } catch (error) {
    let response = new ResponseError({
      message: "Something went wrong",
      error: error.message,
    });
    return res.status(500).send(response);
  }

  const code = createOtp();
  let userValidate: UserCreate = new UserCreate();
  userValidate.firstName = req.body.firstName;
  userValidate.lastName = req.body.lastName;
  userValidate.email = req.body.email;
  userValidate.password = req.body.password;
  userValidate.userType = req.body.userType; 
  userValidate.phoneNumber = req.body.phoneNumber              
  

  try {
    let result = await validateJson(userValidate);
  } catch (e) {
    let response = new ResponseError(e);
    return res.status(404).send(response);
  }

  try {
    let userDb: IUser = new UserModel(userValidate);
    let userRecord: IUser = await userDb.save();
    let otpDb = new OtpModel({
      uid: userRecord._id,
      email: req.body.email,
      code: code,
    });
    await otpDb.save();
    let response = new UserResponseSuccess({
      user: userRecord,
    });
    return res.status(201).json(response);
  } catch (error) {
    let response = new ResponseError({
      message: "Something went wrong",
      error: error.message,
    });
    return res.status(500).send(response);
  }
};

export let getUser = async (req: RequestWithUser, res: Response) => {
  try {
    let uid: string = req.user._id;

    let userInfo: IUser = await UserModel.findOne({ _id: uid });

    if (!userInfo) {
      return res.status(404).json({
        success: false,
        message: "User does not exist.",
        error: "User does not exist.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Success",
      user: { ...userInfo.toJSON() },
    });
  } catch (error) {
    let response = new ResponseError({
      message: "Something went wrong",
      error: error.message,
    });

    return res.status(500).json(response);
  }
};

