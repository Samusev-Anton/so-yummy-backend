const { User } = require("../../models");
const { Conflict } = require("http-errors");
const bcrypt = require("bcryptjs");
// const gravatar = require("gravatar");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");

const { SECRET_KEY } = process.env;

const signUp = async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  const payload = {
    id: uuidv4,
  };

  if (user) {
    throw new Conflict(`User with ${email} already exist`);
  }
  // const avatarURL = gravatar.url(email);
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "24h" });

  const result = await User.create({
    name,
    email,
    password: hashPassword,
    // avatarURL,
    token,
  });

  res.status(201).json({
    status: "success",
    code: 201,
    user: result,
  });
};

module.exports = signUp;
