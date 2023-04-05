const { Ingredient } = require("../../models");

const getShoppingIngridients = async (req, res) => {
  const { shoppingList } = req.user;

  const arr = [];
  for (let i = 0; i < shoppingList.length - 1; i++) {
    const result = await Ingredient.findById(shoppingList[i]);
    arr.push(result);
  }

  res.json({
    status: "success",
    code: 200,
    data: arr,
  });
};

module.exports = getShoppingIngridients;
