const { User } = require("../../models");
const { HttpError } = require("../../helpers");

const addRecipeToFavorits = async (req, res, next) => {
  const { _id } = req.user;
  const recipe = req.params.favorite;

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
