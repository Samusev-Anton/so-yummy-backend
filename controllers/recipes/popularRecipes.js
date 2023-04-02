const { Recipe } = require("../../models");

const popularRecipes = async (req, res, next) => {
  //   const { _id } = req.user;
  //   const { page = 1, limit = 10, favorite = false } = req.query;
  //   const skip = (page - 1) * limit;
  //   const objSearch = favorite ? { owner: _id, favorite: true } : { owner: _id };

  const result = await Recipe.aggregate([
    {
      $project: {
        // title: 1,
        likes_count: { $size: "$likes" },
      },
    },
    { $sort: { likes_count: -1 } },
  ]);

  res.status(201).json({
    status: "success",
    code: 201,
    data: result,
  });
};

module.exports = popularRecipes;