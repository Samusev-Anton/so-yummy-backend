// const { User } = require("../../models");

const getCurrent = async (req, res) => {
  const currentUser = req.user;

  res.json({
    status: "success",
    code: 200,
    data: currentUser,
  });
};

module.exports = getCurrent;
