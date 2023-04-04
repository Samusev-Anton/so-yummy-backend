const { User, Recipe } = require("../../models");

const addRecipeToFavorits = async (req, res, next) => {
  const { _id } = req.user;
  const recipe = req.params.favorite;

  console.log(_id);
  console.log(recipe);

  const newFavorits = await User.findByIdAndUpdate(_id, {
    $push: {
      favoritsRecipe: recipe,
    },
  });
  //   console.log(User.favoritsRecipe[recipe]);

  //   if (User.favoritsRecipe.includes(recipe)) {
  //     return res.json("you already have this recipe ");
  //   }
  res.status(201).json({
    status: "success",
    code: 201,
    data: newFavorits,
  });
};

module.exports = addRecipeToFavorits;
