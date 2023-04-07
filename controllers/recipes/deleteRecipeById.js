const { Unauthorized } = require("http-errors");
const { HttpError } = require("../../helpers");
const { Recipe } = require("../../models");

const deleteRecipeById = async (req, res) => {
  const { _id } = req.user;
  if (!_id) {
    throw new Unauthorized(`Please authorize`);
  }
  const { id } = req.params;

  const recipe = await Recipe.findById(id);
  if (!recipe) {
    throw HttpError(404, "Not found");
  }

  if (recipe.owner.toString() !== _id.toString()) {
    throw HttpError(404, "You can not delete this recipe!");
  }
  const deletedRecipe = await Recipe.findByIdAndRemove(id);

  res.status(200).json({
    status: "success",
    code: 200,
    data: deletedRecipe,
  });
};

module.exports = deleteRecipeById;
