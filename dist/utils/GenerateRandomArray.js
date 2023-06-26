"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomArray = void 0;
const generateRandomArray = (target, min, max, count = Infinity) => {
    const array = [];
    let sum = 0;
    while (sum <= target && count > 0) {
        const randomNumber = Math.floor(Math.random() * (max - min) + min);
        if (randomNumber > 0) {
            array.push(randomNumber);
            sum += randomNumber;
            count--;
        }
    }
    const diff = sum - target;
    if (diff > 0) {
        const lastIndex = array.length - 1;
        array[lastIndex] -= diff;
        if (array[lastIndex] <= 0) {
            array.pop();
        }
    }
    if ((sum - diff != target || count > 0) && count != Infinity) {
        throw new Error(`Max Drop Interval must be ${Math.floor(Math.random() * 10 + min)}`);
    }
    return array;
};
exports.generateRandomArray = generateRandomArray;
