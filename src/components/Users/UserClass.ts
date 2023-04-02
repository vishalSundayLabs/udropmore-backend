import {
  ResponseSuccess,
  ResponseSuccessOptions,
} from "../../utils/ResponseClass";
import { commanFields } from "./UserInterface";
interface UserResponse extends commanFields{
  emailVerified: boolean;
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber:string;
  shortSSN: string;
  userType:string;
  id?: string;
}
interface UserCreateOptions extends ResponseSuccessOptions {
  user: UserResponse;
}
export class UserResponseSuccess extends ResponseSuccess {
  message: string = "User account created successfully.";
  user: UserResponse;
  constructor(options: UserCreateOptions) {
    super(options);
    if (options.user) {
      this.user = options.user;
    }
  }
}
