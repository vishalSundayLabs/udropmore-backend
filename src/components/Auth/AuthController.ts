// external libraries
import { Response, Request } from "express";

import { validateJson } from "../../helpers/ValidatorHelper";

// models
import UserModel from "../Users/UserModel";
import OtpModel from "./AuthModel";

// interfaces
import IOtp from "./AuthInterface";

// classes
import { ResponseError, ResponseSuccess } from "../../utils/ResponseClass";

