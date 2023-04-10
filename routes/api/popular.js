const express = require("express");

const { ctrlWrraper, auth } = require("../../middlewares");

const router = express.Router();

const { recipes: ctrl } = require("../../controllers");

router.get("/", auth, ctrlWrraper(ctrl.popularRecipes));

module.exports = router;
