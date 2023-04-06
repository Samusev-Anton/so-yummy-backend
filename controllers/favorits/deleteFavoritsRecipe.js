const { User } = require("../../models");
// const { HttpError } = require("../../helpers");
const { ObjectId } = require("mongodb");

const deleteFavoritsRecipe = async (req, res, next) => {
  const { _id } = req.user;
  const recipe = req.params.favorite;

  const result = await User.updateOne(
    { _id: ObjectId(_id) },
    { $pull: { favoritsRecipe: recipe } }
  );

  res.json({
    status: "success",
    code: 200,
    data: result,
  });
};

module.exports = deleteFavoritsRecipe;
