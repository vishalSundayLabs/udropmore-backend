// external libraries
import { Response, Request } from "express";
// models
import UserModel from "./UserModel";

// interfaces
import IUser, { IAvailability, RequestWithUser } from "./UserInterface";

// classes
import { ResponseError, ResponseSuccess } from "../../utils/ResponseClass";
import { UserResponseSuccess } from "./UserClass";
import { SaveOptions } from 'mongoose'
// validation
import {
  Create as UserCreate,
} from "./UserValidate";
import { HTTP_BAD_REQUEST, HTTP_CREATED, HTTP_OK } from "../../utils/Constants";

export let getUser = async (req: RequestWithUser, res: Response) => {
  try {
    let uid: string = req.userId;
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
//this controller use only admin
export const createUser = async (req, res) => {
  const body = req.body
  if (!body.phoneNumber || !body.userType || !body.platform) {
    return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
      success: false,
      message: "Bad request! , phone number , userType , platform must be provide!"
    }))
  }
  const reqData = {
    firstName: body.firstName,
    lastName: body.lastName,
    middleName: body.middleName,
    email: body.email,
    phoneNumber: body.phoneNumber,
    userType: body.userType,
    platform: body.platform,
    degree: body.degree,
    speciality: body.speciality,
    experience: body.experience,
    consultationFeeDetails: body.consultationFeeDetails,
    clinic: body.clinic,
    memberships: body.memberships,
    gallary: body.gallary,
    services: body.services,
    availability: body.availability,
    status: body.status
  }

  try {
    const user = await UserModel.create(reqData);

    return res.status(HTTP_CREATED).send(new ResponseSuccess({
      success: true,
      message: 'User created successfully!',
      result: user
    }))

  } catch (error) {
    console.log(error.message)
    let response = new ResponseError({
      message: "Something went wrong",
      error: error.message,
    });
    return res.status(500).json(response);
  }

}
export const userUpdate = async (req, res) => {

  const body = req.body
  const reqData: any | string = {}

  if (body.firstName) reqData.firstName = body.firstName

  if (body.lastName) reqData.lastName = body.lastName

  if (body.email) reqData.email = body.email

  if (body.userType) reqData.userType = body.userType

  if (body.isActive) reqData.isActive = body.isActive

  try {
    reqData.updatedBy = req.userId;
    await UserModel.findOneAndUpdate({ phoneNumber: body.phoneNumber }, { $set: reqData })
    return res.status(HTTP_OK).send(new ResponseSuccess({
      success: true,
      message: "User Update successfully",
    }))
  } catch (error) {
    console.log(error.message)
    let response = new ResponseError({
      message: "Something went wrong",
      error: error.message,
    });

    return res.status(500).json(response);
  }
}