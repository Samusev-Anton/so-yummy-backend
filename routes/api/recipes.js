const express = require("express");

const {
  ctrlWrraper,
  validation,
  auth,
  isValidId,
} = require("../../middlewares");
// const { Recipe, joiRecipeSchema } = require("../../models/recipe");

const router = express.Router();

const { recipes: ctrl } = require("../../controllers");

router.get("/categories", ctrlWrraper(ctrl.listCategories));
router.get("/main", ctrlWrraper(ctrl.recipesMainPage));
router.get("/:category", ctrlWrraper(ctrl.recipesCategory));
router.get("/description/:id", ctrlWrraper(ctrl.recipeById));
router.get("/search/title", ctrlWrraper(ctrl.searchList));

module.exports = router;
