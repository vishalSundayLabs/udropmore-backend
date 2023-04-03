// external libraries
import { Response, Request } from "express";
// models
import UserModel from "./UserModel";

// interfaces
import IUser, { RequestWithUser } from "./UserInterface";

// classes
import { ResponseError } from "../../utils/ResponseClass";
import { UserResponseSuccess } from "./UserClass";

// validation
import {
  Create as UserCreate,
} from "./UserValidate";

export let SignUp = async (req: Request, res: Response) => {
  try {
    let user: IUser = await UserModel.findOne({ phoneNumber: req.body.waNumber });
    if (user) {
      let response = new ResponseError({
        error: "phone Number already exists.",
        message: "phone Number already exists.",
        isActive: user.isActive
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

  let userValidate: UserCreate = new UserCreate();
  userValidate.firstName = req.body.waName;
  userValidate.lastName = req.body.lastName;
  userValidate.userType = req.body.userType;
  userValidate.phoneNumber = req.body.waNumber
  userValidate.waId = req.body.waId;
  userValidate.waToken = req.body.token;

  if (req.body.email) {
    userValidate.email = req.body.email;
  }

  if (userValidate.userType == 'ONI_ADMIN' || userValidate.userType == 'MOTHER') {
    userValidate.isActive = true;
  } else {
    userValidate.isActive = false;
  }

  try {
    let userDb: IUser = new UserModel(userValidate);
    let userRecord: IUser = await userDb.save();
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

