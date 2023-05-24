"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.preprocessMiddleware = void 0;
const preprocessMiddleware = (req, res, next) => {
    let path = 'content/'; //Add static path
    path = path + req.body.contentId; //Add id
    req.processedpath = path;
    next();
};
exports.preprocessMiddleware = preprocessMiddleware;
