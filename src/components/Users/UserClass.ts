import {
  ResponseSuccess,
  ResponseSuccessOptions,
} from "../../utils/ResponseClass";

import { ICommonFields } from "./UserInterface";

interface IUserResponse extends ICommonFields {
  emailVerified: boolean;
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  shortSSN: string;
  userType: string;
  userId?: string;
  waToken: string;
}

interface IUserCreateOptions extends ResponseSuccessOptions {
  user: IUserResponse;
}

export class IUserResponseSuccess extends ResponseSuccess {
  message: string = "User account created successfully.";
  user: IUserResponse;
  constructor(options: IUserCreateOptions) {
    super(options);
    if (options.user) {
      this.user = options.user;
    }
  }
}
