const express = require("express");

const {
  ctrlWrraper,
  // validation,
  auth,
  // isValidId,
} = require("../../middlewares");
// const { Recipe, joiRecipeSchema } = require("../../models/recipe");

const router = express.Router();

const { ingredients: ctrl } = require("../../controllers");
const { shopping: contr } = require("../../controllers");

router.get("/", ctrlWrraper(ctrl.ingredientSearch));
router.get("/list", ctrlWrraper(ctrl.ingredientList));

router.post("/:ingridient", auth, ctrlWrraper(contr.addIngridient));
router.get("/shopping", auth, ctrlWrraper(contr.getShoppingIngridients));
router.delete("/:ingridient", auth, contr.deleteIngridients);

module.exports = router;
