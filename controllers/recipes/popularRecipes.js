const { Recipe } = require("../../models");

const popularRecipes = async (req, res, next) => {
  const popularRecipesID = await Recipe.aggregate([
    {
      $project: {
        likes_count: { $size: "$likes" },
      },
    },
    { $sort: { likes_count: -1 } },
  ]);

  const popularRecipes = [];
  for (let i = 0; i < popularRecipesID.length; i += 1) {
    const recipe = await Recipe.findById(popularRecipesID[i]);
    popularRecipes.push(recipe);
  }

  res.status(201).json({
    status: "success",
    code: 201,
    data: popularRecipes,
  });
};

module.exports = popularRecipes;
