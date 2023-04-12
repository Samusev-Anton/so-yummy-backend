const LIST = [
  "beef",
  "dessert",
  "breakfast",
  "chicken",
  "goat",
  "lamb",
  "miscellaneous",
  "pasta",
  "pork",
  "seafood",
  "starter",
  "side",
  "vegan",
  "vegetarian",
];

const listCategories = async (req, res, next) => {
  res.json({
    status: "success",
    // code: 200,
    data: LIST,
  });
};

module.exports = listCategories;
