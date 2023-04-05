const { User } = require("../../models");
// const { HttpError } = require("../../helpers");
// const { ObjectId } = require("mongodb");

const deleteFavoritsRecipe = async (req, res, next) => {
  const { _id } = req.user;
  const recipe = req.params.favorite;

  // const result = await User.findByIdAndRemove(_id, {
  //   $pull: { recipe },
  // });
  // if (!result) {
  //   throw new HttpError(404, `Not Found ID=${req.params.favorite}`);
  // }

  const result = await User.findByIdAndRemove(_id, {
    $pull: {
      favoritsRecipe: {
        recipe,
      },
    },
  });
  console.log(recipe);
  res.json({
    status: "success",
    code: 200,
    data: result,
  });
};

module.exports = deleteFavoritsRecipe;
