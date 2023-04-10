import { HTTP_CREATED, HTTP_OK } from "../../utils/Constants"
import { ResponseError, ResponseSuccess } from "../../utils/ResponseClass"
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
        createdBy:req.userId
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
        if (body.clinicName) {
            clinic.clinicName = body.clinicName
        }
        if (body.latitude) {
            clinic.latitude = body.latitude
        }
        if (body.longitude) {
            clinic.longitude = body.longitude
        }
        if (body.googleMapLink) {
            clinic.googleMapLink = body.googleMapLink
        }
        if (body.address) {
            clinic.address = body.address
        }
        if (body.status) {
            clinic.status = body.status
        }
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

    try {
        const clinic = await ClinicModel.find({ isDeleted: false })

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