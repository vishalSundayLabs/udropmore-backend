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
exports.getUserWalletBalance = exports.getUserList = exports.userUpdate = exports.createUser = void 0;
// models
const UserModel_1 = require("./UserModel");
// classes
const ResponseClass_1 = require("../../utils/ResponseClass");
const Master_1 = require("../../Constant/Master");
const bodyTraverse_1 = require("../../helpers/bodyTraverse");
const pagination_1 = require("../../helpers/pagination");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!body.phoneNumber || !body.userType || !body.platform || !body.firstName) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad request! ,first name  , phone number , userType , platform must be provide!"
        }));
    }
    const reqData = {
        firstName: body.firstName,
        lastName: body.lastName,
        middleName: body.middleName,
        email: body.email,
        phoneNumber: body.phoneNumber,
        userType: body.userType
    };
    try {
        const oldUser = yield UserModel_1.default.findOne({ phoneNumber: body.phoneNumber, isActive: true, isDeleted: false });
        if (oldUser) {
            return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseSuccess({
                success: false,
                message: "This phone number is already register!",
                result: oldUser
            }));
        }
        const user = yield UserModel_1.default.create(reqData);
        return res.status(Master_1.HTTP_CREATED).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: 'User created successfully!',
            result: user
        }));
    }
    catch (error) {
        let response = new ResponseClass_1.ResponseError({
            message: "Something went wrong",
            error: error.message,
        });
        return res.status(500).json(response);
    }
});
exports.createUser = createUser;
const userUpdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const params = req.params;
    const body = req.body;
    if (!params.userId) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad request! User ID must be provide!"
        }));
    }
    try {
        const user = yield UserModel_1.default.findOne({ _id: params.userId, isDeleted: false });
        if (!user) {
            return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
                success: false,
                message: "user does not exist!"
            }));
        }
        (0, bodyTraverse_1.bodyTraverse)(user, body);
        user.updatedBy = req.userId;
        yield user.save();
        return res.status(Master_1.HTTP_OK).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: "User Update successfully",
            result: user
        }));
    }
    catch (error) {
        let response = new ResponseClass_1.ResponseError({
            message: "Something went wrong",
            error: error.message,
        });
        return res.status(500).json(response);
    }
});
exports.userUpdate = userUpdate;
const getUserList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { limit, skips } = (0, pagination_1.pagination)(req.query);
    try {
        const userList = yield UserModel_1.default.find({ isDeleted: false }).sort({ $natural: -1 }).skip(skips).limit(limit);
        return res.status(Master_1.HTTP_CREATED).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: 'Get user list successfully!',
            result: userList
        }));
    }
    catch (error) {
        let response = new ResponseClass_1.ResponseError({
            message: "Something went wrong",
            error: error.message,
        });
        return res.status(500).json(response);
    }
});
exports.getUserList = getUserList;
const getUserWalletBalance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const params = req.params;
    if (!params.userId) {
        return res.status(Master_1.HTTP_BAD_REQUEST).send(new ResponseClass_1.ResponseError({
            success: false,
            message: "Bad request! User ID must be provide!"
        }));
    }
    try {
        const userWalletBalance = yield UserModel_1.default.findOne({ _id: params.userId, isDeleted: false }, { firstName: true, email: true, phoneNumber: true, walletBalance: true });
        return res.status(Master_1.HTTP_CREATED).send(new ResponseClass_1.ResponseSuccess({
            success: true,
            message: 'Get user list successfully!',
            result: userWalletBalance
        }));
    }
    catch (error) {
        let response = new ResponseClass_1.ResponseError({
            message: "Something went wrong",
            error: error.message,
        });
        return res.status(500).json(response);
    }
});
exports.getUserWalletBalance = getUserWalletBalance;
// export const deleteUser = async (req, res) => {
//   const userId = req.params.id
//   if (!userId) {
//     return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
//       success: false,
//       message: "Bad Request! , user id required!"
//     }))
//   }
//   try {
//     const user = await UserModel.findOne({ _id: userId, isDeleted: false });
//     if (!user) {
//       return res.status(HTTP_OK).send(new ResponseSuccess({
//         success: false,
//         message: "user already deleted ."
//       }))
//     }
//     user.isDeleted = true
//     await user.save()
//     return res.status(HTTP_OK).send(new ResponseSuccess({
//       success: true,
//       message: "User deleted successfully."
//     }))
//   } catch (error) {
//     let response = new ResponseError({
//       message: "Something went wrong",
//       error: error.message,
//     });
//     return res.status(500).json(response);
//   }
// }
