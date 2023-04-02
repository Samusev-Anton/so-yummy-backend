const { Recipe } = require("../../models");

const searchList = async (req, res) => {
  const { category } = req.body;
  console.log(category);
  //   console.log(req.body);

  const result = await Recipe.find({ category });

  res.status(201).json({
    status: "success",
    code: 201,
    data: result,
  });
};

module.exports = searchList;
