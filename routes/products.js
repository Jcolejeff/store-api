const express = require("express");
const router = express.Router();
const {
	getAllProdcts,
	getAllProdctsStatic,
} = require("../controllers/products");

router.route("/").get(getAllProdcts);
router.route("/static").get(getAllProdctsStatic);
module.exports = router;
