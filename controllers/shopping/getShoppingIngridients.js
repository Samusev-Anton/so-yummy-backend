const { User } = require("../../models");

const getShoppingIngridients = async (req, res) => {
  const { _id } = req.user;

  const result = await User.findById(_id);

  res.json({
    status: "success",
    code: 200,
    data: result.shoppingList,
  });
};

module.exports = getShoppingIngridients;
