const { ObjectId } = require("mongodb");

const { Ingredient, Recipe } = require("../../models");

const ingredientSearch = async (req, res) => {
  const { search = "" } = req.query;
  const searchIngredient = await Ingredient.find({
    ttl: { $regex: search, $options: "i" },
  });
  const idIngredient = searchIngredient.map((i) => i._id);

  const result = await Recipe.find({
    ingredients: {
      $elemMatch: {
        id: {
          $in: [ObjectId(idIngredient[0]), ObjectId(idIngredient[1])],
        },
      },
    },
  });

  res.status(201).json({
    status: "success",
    code: 201,
    data: result,
  });
};

module.exports = ingredientSearch;

