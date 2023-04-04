const express = require("express");

const router = express.Router();
const { favorits: ctrl } = require("../../controllers");
const { auth, ctrlWrraper } = require("../../middlewares");

router.post("/:favorite", auth, ctrlWrraper(ctrl.addRecipeToFavorits));
router.get("/", auth, ctrlWrraper(ctrl.getFavoritsRecipe));

router.delete("/:favorite", auth, ctrlWrraper(ctrl.deleteFavoritsRecipe));

module.exports = router;
