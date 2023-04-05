const { Recipe } = require("../../models");

const getFavoritsRecipe = async (req, res, next) => {
  const { favoritsRecipe } = req.user;
  console.log(favoritsRecipe);

  const arr = [];
  for (let i = 0; i < favoritsRecipe.length - 1; i++) {
    const result = await Recipe.findById(favoritsRecipe[i]);
    arr.push(result);
  }

  res.json({
    status: "success",
    code: 200,
    data: arr,
  });
};

module.exports = getFavoritsRecipe;
