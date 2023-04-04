const { User, Recipe } = require("../../models");
const { HttpError } = require("../../helpers");

const deleteFavoritsRecipe = async (req, res, next) => {
  const { _id } = req.params;
  const recipe = req.params.favorite;

  const result = await User.findByIdAndRemove(_id, {
    $pull: {
      favoritsRecipe: recipe,
    },
  });
  //   if (!result) {
  //     throw new HttpError(404, `Not Found ID=${req.params.favorite}`);
  //   }
  res.json({
    status: "success",
    code: 200,
    data: result,
  });
};

module.exports = deleteFavoritsRecipe;
