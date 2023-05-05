import dayjs = require("dayjs")

export const calculateCurrentWeekAndDays = (lmpDate) => {

    const currentDate = dayjs(new Date())
    const week = currentDate.diff(lmpDate, "week") + 1
    const days = currentDate.diff(lmpDate, "day") + 1
    return { week, days }

}