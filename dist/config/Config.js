"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    PORT: parseInt(process.env.PORT) || 8080,
    NODE_ENV: process.env.NODE_ENV,
    JWTSECRET: process.env.JWTSECRET,
    ISSUER: process.env.ISSUER,
    DBURI: process.env.MONGO_URI,
    EMAIL: process.env.EMAIL,
    EMAILPASSWORD: process.env.EMAILPASSWORD,
    SECRETACCESSKEY: process.env.SECRETACCESSKEY,
    ACCESSKEYID: process.env.ACCESSKEYID,
    REGION: process.env.REGION,
    SESSIONTOKEN: process.env.SESSIONTOKEN,
    BUCKETNAME: process.env.BUCKETNAME,
};
exports.default = exports.config;
