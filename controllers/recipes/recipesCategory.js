const { Recipe } = require("../../models");

const recipesCategory = async (req, res) => {
  const { category } = req.params;
  console.log(category);
  // const result = await Recipe.aggregate([
  //   { $group: { _id: "$category", items: { $push: "$$ROOT" } } },
  //   { $project: { firstFour: { $slice: ["$items", 8] } } },
  //   { $limit: 13 }, // Optional limit to the number of categories to return
  // ]);

  const result = await Recipe.find({ category: category });

  res.status(201).json({
    status: "success",
    code: 201,
    data: result,
  });
};

module.exports = recipesCategory;

//   const { _id } = req.user;
//   const { page = 1, limit = 10, favorite = false } = req.query;
//   const skip = (page - 1) * limit;
//   const objSearch = favorite ? { owner: _id, favorite: true } : { owner: _id };
