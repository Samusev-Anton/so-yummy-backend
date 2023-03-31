// const { Recipe } = require("../../models");
const RECIPES = [
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

const listRecipes = async (req, res, next) => {
  
  res.json({
    status: "success",
    code: 200,
    data: RECIPES,
  });
};

module.exports = listRecipes;
