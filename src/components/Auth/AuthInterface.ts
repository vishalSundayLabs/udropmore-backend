import * as mongoose from "mongoose";
import IUser from "../Users/UserInterface";

export interface IOtpValidate {
  uid: string;
  phoneNumber: string;
  code: string;
}

export default interface IOtp extends IOtpValidate, mongoose.Document {
  uid: IUser["_id"];
}
