import config from "../config/Config";

export const createOtp = () => {
    return config.DEV_OTP ? config.DEV_OTP : Math.floor(Math.random() * 1000) + 1000
}