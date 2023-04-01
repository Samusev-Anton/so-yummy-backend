// const { Recipe } = require("../../models");
const LIST = [
  "Beef",
  "Dessert",
  "Breakfast",
  "Chiken",
  "Goad",
  "Lamp",
  "Miscellaneous",
  "Pasta",
  "Pork",
  "Seafood",
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
