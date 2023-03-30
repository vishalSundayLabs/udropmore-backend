/**
 * EmailHelper.ts
 */

import * as nodemailer from "nodemailer";
import config from "../config/Config";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: config.EMAIL, // account.user, // generated ethereal user
    pass: config.EMAILPASSWORD, // account.pass  // generated ethereal password
  },
});

export function sendEmail(
  email: string,
  subject: string,
  text: string,
  html: string
) {
  let mailOptions = JSON.parse(
    JSON.stringify({
      from: '"Name" <email@com.org>', // sender address
      to: email, // list of receivers
      subject: subject, // Subject line
      text: text, // plain text body
      html: html,
    })
  );

  return new Promise((resolve, reject) => {
    if (config.NODE_ENV == "testing") {
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
