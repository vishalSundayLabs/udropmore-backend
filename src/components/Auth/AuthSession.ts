/**
 * OtpModel.ts
 */

import * as mongoose from "mongoose";

const AuthSessionSchema = new mongoose.Schema({
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
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

export default mongoose.model("AuthSession", AuthSessionSchema);
