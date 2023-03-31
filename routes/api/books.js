const router = require("express").Router();

const { getAllBooks } = require("../../controllers");

router.get("/", getAllBooks);

module.exports = router;
