export interface ResponseErrorOptions {
  success?: boolean;
  error?: string;
  message?: string;
  isActive?:boolean;
}

export class ResponseError {
  success: boolean = false;
  error: string = "An error occured";
  message: string = "An error occured";
  isActive:boolean = false;
  constructor(options: ResponseErrorOptions) {
    if (options.success) {
      this.success = options.success;
    }
    if (options.error) {
      this.error = options.error;
    }
    if (options.message) {
      this.message = options.message;
    }
    if (options.isActive) {
      this.isActive = options.isActive;
    }
  }
}

export interface ResponseSuccessOptions {
  success?: boolean;
  message?: string;
}

export class ResponseSuccess {
  success: boolean = true;
  message: string = "Success";
  constructor(options: ResponseSuccessOptions) {
    if (options.success) {
      this.success = options.success;
    }
    if (options.message) {
      this.message = options.message;
    }
  }
}
