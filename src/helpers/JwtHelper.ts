/**
 * JwtHelper.ts
 */

import * as jwt from "jsonwebtoken";
import { Request, Response, NextFunction, response } from "express";
import IUser, { RequestWithUser } from "../components/Users/UserInterface";
import config from "../config/Config";
import { ILogin, IToken } from "../components/Login/LoginInterface";
import { LoginSuccessResponse } from "../components/Login/LoginClass";
import { ResponseError } from "../utils/ResponseClass";
import UserModel from "../components/Users/UserModel";

export async function createToken(payload: IToken) {
  const expiry: number = 60 * 24 * 60 * 60;
  const expiryStamp: number = Date.now() + expiry * 1000;
  const token = jwt.sign(payload, config.JWTSECRET, {
    algorithm: "HS384",
    expiresIn: '1d',
    issuer: config.ISSUER,
  });
  return { access_token: token, expirOn: expiryStamp };
}

export const decodeToken = async (
  req: RequestWithUser,
  res: Response,
  callback: NextFunction
) => {
  const token = req.header("idToken");
  if (token != "" && token != undefined) {
    try {
      const result: any = await jwt.verify(token, config.JWTSECRET);
      req.user = result;
      callback();
    } catch (error) {
      let response = new ResponseError({
        error: "Authorization failed.",
        message: error.message,
      });
      return res.status(401).json(response);
    }
  } else {
    let response = new ResponseError({
      message: "Authorization failed.",
      error: "'idToken' field is required",
    });
    return res.status(400).json(response);
  }
};

export const refreshToken = async (req: Request, res: Response) => {
  const tkn = req.body.idToken || req.header("idToken");
  if (tkn != "" && tkn != undefined) {
    try {
      const result: any = await jwt.verify(tkn, config.JWTSECRET);
      const payload: IToken = { _id: result._id, email: result.email };
      const token: ILogin = await createToken(payload);
      let userInfo: IUser = await UserModel.findOne(
        { _id: result._id },
        { emailVerified: 1 }
      );
      let response = new LoginSuccessResponse({
        ...token,
        emailVerified: userInfo.emailVerified,
      });
      return res.status(200).json(response);
    } catch (error) {
      let response = new ResponseError({
        message: "Authorization failed.",
        error: error.message,
      });
      return res.status(401).json(response);
    }
  } else {
    let response = new ResponseError({
      message: "Authorization failed.",
      error: "'idToken' field is required",
    });
  }
  return res.status(400).json(response);
};

export async function resetPasswordToken(payload) {
  const expiry = 10 * 60;
  const expiryStamp = Date.now() + expiry * 1000;
  const token = jwt.sign(payload, config.JWTSECRET, {
    algorithm: "HS384",
    expiresIn: expiry,
    issuer: config.ISSUER,
  });
  return token;
}
