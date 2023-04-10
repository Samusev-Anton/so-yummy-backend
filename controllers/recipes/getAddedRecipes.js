const { Recipe } = require("../../models");

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

module.exports = getAddedRecipes;
