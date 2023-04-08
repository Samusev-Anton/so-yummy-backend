const { User } = require("../../models");

const getShoppingIngridients = async (req, res) => {
  const { _id } = req.user;

  const result = await User.findById(_id);

  // const arr = [];
  // for (let i = 0; i < shoppingList.length - 1; i++) {
  //   const result = await Ingredient.findById(shoppingList[i]);
  //   arr.push(result);
  // }

  res.json({
    status: "success",
    code: 200,
    data: result.shoppingList,
  });
};

module.exports = getShoppingIngridients;
