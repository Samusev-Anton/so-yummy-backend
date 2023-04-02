const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleMongooseError } = require("../helpers");

const recipeSchema = Schema(
  {
    title: {
      type: String,
      // required: [true, "Set name for contact"],
      minlength: 3,
    },
    category: {
      type: String,
      enum: [
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
      ],

      // required: [true, " email is required"],
      unique: true,
    },
    area: {
      type: String,
      // required: [true, "Password is required"],
      minlength: 6,
    },
    instructions: {
      type: String,
      default: "starter",
    },
    description: {
      type: String,
      default: null,
    },
    thumb: {
      type: String,
      //   required: true,
    },
    preview: {
      type: String,
      //   default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

const joiRecipeSchema = Joi.object({
  title: Joi.string().required(),
  instructions: Joi.string().required(),
  description: Joi.string().required().min(6),
});

recipeSchema.post("save", handleMongooseError);

const Recipe = model("recipe", recipeSchema);

module.exports = {
  Recipe,
  joiRecipeSchema,
};
