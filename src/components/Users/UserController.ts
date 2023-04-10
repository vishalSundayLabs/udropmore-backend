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
    let userInfo: IUser = await UserModel.findOne({ _id: uid, isDeleted: false });

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
  if (!body.phoneNumber || !body.userType || !body.platform || !body.firstName) {
    return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
      success: false,
      message: "Bad request! ,first name  , phone number , userType , platform must be provide!"
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
    registrationDetails: body.registrationDetails,
    degree: body.degree,
    speciality: body.speciality,
    awards: body.awards,
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
    const oldUser = await UserModel.findOne({ phoneNumber: body.phoneNumber })
    if (oldUser) {
      return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
        success: false,
        message: "This phone number is already register!",
      }))
    }
    const user = await UserModel.create(reqData);

    return res.status(HTTP_CREATED).send(new ResponseSuccess({
      success: true,
      message: 'User created successfully!',
      result: user
    }))

  } catch (error) {
    let response = new ResponseError({
      message: "Something went wrong",
      error: error.message,
    });
    return res.status(500).json(response);
  }

}
export const updateMother = async (req, res) => {

  const body = req.body
  const reqData: any | string = {}

  if (body.firstName) reqData.firstName = body.firstName

  if (body.lastName) reqData.lastName = body.lastName

  if (body.email) reqData.email = body.email

  if (body.userType) reqData.userType = body.userType

  if (body.isActive) reqData.isActive = body.isActive

  try {
    reqData.updatedBy = req.userId;
    await UserModel.findOneAndUpdate({ phoneNumber: body.phoneNumber, isDeleted: false }, { $set: reqData })
    return res.status(HTTP_OK).send(new ResponseSuccess({
      success: true,
      message: "User Update successfully",
    }))
  } catch (error) {

    let response = new ResponseError({
      message: "Something went wrong",
      error: error.message,
    });

    return res.status(500).json(response);
  }
}

export const userUpdate = async (req, res) => {
  const userId = req.params.id
  const body = req.body

  try {
    const user = await UserModel.findOne({ _id: userId, isDeleted: false })
    if(!user) {
      return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
        success:false,
        message:"user does not exist!"
      }))
    }

    if (body.firstName) {
      user.firstName = body.firstName
    }
    if (body.lastName) {
      user.lastName = body.lastName
    }
    if (body.middleName) {
      user.middleName = body.middleName
    }
    if (body.email) {
      user.email = body.email
    }
    if (body.phoneNumber) {
      user.phoneNumber = body.phoneNumber
    }
    if (body.userType) {
      user.userType = body.userType
    }
    if (body.platform) {
      user.platform = body.platform
    }
    if (body.registrationDetails) {
      user.registrationDetails = body.registrationDetails
    }
    if (body.degree) {
      user.degree = body.degree
    }
    if (body.speciality) {
      user.speciality = body.speciality
    }
    if(body.awards) {
      user.awards = body.awards
    }
    if(body.experience){
      user.experience = body.experience
    }
    if(body.consultationFeeDetails) {
      user.consultationFeeDetails  = body.consultationFeeDetails
    }
    if(body.clinic) {
      user.clinic = body.clinic
    }
    if(body.memberships) {
      user.memberships = body.memberships
    }
    if(body.gallery) {
      user.gallery = body.gallery
    }
    if(body.services) {
      user.services = body.services
    }
    if(body.availability) {
      user.availability = body.availability
    }
    if(body.status) {
      user.status = body.status
    }

    user.updatedBy = req.userId

    await user.save()
    return res.status(HTTP_OK).send(new ResponseSuccess({
      success: true,
      message: "User Update successfully",
      result:user
    }))
  } catch (error) {

    let response = new ResponseError({
      message: "Something went wrong",
      error: error.message,
    });

    return res.status(500).json(response);
  }
}

export const deleteUser = async (req, res) => {
  const userId = req.params.id
  if (!userId) {
    return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
      success: false,
      message: "Bad Request! , user id required!"
    }))
  }

  try {
    const user = await UserModel.findOne({ _id: userId, isDeleted: false });
    if (!user) {
      return res.status(HTTP_OK).send(new ResponseSuccess({
        success: false,
        message: "user already deleted ."
      }))
    }
    user.isDeleted = true
    await user.save()
    return res.status(HTTP_OK).send(new ResponseSuccess({
      success: true,
      message: "User deleted successfully."
    }))
  } catch (error) {
    let response = new ResponseError({
      message: "Something went wrong",
      error: error.message,
    });
    return res.status(500).json(response);
  }
}