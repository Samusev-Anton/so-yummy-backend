const express = require("express");

const router = express.Router();
const { current: ctrl } = require("../../controllers");
const { ctrlWrraper, auth } = require("../../middlewares");

router.get("/current", auth, ctrlWrraper(ctrl.getCurrent));

module.exports = router;
