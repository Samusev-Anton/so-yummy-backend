const { User } = require("../../models");
// const { ObjectId } = require("mongodb");

const addIngridient = async (req, res) => {
  const { _id, shoppingList } = req.user;
  const shopIngridient = req.params.ingridient;
  console.log(typeof shopIngridient.toString());
  console.log(typeof shoppingList);

  const existIgridient = shoppingList.some((item) => item == shopIngridient);
  console.log(existIgridient);

  const ingridientForShop = await User.findByIdAndUpdate(_id, {
    $push: {
      shoppingList: shopIngridient,
    },
  });

  res.status(201).json({
    status: "success",
    code: 201,
    data: ingridientForShop,
  });
};

module.exports = addIngridient;
