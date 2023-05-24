import { HTTP_BAD_REQUEST } from "../Constant/Master";
import { ResponseError } from "../utils/ResponseClass";

export const preprocessMiddlewareForCreatingPath = async (req, res, next) => {

    if (!req.params.contentId) {

        return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
            success: false,
            message: "Bad Request! Content Id must be provide.",
        }))

    }

    let path = 'Content/'; //Add static path
    path = path + req.params.contentId;//Add id
    req.processedpath = path;
    next();
}