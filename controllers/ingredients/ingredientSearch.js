const { MongoClient, ObjectId } = require("mongodb");

const { Ingredient, Recipe } = require("../../models");

const ingredientSearch = async (req, res) => {
  const { ingredient = "" } = req.body;
  const result = await Ingredient.find({
    ttl: { $regex: ingredient, $options: "i" },
  });

  const result2 = await Recipe.find({
    ingredients: {
      $elemMatch: {
        id: ObjectId("640c2dd963a319ea671e367d"),
      },
    },
  });

  res.status(201).json({
    status: "success",
    code: 201,
    data: result2,
  });
};

module.exports = ingredientSearch;

//   const resultId = result.map((item) => item._id);
//   const searchId = JSON.stringify(result[0]._id);

//   const result2 = await Recipe.find({
//     ingredients: { $elemMatch: { id: "640c2dd963a319ea671e372e" } },
//   });
