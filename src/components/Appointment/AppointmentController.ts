import { HTTP_CREATED } from "../../utils/Constants"
import { ResponseError, ResponseSuccess } from "../../utils/ResponseClass"
import AppointmentModel from "./AppointmentModel"

export const createAppointment = async (req, res) => {
    const body = req.body
    const reqData = {
        appointmentDateAndTime: body.appointmentDate,
        appointmentType: body.appointmentType,
        motherId: body.motherId,
        doctorId: body.doctorId,
        clinicId: body.clinicId,
    }

    try {
        const appointment = await AppointmentModel.create(reqData)
        return res.status(HTTP_CREATED).send(new ResponseSuccess({
            success: true,
            message: "Appointment Book successfully.",
            result: appointment
        }))

    } catch (error) {
        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });
        return res.status(500).json(response);
    }
}
export const getAllAppointments = async (req, res) => {
    try {
        const appointment = await AppointmentModel.find({isDeleted:false})
        return res.status(HTTP_CREATED).send(new ResponseSuccess({
            success: true,
            message: "get All appointemnt successfully",
            result: appointment
        }))

    } catch (error) {
        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });
        return res.status(500).json(response);
    }
}