import { HTTP_BAD_REQUEST } from "../Constant/Master";
import { ResponseError } from "../utils/ResponseClass";

export const preprocessMiddlewareForCreatingPath = async (req, res, next) => {

    if (!req.params.week) {

        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: "Bad Request! Week must be provide.",
        }))

    }

    let path = 'Content/';
    path = path + req.params.week;
    req.processedpath = path;
    next();
}