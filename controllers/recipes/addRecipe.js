const { Unauthorized } = require("http-errors");
const { Recipe } = require("../../models");
const fetchApi = require("../../helpers/getImages");

const addRecipe = async (req, res, next) => {
  const { _id } = req.user;
  if (!_id) {
    throw new Unauthorized("Please authorize");
  }
  const recipe = req.body;
  console.log(recipe.data);
  const obj = recipe.data;
  if (req.file) {
    const { path: url } = req.file;
    obj.thumb = url;
    obj.owner = _id;
    const newRecipe = await Recipe.create(obj);

    res.status(201).json({
      status: "success",
      code: 201,
      data: newRecipe,
    });
  } else {
    const url = await fetchApi(recipe.title, 1);
    obj.owner = _id;
    obj.thumb =
      url.hits.length > 0
        ? url.hits[0].webformatURL
        : "https://pixabay.com/photos/muffin-eggs-cake-pastries-easter-7870491/";
    const newRecipe = await Recipe.create(obj);

    res.status(201).json({
      status: "success",
      // code: 201,
      data: newRecipe,
    });
  }
};

module.exports = addRecipe;

// const { Unauthorized } = require("http-errors");
// const { Recipe } = require("../../models");
// const fetchApi = require("../../helpers/getImages");

// const addRecipe = async (req, res, next) => {
//   const { _id } = req.user;
//   if (!_id) {
//     throw new Unauthorized(`Please authorize`);
//   }
//   const recipe = req.body;
//   if (req.file) {
//     const { path: url } = req.file;
//     recipe.thumb = url;
//   } else {
//     fetchApi(recipe.title, 1).then(
//       (data) => (recipe.thumb = data.hits[0].pageURL)
//     );
//   }
//   recipe.owner = _id;
//   const newRecipe = await Recipe.create(recipe);

//   res.status(201).json({
//     status: "success",
//     code: 201,
//     data: newRecipe,
//   });
// };

// module.exports = addRecipe;
