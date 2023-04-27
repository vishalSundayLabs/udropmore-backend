// external libraries
import { Response, Request } from "express";
// models
import UserModel from "./UserModel";
// interfaces
import IUser, { IAvailability, IRequestWithUser } from "./UserInterface";
// classes
import { ResponseError, ResponseSuccess } from "../../utils/ResponseClass";
import { HTTP_BAD_REQUEST, HTTP_CREATED, HTTP_NOT_FOUND, HTTP_OK } from "../../utils/Constants";
import AppointmentModel from "../Appointment/AppointmentModel";
import { ClinicModel } from "../Clinic/clinicModel";
import { bodyTraverse } from "../../helpers/bodyTraverse";
import { pagination } from "../../helpers/pagination";
import UserDetailsModel from "../UserDetails/UserDetailsModel";

export let getUser = async (req: IRequestWithUser, res: Response) => {

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

    return res.status(200).json(new ResponseSuccess({
      success: true,
      message: "Success",
      result: userInfo
    }));

  } catch (error) {

    let response = new ResponseError({
      message: "Something went wrong",
      error: error.message,
    });

    return res.status(500).json(response);

  }

};

export const getUserById = async (req, res) => {

  const params = req.params

  if (!params.id) {

    return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
      success: false,
      message: "Bad request! User Id must be provide!"
    }))

  }

  try {

    const user = await UserModel.findOne({ _id: params.id, isDeleted: false })

    if (!user) {

      return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
        success: false,
        message: "User Id does not exist."
      }))

    }

    return res.status(HTTP_BAD_REQUEST).send(new ResponseSuccess({
      success: true,
      message: "get User successfully.",
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

    const oldUser = await UserModel.findOne({ phoneNumber: body.phoneNumber, isActive: true, isDeleted: false })

    if (oldUser) {

      return res.status(HTTP_BAD_REQUEST).send(new ResponseSuccess({
        success: false,
        message: "This phone number is already register!",
        result: oldUser
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

  if (!body.phoneNumber) {

    return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
      success: false,
      message: "Bad Request! Phone number must be provide."
    }))

  }

  try {

    const mother = await UserModel.findOne({ phoneNumber: body.phoneNumber, isDeleted: false, userType: "MOTHER" })

    if (!mother) {

      return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
        success: false,
        message: "Bad Request! Invalid Mobile Number!"
      }))

    }

    bodyTraverse(mother, body)

    mother.updatedBy = req.userId;
    await mother.save()

    return res.status(HTTP_OK).send(new ResponseSuccess({
      success: true,
      message: "User Update successfully",
      result: mother
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

    bodyTraverse(user, body)

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
  const query = req.query

  const { limit, skips } = pagination(query)

  try {

    const doctor = await UserModel.findOne({ _id: body.doctor }).skip(skips).limit(limit)

    if (!doctor) {

      return res.status(HTTP_OK).send(new ResponseSuccess({
        success: false,
        message: "Doctor not found!"
      }))

    }

    let slots = doctor.availability.filter(ele => {
      if (ele.clinic == body.clinic) return ele;
    })

    const bodyDate = getDayOrTimeFromDate(body.date)
    const newSlots = [];

    for (let i = 0; i < slots[0].slots.length; i++) {

      if (slots[0].slots[i].type == body.appointmentType && slots[0].slots[i].day == bodyDate.day) {
        newSlots.push(slots[0].slots[i])
      }

    }

    const finalSlot = makeSlotsFormat(newSlots, body.appointmentType)

    const BookedSlot = await AppointmentModel.find({ clinicId: body.clinic, doctorId: body.doctor, appointmentDateAndTime: { $gte: new Date(bodyDate.fullDate), $lt: new Date(bodyDate.nextDate) }, appointmentType: body.appointemntType == "INPERSON" ? { $ne: "INPERSON" } : { $ne: null }, status: { $ne: "CANCELLED" }, isDeleted: false });

    if (BookedSlot.length > 0) {

      for (let j = 0; j < BookedSlot.length; j++) {

        let bookedSlotIndex = -1
        const bookedSlot = getDayOrTimeFromDate(BookedSlot[j].appointmentDateAndTime)

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

    if (!finalSlot[0]) {

      return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
        success: false,
        message: "Slots Not Available."
      }))

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
  const query = req.query
  let findReqData;

  if (body.userType) {
    findReqData = { userType: body.userType, isDeleted: false }
  }

  const { limit, skips } = pagination(query)

  try {

    const users = await UserModel.find(findReqData).skip(skips).limit(limit)

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

export const mapMotherWithDoctor = async (req, res) => {

  const body = req.body

  if (!body.motherId || !body.mappedDoctor || !body.mappedClinic) {

    return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
      success: false,
      message: "Bad Request! Mother id , doctor id or clinic id must be provide."
    }))

  }

  try {

    const mother = await UserModel.findOne({ _id: body.motherId, isDeleted: false, userType: "MOTHER" })

    if (!mother) {

      return res.status(HTTP_NOT_FOUND).send(new ResponseError({
        success: false,
        message: "Bad Request! user not found!"
      }))

    }

    const doctor = await UserModel.findOne({ _id: body.mappedDoctor, isDeleted: false, userType: "DOCTOR" })

    if (!doctor) {

      return res.status(HTTP_NOT_FOUND).send(new ResponseError({
        success: false,
        message: "Bad Request! Doctor not found!"
      }))

    }

    if (body.mappedDoctor) mother.mappedDoctor = body.mappedDoctor

    const clinic = await ClinicModel.findOne({ _id: body.mappedClinic, isDeleted: false })

    if (!clinic) {

      return res.status(HTTP_NOT_FOUND).send(new ResponseError({
        success: false,
        message: "Bad Request! Clinic not found!"
      }))

    }

    if (body.mappedClinic) mother.mappedClinic = body.mappedClinic

    mother.updatedBy = req.userId;

    await mother.save()

    return res.status(HTTP_OK).send(new ResponseSuccess({
      success: true,
      message: "Mother mapped with doctor successfully.",
      result: mother
    }))

  } catch (error) {

    let response = new ResponseError({
      message: "Something went wrong",
      error: error.message,
    });

    return res.status(500).json(response);
  }

}

export const getPatientOfDoctorById = async (req, res) => {
  const params = req.params

  if (!params.doctorId) {

    return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
      success: false,
      message: "Bad request! Doctor Id must be provide!"
    }))

  }

  try {
    const patients = await UserModel.find({ mappedDoctor: params.doctorId, isDeleted: false, isActive: true })

    const patientDetails = []

    for (let i = 0; i < patients.length; i++) {
      const patient = await UserDetailsModel.find({ userId: patients[i]._id, isDeleted: false })
      patientDetails.push(patient)
    }

    return res.status(HTTP_BAD_REQUEST).send(new ResponseSuccess({
      success: true,
      message: "get all patient of a doctor successfully.",
      result: patientDetails
    }))

  } catch (error) {

    let response = new ResponseError({
      message: "Something went wrong",
      error: error.message,
    });

    return res.status(500).json(response);

  }

}

export const getDoctorOfMotherById = async (req, res) => {

  const params = req.params

  if (!params.motherId) {

    return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
      success: false,
      message: "Bad request! Mother Id must be provide!"
    }))

  }

  try {
    const patient = await UserModel.findOne({ _id: params.motherId, isDeleted: false, isActive: true })

    if (!patient) {

      return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
        success: false,
        message: "user does not exist!"
      }))

    }

    const doctor = await UserModel.findOne({ _id: patient.mappedDoctor, isDeleted: false, isActive: true })

    if (!doctor) {

      return res.status(HTTP_OK).send(new ResponseSuccess({
        success: false,
        message: "Right now user not mapped with doctor."
      }))

    }

    return res.status(HTTP_BAD_REQUEST).send(new ResponseSuccess({
      success: true,
      message: "get doctor successfully.",
      result: doctor
    }))

  } catch (error) {

    let response = new ResponseError({
      message: "Something went wrong",
      error: error.message,
    });

    return res.status(500).json(response);

  }

}


export const makeSlotsFormat = (slots, slotType) => {

  const slotsTime = slotType == 'INPERSON' ? +process.env.INPERSON_SLOT_TIME : slotType == "VIDEOCALL" ? +process.env.VIDEOCALL_SLOT_TIME : +process.env.INPERSON_SLOT_TIME;
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
}

export const getDayOrTimeFromDate = (date) => {

  const newDate = new Date(date);
  const days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"]
  const dayInNumber = newDate.getDay()
  const hours = newDate.getHours()
  const minutes = newDate.getMinutes()
  const years = newDate.getFullYear()
  const months = newDate.getMonth()
  const dates = newDate.getDate()
  const fullDate = `${years}-${months + 1}-${dates}`
  const nextDate = `${years}-${months + 1}-${dates + 1}`

  return {
    day: days[dayInNumber],
    time: `${hours}:${minutes}`,
    fullDate: fullDate,
    nextDate: nextDate
  }

}


