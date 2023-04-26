import { diseases, HTTP_OK, whoInFamily, typeOfTermination, typeOfAbortion, vaginal, cesareanSection, liveBirthsDescription, genderOfChild, pregnancyType, assisted, donor, flow, natureOfCycle } from "../../utils/Constants"
import { ResponseSuccess } from "../../utils/ResponseClass"

export const getAllConstant = (req, res) => {

    return res.status(HTTP_OK).send(new ResponseSuccess({
        success: true,
        message: "get Constant successfully.",
        result: {
            whoInFamily,
            diseases,
            typeOfTermination,
            typeOfAbortion,
            vaginal,
            cesareanSection,
            liveBirthsDescription,
            genderOfChild,
            pregnancyType,
            assisted,
            donor,
            flow,
            natureOfCycle
        }
    }))

}