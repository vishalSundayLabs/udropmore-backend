"use strict";
/**
 * EmailHelper.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const nodemailer = require("nodemailer");
const Config_1 = require("../config/Config");
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: Config_1.default.EMAIL,
        pass: Config_1.default.EMAILPASSWORD, // account.pass  // generated ethereal password
    },
});
function sendEmail(email, subject, text, html) {
    let mailOptions = JSON.parse(JSON.stringify({
        from: '"Name" <email@com.org>',
        to: email,
        subject: subject,
        text: text,
        html: html,
    }));
    return new Promise((resolve, reject) => {
        if (Config_1.default.NODE_ENV == "testing") {
            resolve(true); // No emails in test mode
        }
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                reject(error);
            }
            resolve(info);
        });
    });
}
exports.sendEmail = sendEmail;
