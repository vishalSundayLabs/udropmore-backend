"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseSuccess = exports.ResponseBodyFormatError = exports.ResponseError = void 0;
class ResponseError {
    constructor(options) {
        this.success = false;
        this.error = "An error occured";
        this.message = "An error occured";
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
exports.ResponseError = ResponseError;
class ResponseBodyFormatError {
    constructor(options) {
        this.success = false;
        this.message = "An error occured";
        this.bodyFormat = null;
        if (options.message) {
            this.message = options.message;
        }
        if (options.bodyFormat) {
            this.bodyFormat = options.bodyFormat;
        }
        if (options.success) {
            this.success = options.success;
        }
    }
}
exports.ResponseBodyFormatError = ResponseBodyFormatError;
class ResponseSuccess {
    constructor(options) {
        this.success = true;
        this.message = "Success";
        this.result = null;
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
exports.ResponseSuccess = ResponseSuccess;
