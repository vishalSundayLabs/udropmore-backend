import { HTTP_BAD_REQUEST, HTTP_CREATED, HTTP_NOT_FOUND, HTTP_OK } from "../../utils/Constants"
import { ResponseError, ResponseSuccess } from "../../utils/ResponseClass"
import { getDayOrTimeFromDate, MakeSlotesFormat } from "../Users/UserController"
import UserModel from "../Users/UserModel"
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
        const bookedAppointment = await AppointmentModel.find({ appointmentDateAndTime: body.appointmentDate, motherId: body.motherId, doctorId: body.doctorId, clinicId: body.clinicId, isDeleted: false })
        if (bookedAppointment.length > 0) {
            return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
                success: false,
                message: "Appointment already booked ."
            })
            )
        }

        await appointmentBookValidations(body, req, res);

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
    const body = req.body
    let findData;

    if (body.doctorId) findData = { doctorId: body.doctorId, isDeleted: false }

    if (body.motherId) findData = { motherId: body.motherId, isDeleted: false }

    try {
        const appointment = await AppointmentModel.find(findData)
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

export const getAllAppointmentsOfADay = async (req, res) => {
    const body = req.body
    if (!body.doctorId || !body.clinicId || !body.date) {
        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            message: "Bad Request! doctor id , clinic id or date must be provide."
        }))
    }

    try {
        const appointments = await AppointmentModel.find({ doctorId: body.doctorId, clinicId: body.clinicId, appointmentType: { $ne: "TELECALL" }, appointmentDateAndTime: { $regex: `${body.date}` }, status: { $ne: "CANCELLED" } })
        let patientList = [];
        const patientMap = new Map();
        let videoAppointmentCount = 0;
        for (let i = 0; i < appointments.length; i++) {
            const item = appointments[i]
            if (item.appointmentType == 'VIDEOCALL') {
                videoAppointmentCount++;
            }
            const motherId = item.motherId.toString()
            if (!patientMap.has(motherId)) {
                patientMap.set(motherId, 0)
            } else {
                patientMap.set(motherId, patientMap.get(motherId) + 1)
            }
            const mother = await UserModel.findOne({ _id: item.motherId })
            const { day, time } = getDayOrTimeFromDate(item.appointmentDateAndTime)
            patientList.push({ motherId: item.motherId, name: mother.firstName, phoneNumber: mother.phoneNumber, appointmentTime: time, appointmentType: item.appointmentType })
        }
        let newPatient = 0;
        for (let [key, val] of patientMap) {
            if (val == 0) {
                newPatient++;
            }
        }
        const responseObj = {
            RequestedDate: body.date,
            totalAppointment: appointments.length,
            totalVideoAppointment: videoAppointmentCount,
            totalNewPatient: newPatient,
            patientList: patientList
        }
        return res.status(HTTP_OK).send(new ResponseSuccess({
            success: true,
            message: `All Appointments of ${body.date} .`,
            result: responseObj
        }))

    } catch (error) {
        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });
        return res.status(500).json(response);
    }
}

export const getAllAppointmentOfMother = async (req, res) => {
    const body = req.body
    if (!body.motherId || !body.clinicId) {
        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            message: "Bad Request! mother id , clinic id must be provide."
        }))
    }
    let reqBody;
    if (body.doctorId) {
        reqBody = {
            motherId: body.motherId,
            clinicId: body.clinicId,
            doctorId: body.doctorId
        }
    } else {
        reqBody = {
            motherId: body.motherId,
            clinicId: body.clinicId
        }
    }
    try {
        const appointemnts = await AppointmentModel.find(reqBody);
        const mother = await UserModel.findOne()
        return res.status(HTTP_OK).send(new ResponseSuccess({
            success: true,
            message: "Get all appointment of mother.",
            result: appointemnts
        }))
    } catch (error) {
        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });
        return res.status(500).json(response);
    }
}

export const updateAppointment = async (req, res) => {
    const body = req.body
    try {
        const bookedAppointment = await AppointmentModel.findOne({ _id: body.appointemntId, isDeleted: false })
        if (!bookedAppointment) {
            return res.status(HTTP_BAD_REQUEST).send(new ResponseSuccess({
                success: false,
                message: "Appointment not booked yet."
            })
            )
        }

        if (body.status) bookedAppointment.status = body.status

        await bookedAppointment.save()

        return res.status(HTTP_CREATED).send(new ResponseSuccess({
            success: true,
            message: "Appointment Update successfully.",
            result: bookedAppointment
        }))

    } catch (error) {
        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });
        return res.status(500).json(response);
    }
}

export const rescheduleAppointment = async (req, res) => {
    const body = req.body
    if (!body.appointmentId || !body.newDate) {
        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: "Bad Request! , appointment id must be provide"
        }))
    }
    try {
        const bookedAppointment = await AppointmentModel.findOne({ _id: body.appointmentId, isDeleted: false })
        if (!bookedAppointment) {
            return res.status(HTTP_NOT_FOUND).send(new ResponseError({
                success: false,
                message: "Appointment not found!"
            })
            )
        }

        const newBookAppointmentDetails = {
            appointmentDateAndTime: body.newDate,
            appointmentType: bookedAppointment.appointmentType,
            motherId: bookedAppointment.motherId,
            doctorId: bookedAppointment.doctorId,
            clinicId: bookedAppointment.clinicId,
        }
        const tampData = {
            appointmentDate: body.newDate,
            appointmentType: bookedAppointment.appointmentType,
            motherId: bookedAppointment.motherId,
            doctorId: bookedAppointment.doctorId,
            clinicId: bookedAppointment.clinicId
        }
        await appointmentBookValidations(tampData, req, res)

        bookedAppointment.status = "CANCELLED"
        await bookedAppointment.save()

        const rescheduledAppointment = await AppointmentModel.create(newBookAppointmentDetails)

        return res.status(HTTP_CREATED).send(new ResponseSuccess({
            success: true,
            message: "Appointment Reschedule successfully.",
            result: rescheduledAppointment
        }))

    } catch (error) {
        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });
        return res.status(500).json(response);
    }
}

export const appointmentBookValidations = async (body, req, res) => {
    const doctor = await UserModel.findOne({ _id: body.doctorId, isDeleted: false, isActive: true })
    const appointmentDate = getDayOrTimeFromDate(body.appointmentDate);
    let slots = doctor.availability.map(ele => {
        if (ele.clinic == body.clinicId) return ele;
    })
    const newSlots = [];
    for (let i = 0; i < slots[0].slots.length; i++) {

        if (slots[0].slots[i].type == body.appointmentType && slots[0].slots[i].day == appointmentDate.day) {
            newSlots.push(slots[0].slots[i])
        }

    }

    const finalSlot = MakeSlotesFormat(newSlots)

    const BookedSlot = await AppointmentModel.find({ clinicId: body.clinicId, doctorId: body.doctorId, status: { $ne: "CANCELLED" }, isDeleted: false });

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
    let count = 0;
    for (let i = 0; i < finalSlot.length; i++) {
        if (finalSlot[i].day == appointmentDate.day && finalSlot[i].time == appointmentDate.time) {
            count++;
        }
        if (finalSlot[i].day == appointmentDate.day && finalSlot[i].time == appointmentDate.time && finalSlot[i].status == "BOOKED") {
            throw new Error("This slot is not available.")
        }
    }
    if (count == 0) {
        throw new Error("This time doctor is not available.")
    }
}