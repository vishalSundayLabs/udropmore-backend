"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeapScoreQuestionnaireSchedule = void 0;
const LeapCategories_1 = require("./LeapCategories");
exports.LeapScoreQuestionnaireSchedule = {
    [LeapCategories_1.getLeapCategories.LIFESTYLE]: [2, 5, 6, 7],
    [LeapCategories_1.getLeapCategories.EMOTION]: [3, 5, 6, 9, 11, 30],
    [LeapCategories_1.getLeapCategories.ANATOMY]: [4, 2, 40, 19, 12, 22],
    [LeapCategories_1.getLeapCategories.PHYSICAL]: [5, 2, 6, 7, 10, 5]
};
