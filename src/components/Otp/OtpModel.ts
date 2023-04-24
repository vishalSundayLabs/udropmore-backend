import * as mongoose from 'mongoose'

const OtpSchema = new mongoose.Schema({
    otp: {
        type: Number,
        required: true
    },
    phoneNumber: {
        type: String
    },
    isExpired: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

const OtpModel = mongoose.model('otps', OtpSchema)

export default OtpModel;
