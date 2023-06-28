"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getISTmsTime = void 0;
const getISTmsTime = (time = null) => {
    var timeZone = 'Asia/Kolkata';
    var currentDate = time ? new Date(time).toLocaleString('en-US', { timeZone: timeZone }) : new Date().toLocaleString('en-US', { timeZone: timeZone });
    var milisecond = new Date(currentDate).getTime();
    return milisecond;
};
exports.getISTmsTime = getISTmsTime;
