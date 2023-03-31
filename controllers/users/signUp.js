const { User } = require("../../models");
const { Conflict } = require("http-errors");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const { v4: uuidv4 } = require("uuid");
const { sendEmail } = require("../../helpers");

const signUp = async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`User with ${email} already exist`);
  }
  const verificationToken = uuidv4();
  const avatarURL = gravatar.url(email);
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const result = await User.create({
    name,
    email,
    password: hashPassword,
    avatarURL,
    verificationToken,
  });

  const mail = {
    to: email,
    subject: "Varificate email",
    html: `<p><a target="_blank" href="http://localhost:3000/goit-react-hw-08-phonebook/verify/${verificationToken}">Click to verify email</a></p>`,
  };
  await sendEmail(mail);
  res.status(201).json({
    status: "success",
    code: 201,
    user: {
      name,
      email: result.email,
      subscription: result.subscription,
      avatarURL,
      verificationToken,
      verify: result.verify,
    },
  });
};

module.exports = signUp;
