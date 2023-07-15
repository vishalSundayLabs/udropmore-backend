import config from "../config/Config";

export const createOtp = () => {
    return  Math.floor(Math.random() * 1000) + 1000
}