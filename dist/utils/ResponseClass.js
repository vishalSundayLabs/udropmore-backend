"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseSuccess = exports.ResponseError = void 0;
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
class ResponseSuccess {
    constructor(options) {
        this.success = true;
        this.message = "Success";
        if (options.success) {
            this.success = options.success;
        }
        if (options.message) {
            this.message = options.message;
        }
    }
}
exports.ResponseSuccess = ResponseSuccess;
