//twilio 
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
console.log(accountSid, authToken)
const client = require('twilio')(accountSid, authToken);

export const sendWaOtp = async (phoneNumber, text) => {
    const data = client.messages
        .create({
            body: text,
            from: 'whatsapp:+14155238886',
            to: `whatsapp:+91${phoneNumber}`
        })
        .then((message) => {
            return message;
        })
        .catch((err) => {
            const errs = err.message
            return { message: errs }
        })
    return data;
}