/**
 * UserModel.ts
 */

import * as mongoose from "mongoose";
import IUser from "./UserInterface";


const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      dafault: "",
    },
    lastName: {
      type: String
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      match: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    },
    emailVerified: { type: Boolean, default: false },
    phoneNumber: { 
      type: String,
      unique: true,
      require: [true,"Missing 'phone number' field."],
    },
    userType: {
      type: String,
      enum: ['DOCTOR','MOTHER','HOSPITAL_ADMIN','NURSES','ONI_ADMIN'],
      default:"MOTHER"
    },
    platform: {
      type: String,
      enum: ['DOCTOR', 'MOTHER', 'ADMIN'],
    },
    isActive: { type: Boolean, default: true },
    isDeleted: {
      type: Boolean,
      default: false
    },
    jwtToken:{
      type:String,
    },
    createdBy:{
      type:mongoose.SchemaTypes.ObjectId
    },
    updatedBy:{
      type:mongoose.SchemaTypes.ObjectId
    }
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
      },
    },
  }
);

export default mongoose.model<IUser>("User", userSchema);
