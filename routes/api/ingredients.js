const express = require("express");

const { ctrlWrraper, auth } = require("../../middlewares");

const router = express.Router();

const { ingredients: ctrl } = require("../../controllers");
const { shopping: contr } = require("../../controllers");

router.get("/", auth, ctrlWrraper(ctrl.ingredientSearch));
router.get("/list", auth, ctrlWrraper(ctrl.ingredientList));

router.post("/shopping", auth, ctrlWrraper(contr.addIngridient));
router.get("/shopping", auth, ctrlWrraper(contr.getShoppingIngridients));
router.delete("/:ingridient", auth, contr.deleteIngridients);

module.exports = router;
