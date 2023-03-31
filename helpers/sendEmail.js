const dotenv = require("dotenv");
dotenv.config();

const sgMail = require("@sendgrid/mail");
const { SENDGRID_KEY } = process.env;

sgMail.setApiKey(SENDGRID_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: "Samusefffff@gmail.com" };
  try {
    await sgMail.send(email);
    console.log(email);
    return true;
  } catch (error) {
    throw error;
  }
};

// const mail = {
//   to: "SamusievAnton@gmail.com",
//   from: "Samusefffff@gmail.com",
//   subject: "Hello",
//   html: "<a>Перейдите по ссылке для подтверждения регистрации</a>",
// };

module.exports = sendEmail;
