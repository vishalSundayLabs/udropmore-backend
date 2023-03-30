// external libraries
import { Response, Request } from "express";
import * as Sentry from "@sentry/node";

// interfaces
import MulterFile from "./UploadInterface";

// classes
import {
  SingleFileResponseSuccess,
  MultipleFileResponseSuccess,
} from "./UploadClass";
import { ResponseError } from "../../utils/ResponseClass";

export let uploadSingleFile = async (
  req: Request & { file: MulterFile },
  res: Response
) => {
  try {
    if (!req.file) {
      return res.status(400).send({
        success: false,
        message: "Bad Request",
        error: "Error In uploading.",
      });
    }
    let response = new SingleFileResponseSuccess({
      location: req.file.location,
    });
    return res.status(200).json(response);
  } catch (error) {
    Sentry.captureException(error);
    let response = new ResponseError({
      message: "Something went wrong",
      error: error.message,
    });
    return res.status(500).send(response);
  }
};

export let uploadMultiFiles = async (
  req: Request & { files: MulterFile[] },
  res: Response
) => {
  try {
    if (!req.files) {
      return res.status(400).send({
        success: false,
        message: "Bad Request",
        error: "Error In uploading.",
      });
    }
    let locations = req.files.map((file) => file.location);
    let response = new MultipleFileResponseSuccess({ location: locations });
    return res.status(200).json(response);
  } catch (error) {
    Sentry.captureException(error);
    let response = new ResponseError({
      message: "Something went wrong",
      error: error.message,
    });
    return res.status(500).send(response);
  }
};
