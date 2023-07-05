// external libraries
import { Response, Request } from "express";
// models
import UserModel from "./UserModel";
// interfaces
import IUser, { IAvailability, IRequestWithUser } from "./UserInterface";
// classes
import { ResponseError, ResponseSuccess } from "../../utils/ResponseClass";
import { HTTP_BAD_REQUEST, HTTP_CREATED, HTTP_NOT_FOUND, HTTP_OK } from "../../Constant/Master";
import { bodyTraverse } from "../../helpers/bodyTraverse";
import { pagination } from "../../helpers/pagination";


export const createUser = async (req, res) => {

  const body = req.body

  if (!body.phoneNumber || !body.userType || !body.platform || !body.firstName) {

    return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
      success: false,
      message: "Bad request! ,first name  , phone number , userType , platform must be provide!"
    }))

  }

  const reqData = {
    firstName: body.firstName,
    lastName: body.lastName,
    middleName: body.middleName,
    email: body.email,
    phoneNumber: body.phoneNumber,
    userType: body.userType
  }

  try {

    const oldUser = await UserModel.findOne({ phoneNumber: body.phoneNumber, isActive: true, isDeleted: false })

    if (oldUser) {

      return res.status(HTTP_BAD_REQUEST).send(new ResponseSuccess({
        success: false,
        message: "This phone number is already register!",
        result: oldUser
      }))

    }
    const user = await UserModel.create(reqData);

    return res.status(HTTP_CREATED).send(new ResponseSuccess({
      success: true,
      message: 'User created successfully!',
      result: user
    }))

  } catch (error) {

    let response = new ResponseError({
      message: "Something went wrong",
      error: error.message,
    });

    return res.status(500).json(response);

  }

}

export const userUpdate = async (req, res) => {

  const params = req.params
  const body = req.body

  if (!params.userId) {

    return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
      success: false,
      message: "Bad request! User ID must be provide!"
    }))

  }

  try {

    const user = await UserModel.findOne({ _id: params.userId, isDeleted: false })

    if (!user) {

      return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
        success: false,
        message: "user does not exist!"
      }))

    }

    bodyTraverse(user, body)

    user.updatedBy = req.userId
    await user.save()

    return res.status(HTTP_OK).send(new ResponseSuccess({
      success: true,
      message: "User Update successfully",
      result: user
    }))

  } catch (error) {

    let response = new ResponseError({
      message: "Something went wrong",
      error: error.message,
    });

    return res.status(500).json(response);
  }

}

export const getUserList = async (req, res) => {

  const { limit, skips } = pagination(req.query)

  try {

    const userList = await UserModel.find({ isDeleted: false }).sort({ $natural: -1 }).skip(skips).limit(limit)

    return res.status(HTTP_CREATED).send(new ResponseSuccess({
      success: true,
      message: 'Get user list successfully!',
      result: userList
    }))

  } catch (error) {

    let response = new ResponseError({
      message: "Something went wrong",
      error: error.message,
    });

    return res.status(500).json(response);

  }

}

export const getUserById = async (req, res) => {

  const params = req.params

  if (!params.userId) {

    return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
      success: false,
      message: "Bad request! User ID must be provide!"
    }))

  }

  try {

    const user = await UserModel.findOne({ _id: params.userId, isDeleted: false }, { jwtToken: false, isDeleted: false, createdBy: false, updatedBy: false })

    return res.status(HTTP_CREATED).send(new ResponseSuccess({
      success: true,
      message: 'Get user details successfully!',
      result: user
    }))

  } catch (error) {

    let response = new ResponseError({
      message: "Something went wrong",
      error: error.message,
    });

    return res.status(500).json(response);

  }

}

export const getUserWalletBalance = async (req, res) => {

  const params = req.params

  if (!params.userId) {

    return res.status(HTTP_BAD_REQUEST).send(new ResponseError({
      success: false,
      message: "Bad request! User ID must be provide!"
    }))

  }

  try {

    const userWalletBalance = await UserModel.findOne({ _id: params.userId, isDeleted: false }, { firstName: true, email: true, phoneNumber: true, walletBalance: true })

    return res.status(HTTP_CREATED).send(new ResponseSuccess({
      success: true,
      message: 'Get user list successfully!',
      result: userWalletBalance
    }))

  } catch (error) {

    let response = new ResponseError({
      message: "Something went wrong",
      error: error.message,
    });

    return res.status(500).json(response);

  }

}

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



