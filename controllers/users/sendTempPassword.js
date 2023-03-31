const { User } = require("../../models");
const { Unauthorized } = require("http-errors");
const { v4: uuidv4 } = require("uuid");
const { sendEmail } = require("../../helpers");

const sendTempPassword = async (req, res) => {
  const { email } = req.params;
  const user = await User.findOne({ email });
  if (!user) {
    throw new Unauthorized(`User with ${email} not found, please register`);
  }
  const temporaryPassword = uuidv4();
  const mail = {
    to: email,
    subject: "Temporary Password",
    html: `<p>${temporaryPassword}</p>`,
  };
  await sendEmail(mail);

  res.json({
    temporaryPassword: temporaryPassword,
  });
};

module.exports = sendTempPassword;
