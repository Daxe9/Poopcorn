const router = require("express").Router();
const { getAllPoops } = require("../controller/poops");

router.route("/").get(getAllPoops);

module.exports = router;
