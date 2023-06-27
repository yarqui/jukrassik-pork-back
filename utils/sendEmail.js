import { config } from "dotenv";
import nodemailer from "nodemailer";

config();

const { EMAIL_PASSWORD, EMAIL_SENDER } = process.env;

const sendEmail = (data) => {
  const config = {
    host: "mail.adm.tools",
    port: 465,
    secure: true,
    auth: {
      user: EMAIL_SENDER,
      pass: EMAIL_PASSWORD,
    },
  };

  const transporter = nodemailer.createTransport(config);
  const message = { ...data, from: EMAIL_SENDER };
  transporter.sendMail(message);

  return true;
};

export default sendEmail;
