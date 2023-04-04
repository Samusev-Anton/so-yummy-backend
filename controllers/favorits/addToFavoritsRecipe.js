const { User, Recipe } = require("../../models");
const { HttpError } = require("../../helpers");
const { ObjectId } = require("mongodb");

const addRecipeToFavorits = async (req, res, next) => {
  const { _id } = req.user;
  const recipe = req.params.favorite;

  // const newRecipe = await User.findById(_id, {
  //   favoritsRecipe: {
  //     $elemMatch: {
  //       $in: [ObjectId(recipe)],
  //     },
  //   },
  // });

  const newFavorits = await User.findByIdAndUpdate(_id, {
    $push: {
      favoritsRecipe: recipe,
    },
  });

  if (!newFavorits) {
    throw HttpError(404, `Not Found ID=${recipe}`);
  }

  res.status(201).json({
    status: "success",
    code: 201,
    data: newFavorits,
  });
};

module.exports = addRecipeToFavorits;
