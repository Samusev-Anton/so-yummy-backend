const { Recipe } = require("../../models");

const searchList = async (req, res) => {
  // console.log(req.params);
  // console.log(req.query);

  const result = await Recipe.find({
    title: { $regex: req.query.title, $options: "i" },
  });

  res.status(201).json({
    status: "success",
    code: 201,
    data: result,
  });
};

module.exports = searchList;
