const { Recipe } = require("../../models");

const recipesCategory = async (req, res) => {
  const { category } = req.params;

  const { page = 1, limit = 12 } = req.query;
  const skip = (page - 1) * limit;
  const result = await Recipe.find(
    { category: { $regex: category, $options: "i" } },
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

module.exports = recipesCategory;
