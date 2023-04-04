const { Recipe } = require("../../models");
// const HttpError = require("../../helpers/HttpError");

const getFavoritsRecipe = async (req, res, next) => {
  const { favoritsRecipe } = req.user;
  console.log(favoritsRecipe);

  const result = await Recipe.find({
    favoritsRecipe: {
      $elemMatch: {
        _id: {
          $in: [favoritsRecipe[0], favoritsRecipe[1]],
        },
      },
    },
  });
  res.json({
    status: "success",
    code: 200,
    data: result,
  });
};

module.exports = getFavoritsRecipe;
