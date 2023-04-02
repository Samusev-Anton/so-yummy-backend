// const { Recipe } = require("../../models");
const LIST = [
  "Beef",
  "Dessert",
  "Breakfast",
  "Chicken",
  "Goat",
  "Lamb",
  "Miscellaneous",
  "Pasta",
  "Pork",
  "Seafood",
  "Starter",
  "Side",
  "Vegan",
  "Vegetarian",
];

const listCategories = async (req, res, next) => {
  res.json({
    status: "success",
    code: 200,
    data: LIST,
  });
};

module.exports = listCategories;
