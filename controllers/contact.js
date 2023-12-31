import { config } from "dotenv";
import ctrlWrapper from "../utils/ctrlWrapper.js";
import sendEmail from "../utils/sendEmail.js";

config();

const { EMAIL_SENDER } = process.env;

const sendLeadToEmail = (req, res) => {
  const { email, name, message } = req.body;

  const emailData = {
    to: `${EMAIL_SENDER}`,
    subject: `Вам надіслано новий запит від ${name}`,
    text: `Контактні дані: Пошта: ${email}, Ім'я: ${name}, Коментар: ${message} `,
    html: `<p>Контактні дані:</p>
    <p>Пошта: ${email}</p>
    <p>Ім'я: ${name}</p>
    <p>Коментар: ${message}</p>
    `,
  };

  sendEmail(emailData);

  res.status(200).json("Message sent successfully");
};

export default ctrlWrapper(sendLeadToEmail);
