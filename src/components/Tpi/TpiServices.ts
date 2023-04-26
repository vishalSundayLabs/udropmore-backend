import TpiModel from "./TpiResponseModel";

//twilio 
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

export const sendWaOtp = async (phoneNumber, text) => {

    const reqData = {
        body: text,
        from: 'whatsapp:+14155238886',
        to: `whatsapp:+91${phoneNumber}`
    }

    const data = client.messages
        .create(reqData)
        .then(async (message) => {

            return message;

        })
        .catch((err) => {

            const errs = err.message

            return { message: errs }

        })

    return data;

}