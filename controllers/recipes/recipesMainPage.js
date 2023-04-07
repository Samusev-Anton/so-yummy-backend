const { Recipe } = require("../../models");

const recipesMainPage = async (req, res, next) => {
  //   const { _id } = req.user;
  //   const { page = 1, limit = 10, favorite = false } = req.query;
  //   const skip = (page - 1) * limit;
  //   const objSearch = favorite ? { owner: _id, favorite: true } : { owner: _id };

  const result = await Recipe.aggregate([
    // { $sort: { likes_count: -1 } },
    // {
    //   $match: {
    //     favorite_count: {
    //             $cond: {
    //         if: { $isArray: "$likes" },
    //         then: { $size: "$likes" },
    //         else: "NA",
    //       },
    // }}}

    {
      $set: {
        favorite_count: {
          $cond: {
            if: { $isArray: "$favorites" },
            then: { $size: "$favorites" },
            else: "NA",
          },
        },
      },
    },

    { $sort: { favorite_count: -1 } },

    { $group: { _id: "$category", items: { $push: "$$ROOT" } } },
    { $project: { firstFour: { $slice: ["$items", 4] } } },
    { $limit: 4 }, // Optional limit to the number of categories to return
  ]);

  res.status(201).json({
    status: "success",
    code: 201,
    data: result,
  });
};

module.exports = recipesMainPage;
