const { MongoClient, ObjectId } = require("mongodb");

const { Ingredient, Recipe } = require("../../models");

const ingredientList = async (req, res) => {
  const result = await Ingredient.find({});

  //   const resultId = result.map((item) => item._id);
  //   const searchId = JSON.stringify(result[0]._id);

  //   const result2 = await Recipe.find({
  //     ingredients: { $elemMatch: { id: "640c2dd963a319ea671e372e" } },
  //   });
//   const result2 = await Recipe.find({
//     ingredients: {
//       $elemMatch: {
//         id: ObjectId("640c2dd963a319ea671e372e"),
//       },
//     },
//   });

  res.status(201).json({
    status: "success",
    code: 201,
    data: result,
  });
};

module.exports = ingredientList;
