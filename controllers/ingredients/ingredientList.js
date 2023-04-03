const { Ingredient } = require("../../models");

const ingredientList = async (req, res) => {

  const result = await Ingredient.find({});

  res.status(201).json({
    status: "success",
    code: 201,
    data: result,
  });
};

module.exports = ingredientList;
