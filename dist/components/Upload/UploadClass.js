"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultipleFileResponseSuccess = exports.SingleFileResponseSuccess = void 0;
const ResponseClass_1 = require("../../utils/ResponseClass");
class SingleFileResponseSuccess extends ResponseClass_1.ResponseSuccess {
    constructor(options) {
        super(options);
        if (options.location) {
            this.location = options.location;
        }
    }
}
exports.SingleFileResponseSuccess = SingleFileResponseSuccess;
class MultipleFileResponseSuccess extends ResponseClass_1.ResponseSuccess {
    constructor(options) {
        super(options);
        if (options.location) {
            this.location = options.location;
        }
    }
}
exports.MultipleFileResponseSuccess = MultipleFileResponseSuccess;
