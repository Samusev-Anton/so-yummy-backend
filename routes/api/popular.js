const express = require("express");

const {
  ctrlWrraper,
  validation,
  auth,
  isValidId,
} = require("../../middlewares");

const router = express.Router();

const { recipes: ctrl } = require("../../controllers");

router.get("/", ctrlWrraper(ctrl.popularRecipes));


module.exports = router;
