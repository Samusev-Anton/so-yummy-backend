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
router.get("/search", ctrlWrraper(ctrl.searchList));

// router.get("/:contactId", auth, isValidId, ctrlWrraper(ctrl.getContactById));

// router.post("/", auth, validation(joiSchema), ctrlWrraper(ctrl.addContact));

// router.delete("/:contactId", auth, isValidId, ctrlWrraper(ctrl.removeContact));

// router.patch(
//   "/:contactId",
//   auth,
//   isValidId,
//   // validation(joiSchema),
//   ctrlWrraper(ctrl.updateContact)
// );

// router.patch(
//   "/:contactId/favorite",
//   auth,
//   isValidId,
//   validation(joiStatusSchema),
//   ctrlWrraper(ctrl.updateStatus)
// );

module.exports = router;
