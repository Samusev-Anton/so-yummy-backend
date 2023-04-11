const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleMongooseError } = require("../helpers");

const recipeSchema = Schema(
  {
    title: {
      type: String,
      // required: [true, "Set name for contact"],
    },
    about: {
      type: String,
      // required: [true, "Set name for contact"],
    },
    time: {
      type: String,
      // required: [true, "Set name for contact"],
    },
    preparation: {
      type: String,
      // required: [true, "Set name for contact"],
    },
    category: {
      type: String,
      // required: [true, " email is required"],
    },
    area: {
      type: String,
      // required: [true, "Password is required"],
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
    owner: {
      type: String,
    },
    preview: {
      type: String,
      //   default: null,
    },
    ingredients: {
      type: Array,
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
