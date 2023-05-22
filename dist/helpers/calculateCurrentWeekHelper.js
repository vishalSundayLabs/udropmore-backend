"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateCurrentWeekAndDays = void 0;
const dayjs = require("dayjs");
const calculateCurrentWeekAndDays = (lmpDate, givenDate = null) => {
    const currentDate = givenDate ? dayjs(givenDate) : dayjs(new Date());
    const week = currentDate.diff(lmpDate, "week") + 1;
    const days = currentDate.diff(lmpDate, "day") + 1;
    return { week, days };
};
exports.calculateCurrentWeekAndDays = calculateCurrentWeekAndDays;
