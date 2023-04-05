"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendWaOtp = void 0;
//twilio 
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
console.log(accountSid, authToken);
const client = require('twilio')(accountSid, authToken);
const sendWaOtp = (phoneNumber, text) => __awaiter(void 0, void 0, void 0, function* () {
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
        const errs = err.message;
        return { message: errs };
    });
    return data;
});
exports.sendWaOtp = sendWaOtp;
