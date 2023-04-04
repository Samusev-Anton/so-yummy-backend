const { Unauthorized } = require("http-errors");
const { User, Recipe } = require("../../models");

const addRecipe = async (req, res, next) => {
  const { _id } = req.user;
  if (!_id) {
    throw new Unauthorized(`Please authorize`);
  }
  const { path: url } = req.file;
  const recipe = req.body;
  recipe.thumb = req.file ? url : "";
  recipe.owner = _id;

  const newRecipe = await Recipe.create(recipe);

  res.status(201).json({
    status: "success",
    code: 201,
    data: newRecipe,
  });
};

module.exports = addRecipe;
