const { sendEmail } = require("../../helpers");
const { Unauthorized } = require("http-errors");

const subscribe = async (req, res) => {
  const { email } = req.body;
  const existEmail = req.user.email;
  if (email !== existEmail) {
    throw new Unauthorized(
      `The email:${email} you entered does not match yours. Please enter correct email`
    );
  }

  const mail = {
    to: email,
    subject: "Newsletter subscription",
    html: `<p>Congratulation! You have successfully subscribed to the newsletter of new recipes </p>`,
  };

  await sendEmail(mail);
  res.status(201).json({
    status: "success",
    code: 201,
  });
};

module.exports = subscribe;
