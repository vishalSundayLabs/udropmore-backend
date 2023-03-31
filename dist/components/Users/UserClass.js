"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResponseSuccess = void 0;
const ResponseClass_1 = require("../../utils/ResponseClass");
class UserResponseSuccess extends ResponseClass_1.ResponseSuccess {
    constructor(options) {
        super(options);
        this.message = "User account created successfully.";
        if (options.user) {
            this.user = options.user;
        }
    }
}
exports.UserResponseSuccess = UserResponseSuccess;
