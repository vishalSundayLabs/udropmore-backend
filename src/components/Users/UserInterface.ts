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
export interface commanFields extends mongoose.Document{
  isActive: boolean;
  isDeleted:boolean;
  createdBy:mongoose.Schema.Types.ObjectId;
  updatedBy:mongoose.Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}
export default interface IUser extends commanFields {
  firstName: string;
  lastName: string;
  email: string;
  emailVerified: boolean;
  password: string;
  phoneNumber: string;
  userType:string;
  status: string;
  shortSSN: string;
}

export interface AuthUser {
  email: string;
  _id: string;
}

export interface RequestWithUser extends Request {
  user: AuthUser;
}
