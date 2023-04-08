const { Ingredient} = require("../../models");

const ingredientList = async (req, res) => {
  const result = await Ingredient.find({});
  // const result = await Recipe.find(
  //   { _id: "640cd5ac2d9fecf12e8898aa" },
  //   { ingredients: 1, _id: 0 }
  // );

  // const { recipeId: id } = req.query;
  // const result = await Recipe.find({ _id: id }, { ingredients: 1, _id: 0 });

  res.status(201).json({
    status: "success",
    code: 201,
    data: result,
  });
};

module.exports = ingredientList;
