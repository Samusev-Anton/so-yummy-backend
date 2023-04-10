const express = require("express");

const { ctrlWrraper, auth } = require("../../middlewares");
// const { Recipe, joiRecipeSchema } = require("../../models/recipe");

const router = express.Router();

const { recipes: ctrl } = require("../../controllers");
const uploadCloud = require("../../middlewares/uploadCloud");

router.get("/categories", auth, ctrlWrraper(ctrl.listCategories));
router.get("/main", auth, ctrlWrraper(ctrl.recipesMainPage));
router.get("/:category", auth, ctrlWrraper(ctrl.recipesCategory));
router.get("/description/:id", auth, ctrlWrraper(ctrl.recipeById));
router.get("/search/title", auth, ctrlWrraper(ctrl.searchList));
router.post("/", auth, uploadCloud.single("img"), ctrlWrraper(ctrl.addRecipe));
router.delete("/:id", auth, ctrlWrraper(ctrl.deleteRecipeById));
router.get("/", auth, ctrlWrraper(ctrl.getAddedRecipes));

module.exports = router;
