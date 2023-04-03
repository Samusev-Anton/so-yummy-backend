const { Recipe } = require("../../models");

const recipesCategory = async (req, res) => {
  const { category } = req.params;
  // const { _id } = req.user;
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;
  // const objSearch = favorite ? { owner: _id, favorite: true } : { owner: _id };
  const result = await Recipe.find(
    { categoty: { $regex: category, $options: "i" } },
    "",
    {
      skip,
      limit: Number(limit),
    }
  );
  // .populate("owner", "_id email");
  // const result = await Recipe.find({ category: category });

  res.status(201).json({
    status: "success",
    code: 201,
    data: result,
  });
};

module.exports = recipesCategory;
