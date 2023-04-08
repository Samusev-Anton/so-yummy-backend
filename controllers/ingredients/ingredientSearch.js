const { ObjectId } = require("mongodb");

const { Ingredient, Recipe } = require("../../models");

const ingredientSearch = async (req, res) => {
  const { ingredients = "" } = req.query;

  const { page = 1, limit = 12 } = req.query;
  const skip = (page - 1) * limit;

  const searchIngredient = await Ingredient.find({
    ttl: { $regex: ingredients, $options: "i" },
  });
  const idIngredient = searchIngredient.map((i) => i._id);
  console.log(idIngredient);

  const result = await Recipe.find(
    {
      ingredients: {
        $elemMatch: {
          id: {
            $in: [ObjectId(idIngredient[0]), ObjectId(idIngredient[1])],
          },
        },
      },
    },
    "",
    {
      skip,
      limit: Number(limit),
    }
  );

  res.status(201).json({
    status: "success",
    code: 201,
    data: result,
  });
};

module.exports = ingredientSearch;
