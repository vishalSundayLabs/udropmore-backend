export const createOtp = () => {
    return process.env.DEV_OTP ? process.env.DEV_OTP : Math.floor(Math.random() * 1000) + 1000
}