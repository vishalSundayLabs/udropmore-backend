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
import { HTTP_BAD_REQUEST, HTTP_CREATED, HTTP_NOT_FOUND, HTTP_OK } from "../../utils/Constants";
import AppointmentModel from "../Appointment/AppointmentModel";

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
    if (!user) {
      return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
        success: false,
        message: "user does not exist!"
      }))
    }

    if (body.firstName) user.firstName = body.firstName

    if (body.lastName) user.lastName = body.lastName

    if (body.middleName) user.middleName = body.middleName

    if (body.email) user.email = body.email

    if (body.phoneNumber) user.phoneNumber = body.phoneNumber

    if (body.userType) user.userType = body.userType

    if (body.platform) user.platform = body.platform

    if (body.registrationDetails) user.registrationDetails = body.registrationDetails

    if (body.degree) user.degree = body.degree

    if (body.speciality) user.speciality = body.speciality

    if (body.awards) user.awards = body.awards

    if (body.experience) user.experience = body.experience

    if (body.consultationFeeDetails) user.consultationFeeDetails = body.consultationFeeDetails

    if (body.clinic) user.clinic = body.clinic

    if (body.memberships) user.memberships = body.memberships

    if (body.gallery) user.gallery = body.gallery

    if (body.services) user.services = body.services

    if (body.availability) user.availability = body.availability

    if (body.status) user.status = body.status

    user.updatedBy = req.userId

    await user.save()
    return res.status(HTTP_OK).send(new ResponseSuccess({
      success: true,
      message: "User Update successfully",
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

export const getSlots = async (req, res) => {
  const body = req.body
  try {
    const doctor = await UserModel.findOne({ _id: body.doctor })
    if (!doctor) {
      return res.status(HTTP_OK).send(new ResponseSuccess({
        success: false,
        message: "Slots not avaliable!"
      }))
    }
    const slots = doctor.availability.map(ele => {
      if (ele.clinic == body.clinic) return ele;
    })
    const finalSlot = MakeSlotesFormat(slots[0].slots)
    const BookedSlot = await AppointmentModel.find({ clinicId: body.clinic, doctorId: body.doctor, isDeleted: false });
    if (BookedSlot.length > 0) {
         for(let j=0;j<BookedSlot.length;j++){
          let bookedSlotIndex = -1
          const bookedSlot  = getDayOrTimeFromDate(BookedSlot[j].appointmentDateAndTime)
          for (let i = 0; i < finalSlot.length; i++) {
            const singleSlot = finalSlot[i]
            if (singleSlot.day == bookedSlot.day && singleSlot.time == bookedSlot.time) {
              bookedSlotIndex = i;
              break;
            }
          }
          if (bookedSlotIndex != -1) {
            finalSlot[bookedSlotIndex].status = "BOOKED"
          }
         }
    }
    return res.status(HTTP_OK).send(new ResponseSuccess({
      success: true,
      message: "get all slots successfully.",
      result: finalSlot
    }))
  } catch (error) {
    let response = new ResponseError({
      message: "Something went wrong",
      error: error.message,
    });
    return res.status(500).json(response);
  }
}

export const getAllUsers = async (req, res) => {
  const body = req.body;
  let findReqData;
  if (body.userType) {
    findReqData = { userType: body.userType, isDeleted: false }
  }
  try {
    const users = await UserModel.find(findReqData)
    return res.status(HTTP_OK).send(new ResponseSuccess({
      success: true,
      message: "all users fetch successfully.",
      result: users
    }))
  } catch (error) {
    let response = new ResponseError({
      message: "Something went wrong",
      error: error.message,
    });
    return res.status(500).json(response);
  }
}


const MakeSlotesFormat = (slots) => {
  const slotsTime = +process.env.SLOT_TIME;
  const newSlots = [];
  for (let i = 0; i < slots.length; i++) {
    const timeSlots = slots[i].timeSlots;
    for (let j = 0; j < timeSlots.length; j++) {
      let newTime = timeSlots[j].split("-");
      let startTime = newTime[0];
      let endTime = newTime[1];
      let timeDiff = (Math.floor(endTime) - Math.floor(startTime)) * 60;
      let mintCount: any = 0;
      while (timeDiff != mintCount) {
        if (mintCount % 60 == 0 && mintCount != 0) {
          startTime++;
        }
        // startTime = startTime.toString().length == 1 ? '0' + startTime : startTime
        newSlots.push({
          day: slots[i].day,
          time: `${startTime}:${mintCount % 60}`,
          status: "AVAILABLE",
        });
        mintCount = mintCount + slotsTime;
      }
    }
  }
  return newSlots;
};

const getDayOrTimeFromDate = (date) => {
  date = new Date(date);
  const days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"]
  const dayInNumber = date.getDay()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  return {
    day: days[dayInNumber],
    time: `${hours}:${minutes}`
  }
}