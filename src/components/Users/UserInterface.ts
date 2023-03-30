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
export default interface IUser extends mongoose.Document {
  firstName: string;
  lastName: string;
  email: string;
  emailVerified: boolean;
  password: string;
  phoneNumber: string;
  dateOfBirth: string;
  address: IAddress;
  ssn: string;
  isActive: boolean;
  isBankLink: boolean;
  status: string;
  managedTenant: boolean;
  createdAt: Date;
  updatedAt: Date;
  shortSSN: string;
  rentPaymentsPlaid: boolean;
}

export interface AuthUser {
  email: string;
  _id: string;
}

export interface RequestWithUser extends Request {
  user: AuthUser;
}
