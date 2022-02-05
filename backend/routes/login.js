const router = require("express").Router();
const { logIn } = require("../controller/login");
router.route("/").post(logIn);

module.exports = router;
