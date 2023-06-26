"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomAuction = void 0;
// Array to store the random user objects
const auction = [];
// Random product IDs
// const productIds = ['ABC123', 'XYZ456', '123DEF', '789GHI', 'JKL321'];
// Random types
const types = ["DASH_DROP", "COOL_DROP", "MEGA_DROP"];
// Random start and end times (within the last 7 days)
function generateRandomTime() {
    const currentTime = new Date().getTime();
    const startTime = new Date(currentTime - Math.floor(Math.random() * 7 * 24 * 60 * 60 * 1000));
    const endTime = new Date(startTime.getTime() + Math.floor(Math.random() * 24 * 60 * 60 * 1000));
    return {
        startTime,
        endTime
    };
}
// Random entry fees
const entryFees = [10, 20, 30, 40, 50];
// Random drop start prices
const dropStartPrices = [100, 200, 300, 400, 500];
// Random status
const statuses = ["SCHEDULED", "ACTIVE", "COMPLETED"];
// Random minimum and maximum drop values
const minDrops = [5, 10, 15, 20, 25];
const maxDrops = [30, 40, 50, 60, 70];
// Generate a random user object
const generateRandomAuction = () => {
    const { startTime, endTime } = generateRandomTime();
    const type = types[Math.floor(Math.random() * types.length)];
    const entryFee = entryFees[Math.floor(Math.random() * entryFees.length)];
    const dropStartPrice = dropStartPrices[Math.floor(Math.random() * dropStartPrices.length)];
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    const minDrop = minDrops[Math.floor(Math.random() * minDrops.length)];
    const maxDrop = maxDrops[Math.floor(Math.random() * maxDrops.length)];
    return {
        types: type,
        startTime,
        endTime,
        entryFees: entryFee,
        dropStartPrice,
        status,
        minDrop,
        maxDrop
    };
};
exports.generateRandomAuction = generateRandomAuction;
