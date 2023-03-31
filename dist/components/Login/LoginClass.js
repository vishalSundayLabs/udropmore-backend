"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnverifiedLoginSuccessResponse = exports.LoginSuccessResponse = void 0;
const ResponseClass_1 = require("../../utils/ResponseClass");
class LoginSuccessResponse extends ResponseClass_1.ResponseSuccess {
    constructor(options) {
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
exports.LoginSuccessResponse = LoginSuccessResponse;
class UnverifiedLoginSuccessResponse extends ResponseClass_1.ResponseSuccess {
    constructor(options) {
        super(options);
        this.emailVerified = options.emailVerified;
    }
}
exports.UnverifiedLoginSuccessResponse = UnverifiedLoginSuccessResponse;
