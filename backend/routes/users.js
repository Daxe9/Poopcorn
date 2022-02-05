const router = require("express").Router();
const { getAllPoopOfMe, createUser } = require("../controller/users");
const authentication = require("../middleware/authentication");
router.route("/me").get([authentication, getAllPoopOfMe]);
router.route("/").post(createUser);

module.exports = router;
