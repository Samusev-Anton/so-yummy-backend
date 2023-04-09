const { Recipe } = require("../../models");

const getFavoritsRecipe = async (req, res, next) => {
  const { favoritsRecipe } = req.user;
  const { page = 1, limit = 12 } = req.query;
  const skip = (page - 1) * limit;

  const arr = [];
  for (let i = 0; i < favoritsRecipe.length - 1; i++) {
    const result = await Recipe.findById(favoritsRecipe[i], "", {
      skip,
      limit: Number(limit),
    });
    arr.push(result);
  }

  res.json({
    status: "success",
    code: 200,
    data: arr,
  });
};

module.exports = getFavoritsRecipe;
