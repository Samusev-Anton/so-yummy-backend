const { User } = require("../../models");

const deleteIngridients = async (req, res) => {
  const { _id } = req.user;
  const { ingridient } = req.params;
  const ingridientId = ingridient.toString();

  const result = await User.findByIdAndUpdate(_id, {
    $pull: {
      shoppingList: {
        ingridientId,
      },
    },
  });
  console.log(ingridient);
  res.json({
    status: "success",
    code: 200,
    data: result,
  });
};

module.exports = deleteIngridients;
