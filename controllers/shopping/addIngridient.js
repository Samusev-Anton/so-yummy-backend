const { User } = require("../../models");

const addIngridient = async (req, res) => {
  const { _id } = req.user;
  const shopIngridient = req.body;


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
