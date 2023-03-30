export interface ResponseErrorOptions {
  success?: boolean;
  error?: string;
  message?: string;
}

export class ResponseError {
  success: boolean = false;
  error: string = "An error occured";
  message: string = "An error occured";
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
