const { Recipe } = require("../../models");
const { HttpError } = require("../../helpers/HttpError");

const popularRecipes = async (req, res, next) => {
  const recipesByPopular = await Recipe.find({ likes: { $exists: true } })
    .sort({ likes: -1 })
    .limit(4);

  if (!recipesByPopular) {
    throw HttpError(404);
  }

  res.status(201).json({
    status: "success",
    // code: 201,
    data: recipesByPopular,
  });
};

module.exports = popularRecipes;
