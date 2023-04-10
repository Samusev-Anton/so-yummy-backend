const express = require("express");

const { ctrlWrraper, auth } = require("../../middlewares");
// const { Recipe, joiRecipeSchema } = require("../../models/recipe");

const router = express.Router();

const { recipes: ctrl } = require("../../controllers");
const uploadCloud = require("../../middlewares/uploadCloud");

router.get("/categories", ctrlWrraper(ctrl.listCategories));
router.get("/main", ctrlWrraper(ctrl.recipesMainPage));
router.get("/:category", ctrlWrraper(ctrl.recipesCategory));
router.get("/description/:id", ctrlWrraper(ctrl.recipeById));
router.get("/search/title", ctrlWrraper(ctrl.searchList));
router.post("/", auth, uploadCloud.single("img"), ctrlWrraper(ctrl.addRecipe));
router.delete("/:id", ctrlWrraper(ctrl.deleteRecipeById));
router.get("/", auth, ctrlWrraper(ctrl.getAddedRecipes));

module.exports = router;
