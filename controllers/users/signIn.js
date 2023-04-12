const { User } = require("../../models");
const { Unauthorized } = require("http-errors");
const jwt = require("jsonwebtoken");

const { SECRET_KEY } = process.env;

const signIn = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || !user.comparePassword(password)) {
    throw new Unauthorized("Email is wrong or not verify or password is wrong");
  }

  const payload = {
    id: user._id,
  };
  const token = await jwt.sign(payload, SECRET_KEY, { expiresIn: "24h" });
  console.log(token);
  const result = await User.findByIdAndUpdate(
    user._id,
    { token },
    { new: true }
  );
  console.log(result);
  res.status(200).json({
    status: "success",
    code: 200,
    user: result,
  });
};

module.exports = signIn;
