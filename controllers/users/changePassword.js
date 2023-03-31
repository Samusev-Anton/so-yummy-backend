const { User } = require("../../models");
const bcrypt = require("bcryptjs");

// const { Unauthorized } = require("http-errors");

const changePassword = async (req, res) => {
  const { password, email } = req.body;
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

  const updatePassword = await User.findOneAndUpdate(
    { email: email },
    { password: hashPassword }
  );

  console.log(updatePassword);
};

module.exports = changePassword;
