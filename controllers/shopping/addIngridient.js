const { User } = require("../../models");

const addIngridient = async (req, res) => {
  const { _id, shoppingList } = req.user;
  const shopIngridient = req.body;
  console.log(shopIngridient);

  // const existIgridient = shoppingList.some(
  //   (item) => item.toString() === shopIngridient
  // );

  // if (existIgridient) {
  //   return res.status(400).json({
  //     status: "error",
  //     code: 400,
  //     message: "Ingridient already exist",
  //   });
  // }

  const ingridientForShop = await User.findByIdAndUpdate(_id, {
    $push: {
      shoppingList: shopIngridient,
    },
  });

  console.log(ingridientForShop);

  res.status(201).json({
    status: "success",
    code: 201,
    data: ingridientForShop,
  });
};

module.exports = addIngridient;
