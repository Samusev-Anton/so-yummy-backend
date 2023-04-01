// const { NotFound } = require("http-errors");
const { Recipe } = require("../../models");
const HttpError = require("../../helpers/HttpError");

const recipeById = async (req, res, next) => {
  const { id } = req.params;
  const result = await Recipe.findById(id);
  if (!result) {
    throw HttpError(404, `Not Found ID=${id}`);
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = recipeById;
