import {
  ResponseSuccess,
  ResponseSuccessOptions,
} from "../../utils/ResponseClass";

export interface LoginSuccessOptions extends ResponseSuccessOptions {
  access_token: string;
  emailVerified: boolean;
  expirOn: Number;
}

export class LoginSuccessResponse extends ResponseSuccess {
  access_token: string;
  expirOn: Number;
  emailVerified: boolean;
  constructor(options: LoginSuccessOptions) {
    super(options);
    if (options.access_token) {
      this.access_token = options.access_token;
    }
    if (options.expirOn) {
      this.expirOn = options.expirOn;
    }
    if (options.emailVerified) {
      this.emailVerified = options.emailVerified;
    }
  }
}

export interface UnverifiedLoginSuccessOptions extends ResponseSuccessOptions {
  emailVerified: boolean;
}
export class UnverifiedLoginSuccessResponse extends ResponseSuccess {
  emailVerified: boolean;
  constructor(options: UnverifiedLoginSuccessOptions) {
    super(options);
    this.emailVerified = options.emailVerified;
  }
}
