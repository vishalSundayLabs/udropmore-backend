/**
 * OtpModel.ts
 */

import * as mongoose from "mongoose";
import IOtp from "./OtpInterface";

const otpSchema = new mongoose.Schema(
  {
    uid: { type: mongoose.Types.ObjectId, ref: "user" },
    phoneNumber: { type: Number},
    code: { type: Number },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IOtp>("otp", otpSchema);
