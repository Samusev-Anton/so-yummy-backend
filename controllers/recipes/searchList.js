const { Recipe } = require("../../models");

const searchList = async (req, res) => {
  const { page = 1, limit = 12 } = req.query;
  const skip = (page - 1) * limit;

  const result = await Recipe.find(
    {
      title: { $regex: req.query.title, $options: "i" },
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

module.exports = searchList;
