const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleMongooseError } = require("../helpers");

const ingredientSchema = Schema(
  {
    ttl: {
      type: String,
      minlength: 3,
    },
    desc: {
      type: String,
    },
    t: {
      type: String,
      default: "",
    },
    thb: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

const joiIngredientSchema = Joi.object({
  ttl: Joi.string(),
  desc: Joi.string(),
  thb: Joi.string().min(6),
});

ingredientSchema.post("save", handleMongooseError);

const Ingredient = model("ingredient", ingredientSchema);

module.exports = {
  Ingredient,
  joiIngredientSchema,
};
