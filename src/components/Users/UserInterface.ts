import * as mongoose from "mongoose";
import { Request } from "express";

export interface IAddress {
  line1: string;
  line2?: string;
  city: string;
  postalCode: string;
  state: string;
  countryCode: string;
}

export interface ICommonFields extends mongoose.Document {
  isActive: boolean;
  isDeleted: boolean;
  createdBy: mongoose.Schema.Types.ObjectId;
  updatedBy: mongoose.Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export default interface IUser extends ICommonFields {
  firstName?: string;
  lastName?: string;
  email?: string;
  emailVerified?: boolean;
  password?: string;
  phoneNumber: string;
  userType?: string;
  platform?: string;
  status?: string;
  userId?: string;
  jwtToken?:string;
  shortSSN?: string;
}

export interface IAuthUser {
  email: string;
}

export interface IRequestWithUser extends Request {
  user: IAuthUser;
  userId: string;
}

export interface ISlots {
     day:string,
     timeSlots:[string]
}

export interface IAvailability {
  clinic : string,
  slots : [ISlots]
}