const { Recipe } = require("../../models");
const { HttpError } = require("../../helpers/HttpError");

const popularRecipes = async (req, res, next) => {
  // const popularRecipesID = await Recipe.aggregate([
  //   {
  //     $project: {
  //       likes_count: { $size: "$likes" },
  //     },
  //   },
  //   { $sort: { likes_count: -1 } },
  // ]);

  // const popularRecipes = [];
  // for (let i = 0; i < popularRecipesID.length; i += 1) {
  //   const recipe = await Recipe.findById(popularRecipesID[i]);
  //   popularRecipes.push(recipe);
  // }

  const recipesByPopular = await Recipe.aggregate([
    {
      $project: {
        title: 1,
        description: 1,
        popularity: 1,
        likes_count: {
          $cond: {
            if: { $isArray: "$likes" },
            then: { $size: "$likes" },
            else: "NA",
          },
        },
      },
    },
    { $sort: { likes_count: -1 } },
    { $limit: 4 },
  ]);
  if (!recipesByPopular) {
    throw HttpError(404);
  }

  res.status(201).json({
    status: "success",
    code: 201,
    data: recipesByPopular,
  });
};

module.exports = popularRecipes;
