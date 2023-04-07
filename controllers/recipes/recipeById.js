// const { NotFound } = require("http-errors");
const { Recipe } = require("../../models");
const HttpError = require("../../helpers/HttpError");
const { ObjectId } = require("mongodb");

const recipeById = async (req, res, next) => {
  const { id } = req.params;

  const recipe = await Recipe.aggregate([
    {
      $match: {
        _id: ObjectId(id),
      },
    },
    {
      $lookup: {
        from: "ingredients",
        localField: "ingredients.id",
        foreignField: "_id",
        as: "ingr_nfo",
      },
    },
    {
      $set: {
        ingredients: {
          $map: {
            input: "$ingredients",
            in: {
              $mergeObjects: [
                "$$this",
                {
                  $arrayElemAt: [
                    "$ingr_nfo",
                    {
                      $indexOfArray: ["$ingr_nfo._id", "$$this.id"],
                    },
                  ],
                },
              ],
            },
          },
        },
      },
    },
    {
      $unset: ["ingr_nfo", "ingredients.id"],
    },
  ]);

  if (!recipe) {
    throw HttpError(404, `Not Found ID=${id}`);
  }

  res.json({
    status: "success",
    code: 200,
    data: {
      recipe,
    },
  });
};

module.exports = recipeById;
