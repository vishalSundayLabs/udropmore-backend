import { diseases, HTTP_OK, whoInFamily } from "../../utils/Constants"
import { ResponseSuccess } from "../../utils/ResponseClass"

export const getDiseases = (req, res) => {
    return res.status(HTTP_OK).send(new ResponseSuccess({
        success: true,
        message: "get diseases successfully.",
        result: { whoInFamily, diseases }
    }))
}