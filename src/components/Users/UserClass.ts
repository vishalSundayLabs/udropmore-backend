import {
  ResponseSuccess,
  ResponseSuccessOptions,
} from "../../utils/ResponseClass";
interface UserResponse {
  emailVerified: boolean;
  isActive: boolean;
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  shortSSN: string;
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
