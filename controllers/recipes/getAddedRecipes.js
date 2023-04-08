const { Recipe } = require("../../models");
// const { HttpError } = require("../../helpers");

const getAddedRecipes = async (req, res, next) => {
  const ownerId = req.user.id;
  console.log(ownerId);

  try {
    const recipes = await Recipe.find({ owner: ownerId });
    res.json({
      status: "success",
      code: 200,
      data: recipes,
    });
  } catch (error) {
    next(error);
  }
};

// const { Recipe } = require("../../models");

// const getAddedRecipes = async (req, res, next) => {
//   const { favoritsRecipe } = req.user;
//   console.log(favoritsRecipe);

//   const arr = [];
//   for (let i = 0; i < favoritsRecipe.length - 1; i++) {
//     const result = await Recipe.findById(favoritsRecipe[i]);
//     arr.push(result);
//   }

//   res.json({
//     status: "success",
//     code: 200,
//     data: arr,
//   });
// };

module.exports = getAddedRecipes;
