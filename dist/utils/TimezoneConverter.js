"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getISTmsTime = void 0;
const getISTmsTime = (time = null) => {
    var timeZone = 'Asia/Kolkata';
    console.log(time);
    var ISToffSet = 330; //IST is 5:30; i.e. 60*5+30 = 330 in minutes 
    let offset = ISToffSet * 60 * 1000;
    var currentDate = time ? new Date(time).toLocaleString('en-US', { timeZone: timeZone }) : new Date().toLocaleString('en-US', { timeZone: timeZone });
    var milisecond = new Date(currentDate).getTime() + offset;
    return milisecond;
};
exports.getISTmsTime = getISTmsTime;
