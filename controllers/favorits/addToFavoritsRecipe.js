const { User } = require("../../models");

const addRecipeToFavorits = async (req, res, next) => {
  const { _id, favoritsRecipe } = req.user;
  const recipe = req.params.favorite;

  const existRecipe = favoritsRecipe.some((item) => item.toString() === recipe);

  if (existRecipe) {
    return res.status(400).json({
      status: "error",
      code: 400,
      message: "Ingridient already exist",
    });
  }

  const newFavorits = await User.findByIdAndUpdate(_id, {
    $push: {
      favoritsRecipe: recipe,
    },
  });

  res.status(201).json({
    status: "success",
    code: 201,
    data: newFavorits,
  });
};

module.exports = addRecipeToFavorits;
