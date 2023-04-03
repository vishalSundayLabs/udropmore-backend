"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resendOtp = void 0;
// utils
const utility_1 = require("../../utils/utility");
// models
const UserModel_1 = require("../Users/UserModel");
const AuthModel_1 = require("./AuthModel");
// classes
const ResponseClass_1 = require("../../utils/ResponseClass");
// export let confirmOtp = async (req: Request, res: Response) => {
//   let otpValidate: OtpValidate = new OtpValidate();
//   otpValidate.phoneNumber = req.body.phoneNumber;
//   otpValidate.code = req.body.code;
//   try {
//     let result = await validateJson(otpValidate);
//   } catch (e) {
//     let response = new ResponseError(e);
//     return res.status(404).send(response);
//   }
//   try {
//     let record: IOtp = await OtpModel.findOne(req.body).populate(
//       "uid",
//       "email ssn"
//     );
//     if (record) {
//       let info = JSON.parse(JSON.stringify(record.uid));
//       // const token: ILogin = await createToken(info);
//       await record.remove();
//       await UserModel.findOneAndUpdate(
//         { _id: record.uid._id },
//         { $set: { emailVerified: true } }
//       );
//       let response = new LoginSuccessResponse({
//         ...token,
//         emailVerified: true,
//       });
//       return res.status(200).json(response);
//     } else {
//       let response = new ResponseError({
//         error: "Invalid OTP.",
//         message: "Invalid OTP.",
//       });
//       return res.status(400).json(response);
//     }
//   } catch (error) {
//     let response = new ResponseError({
//       message: "Something went wrong",
//       error: error.message,
//     });
//     return res.status(500).send(response);
//   }
// };
let resendOtp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const code = (0, utility_1.createOtp)();
        let userRecord = yield UserModel_1.default.findOne({ email: req.body.email });
        let update = yield AuthModel_1.default.findOneAndUpdate({ email: req.body.email }, { $set: { code: code } }, { upsert: true, new: true });
        let response = new ResponseClass_1.ResponseSuccess({});
        return res.status(200).json(response);
    }
    catch (error) {
        let response = new ResponseClass_1.ResponseError({
            message: "Something went wrong",
            error: error.message,
        });
        return res.status(500).send(response);
    }
});
exports.resendOtp = resendOtp;
