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
const Config_1 = require("../../config/Config");
//twilio 
const accountSid = Config_1.default.ACCOUNT_SID;
const authToken = Config_1.default.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const sendWaOtp = (phoneNumber, text) => __awaiter(void 0, void 0, void 0, function* () {
    const reqData = {
        body: text,
        from: '+16187063663',
        to: `+91${phoneNumber}`
    };
    const data = client.messages
        .create(reqData)
        .then((message) => __awaiter(void 0, void 0, void 0, function* () {
        return message;
    }))
        .catch((err) => {
        const errs = err.message;
        return { message: errs };
    });
    console.log("line 26 tpi se", accountSid, authToken, data);
    return data;
});
exports.sendWaOtp = sendWaOtp;
