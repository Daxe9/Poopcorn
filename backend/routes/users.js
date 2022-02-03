const router = require("express").Router();
const {createUser} = require("../controller/users");


router.route("/").post(createUser)


module.exports = router;