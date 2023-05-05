"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateCurrentWeekAndDays = void 0;
const dayjs = require("dayjs");
const calculateCurrentWeekAndDays = (lmpDate) => {
    const currentDate = dayjs(new Date());
    const week = currentDate.diff(lmpDate, "week") + 1;
    const days = currentDate.diff(lmpDate, "day") + 1;
    return { week, days };
};
exports.calculateCurrentWeekAndDays = calculateCurrentWeekAndDays;
