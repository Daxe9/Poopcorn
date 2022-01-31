const router = require("express").Router();
const {
    getAllPoops,
    getSinglePoop,
    createPoop,
    updatePoop,
    deletePoop,
} = require("../controller/poops");

router.route("/").get(getAllPoops).post(createPoop);

router.route("/:id").get(getSinglePoop).patch(updatePoop).delete(deletePoop);

module.exports = router;
