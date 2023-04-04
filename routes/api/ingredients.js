const express = require("express");

const {
  ctrlWrraper,
  validation,
  auth,
  isValidId,
} = require("../../middlewares");
// const { Recipe, joiRecipeSchema } = require("../../models/recipe");

const router = express.Router();

const { ingredients: ctrl } = require("../../controllers");
const { shopping: contr } = require("../../controllers");

router.get("/", ctrlWrraper(ctrl.ingredientSearch));
router.get("/list", ctrlWrraper(ctrl.ingredientList));

router.post("/:ingridient", ctrlWrraper(contr.addIngridient));
router.get("/shopping", ctrlWrraper(contr.getShoppingIngridients));
router.delete("/:ingridient", contr.deleteIngridients);

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
