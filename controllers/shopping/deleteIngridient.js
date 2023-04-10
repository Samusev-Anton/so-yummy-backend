const { User } = require("../../models");
const { ObjectId } = require("mongodb");

const deleteIngridients = async (req, res) => {
  const { _id } = req.user;

  const { ingridient } = req.params;
  console.log(ObjectId(ingridient));

  const result = await User.updateOne(
    { _id: ObjectId(_id) },
    {
      $pull: { shoppingList: { _id: ingridient } },
    }
  );

  res.json({
    status: "success",
    code: 200,
    data: result,
  });
};

module.exports = deleteIngridients;
