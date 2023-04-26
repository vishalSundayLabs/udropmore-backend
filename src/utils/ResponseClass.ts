export interface ResponseErrorOptions {
  success?: boolean;
  error?: string;
  message?: string;
  isActive?: boolean;
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

export class ResponseBodyFormatError {

  success: boolean = false;
  message: string = "An error occured";
  bodyFormat: object = null;

  constructor(options) {

    if (options.message) {
      this.message = options.message
    }

    if (options.bodyFormat) {
      this.bodyFormat = options.bodyFormat
    }

    if (options.success) {
      this.success = options.success;
    }

  }

}

export interface ResponseSuccessOptions {
  success?: boolean;
  message?: string;
  result?: object;
}

export class ResponseSuccess {

  success: boolean = true;
  message: string = "Success";
  result: object = null;

  constructor(options: ResponseSuccessOptions) {

    if (options.success) {
      this.success = options.success;
    }

    if (options.message) {
      this.message = options.message;
    }

    if (options.result) {
      this.result = options.result;
    }

  }

}