"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bodyTraverse = void 0;
const bodyTraverse = (data, body) => {
    for (let key in body) {
        if (body[key] && key != "_id" && key != "__v" && key != "createdAt" && key != "updatedAt") {
            data[key] = body[key];
        }
    }
};
exports.bodyTraverse = bodyTraverse;
