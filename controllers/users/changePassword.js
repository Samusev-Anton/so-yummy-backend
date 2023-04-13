const { User } = require("../../models");
const bcrypt = require("bcryptjs");

const changePassword = async (req, res) => {
  const { password, email } = req.body;
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

  const updatePassword = await User.findOneAndUpdate(
    { email: email },
    { password: hashPassword }
  );

  console.log(updatePassword);
  res.status(200).json({
    status: "success",
    code: 201,
    data: { message: "You password already changed" },
  });
};

module.exports = changePassword;
