import { ResponseBodyFormatError } from "./ResponseClass";

export function compareObjectKeys(actualBody, expectedBody) {
    return JSON.stringify(actualBody) === JSON.stringify(expectedBody);
}
