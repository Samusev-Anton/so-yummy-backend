const { Unauthorized } = require("http-errors");
const { Recipe } = require("../../models");
const fetchApi = require("../../helpers/getImages");

const addRecipe = async (req, res, next) => {
  const { _id } = req.user;
  if (!_id) {
    throw new Unauthorized(`Please authorize`);
  }
  const recipe = req.body;
  if (req.file) {
    const { path: url } = req.file;
    recipe.thumb = url;
  }
  const url = await fetchApi(recipe.title, 1);
  recipe.owner = _id;
  recipe.thumb =
    url.hits.length > 0
      ? url.hits[0].webformatURL
      : "https://pixabay.com/photos/muffin-eggs-cake-pastries-easter-7870491/";
  const newRecipe = await Recipe.create(recipe);

  res.status(201).json({
    status: "success",
    code: 201,
    data: newRecipe,
  });
};

module.exports = addRecipe;
