"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.diseases = exports.whoInFamily = exports.INCORRECT_BODY_FORMAT_MESSAGE = exports.HTTP_INTERNAL_SERVER_ERROR = exports.HTTP_NOT_FOUND = exports.HTTP_UNAUTHORIZED = exports.HTTP_BAD_REQUEST = exports.HTTP_CREATED = exports.HTTP_OK = void 0;
exports.HTTP_OK = 200;
exports.HTTP_CREATED = 201;
exports.HTTP_BAD_REQUEST = 400;
exports.HTTP_UNAUTHORIZED = 403;
exports.HTTP_NOT_FOUND = 404;
exports.HTTP_INTERNAL_SERVER_ERROR = 500;
// messages
exports.INCORRECT_BODY_FORMAT_MESSAGE = "Body format should be as per the object below";
//past history constant
exports.whoInFamily = ["Maternal", "Paternal", "Marital", "Sibling"];
exports.diseases = ["Diabetes", "Thyroid", "Epilepsy", "Hypertension", "H.D", "Koch", "Cancer", "Asthma"];
