const { Ingredient } = require("../../models");

const searchList = async (req, res) => {
  console.log(res.query);
  const result = await Ingredient.find(
    {
      ttl: { $regex: req.query.ingredient, $options: "i" },
    },
    { new: true }
  );

  res.status(201).json({
    status: "success",
    code: 201,
    data: result,
  });
};

module.exports = searchList;
