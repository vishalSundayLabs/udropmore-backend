/**
 * OtpModel.ts
 */

import * as mongoose from "mongoose";
import IOtp from "./AuthInterface";

const AuthSessionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User"
    },
    jwtToken: {
      type: String
    },
    isActive: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("AuthSession", AuthSessionSchema);
