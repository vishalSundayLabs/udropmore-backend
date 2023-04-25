import { bodyTraverse } from "../../helpers/bodyTraverse"
import { pagination } from "../../helpers/pagination"
import { HTTP_BAD_REQUEST, HTTP_CREATED, HTTP_OK } from "../../utils/Constants"
import { ResponseError, ResponseSuccess } from "../../utils/ResponseClass"
import UserModel from "../Users/UserModel"
import { ClinicModel } from "./clinicModel"

export const createClinic = async (req, res) => {

    const body = req.body

    const reqData = {
        clinicName: body.clinicName,
        latitude: body.latitude,
        longitude: body.longitude,
        address: body.address,
        googleMapLink: body.googleMapLink,
        status: body.status,
        createdBy: req.userId
    }

    try {

        const clinic = await ClinicModel.create(reqData)

        return res.status(HTTP_CREATED).send(new ResponseSuccess({
            success: true,
            message: "Clinic created successfully.",
            result: clinic
        }))

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }

}

export const updateClinic = async (req, res) => {

    const clinicId = req.params.id

    const body = req.body

    try {

        const clinic = await ClinicModel.findOne({ _id: clinicId, isDeleted: false })

        if (!clinic) {

            return res.status(HTTP_OK).send(new ResponseSuccess({
                success: false,
                message: "Clinic does not exist."
            }))

        }

        bodyTraverse(clinic, body)

        clinic.updatedBy = req.userId

        await clinic.save()

        return res.status(HTTP_OK).send(new ResponseSuccess({
            success: true,
            message: "Clinic update successfully.",
            result: clinic
        }))

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }

}

export const deleteClinic = async (req, res) => {

    const clinicId = req.params.id

    try {

        const clinic = await ClinicModel.findOne({ _id: clinicId, isDeleted: false })

        if (!clinic) {

            return res.status(HTTP_OK).send(new ResponseSuccess({
                success: false,
                message: "Clinic already deleted ."
            }))

        }

        clinic.isDeleted = true

        await clinic.save()

        return res.status(HTTP_OK).send(new ResponseSuccess({
            success: true,
            message: "Clinic delete successfully.",
            result: clinic
        }))

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }

}

export const getAllClinic = async (req, res) => {

    const query = req.query

    const { limit, skips } = pagination(query)

    try {

        const clinic = await ClinicModel.find({ isDeleted: false }).skip(skips).limit(limit)

        return res.status(HTTP_CREATED).send(new ResponseSuccess({
            success: true,
            message: "find all Clinic successfully.",
            result: clinic
        }))

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }

}

export const getClinicByLatitudeAndLongitude = async (req, res) => {

    const body = req.body
    const query = req.query

    if (!body.longitude || !body.latitude) {

        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: "Bad request! latitude and longitude must be provide."
        }))

    }

    const { limit, skips } = pagination(query)

    try {
        const clinic = await ClinicModel.find({ isDeleted: false }).skip(skips).limit(limit)

        return res.status(HTTP_CREATED).send(new ResponseSuccess({
            success: true,
            message: "find all Clinic successfully.",
            result: clinic
        }))

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);
    }

}

export const getAllDoctorOfClinic = async (req, res) => {

    const body = req.body
    const query = req.query

    if (!body.clinicId) {

        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: "Bad request! Clinic Id must be provide."
        }))

    }

    const { limit, skips } = pagination(query)

    try {

        const doctorsOfClinic = await UserModel.find({ isDeleted: false, isActive: true }).skip(skips).limit(limit)

        let doctors = doctorsOfClinic.filter((item) => item.clinic.includes(body.clinicId))
        const newDoctorRes = []
        for (let i = 0; i < doctors.length; i++) {
            const availability = doctors[i].availability
            for (let j = 0; j < availability.length; j++) {
                if (availability[j].clinic == body.clinicId) {
                    console.log(doctors[i]._id, doctors[i])
                    newDoctorRes.push({
                        doctorId: doctors[i]._id,
                        clinicId: availability[j].clinic,
                        firstName: doctors[i].firstName,
                        lastName: doctors[i].lastName,
                        phoneNumber: doctors[i].phoneNumber,
                        availability: availability[j].slots
                    })
                }
            }
            if (availability.length == 0) {
                newDoctorRes.push({
                    doctorId: doctors[i]._id,
                    clinicId: body.clinicId,
                    firstName: doctors[i].firstName,
                    lastName: doctors[i].lastName,
                    phoneNumber: doctors[i].phoneNumber,
                    availability: null
                })
            }
        }

        return res.status(HTTP_OK).send(new ResponseSuccess({
            success: true,
            message: "find all doctors of this clinic successfully.",
            result: newDoctorRes
        }))

    } catch (error) {

        let response = new ResponseError({
            message: "Something went wrong",
            error: error.message,
        });

        return res.status(500).json(response);

    }

}