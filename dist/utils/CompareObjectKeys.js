"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareObjectKeys = void 0;
function compareObjectKeys(actualBody, expectedBody) {
    return JSON.stringify(actualBody) === JSON.stringify(expectedBody);
}
exports.compareObjectKeys = compareObjectKeys;
