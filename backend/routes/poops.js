const router = require("express").Router();
const authentication = require("../middleware/authentication");
const {
    getAllPoops,
    getSinglePoop,
    createPoop,
    updatePoop,
    deletePoop,
} = require("../controller/poops");

router.route("/").get([authentication, getAllPoops]).post([authentication, createPoop]);

router.route("/:id").get([authentication, getSinglePoop]).patch([authentication, updatePoop]).delete([authentication, deletePoop]);

module.exports = router;
