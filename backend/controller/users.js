const User = require("../models/user-model");
const asyncWrapper = require("../middleware/async");
const bcrypt = require("bcrypt");
const _ = require("lodash");
const getAllPoopOfMe = asyncWrapper(async (req, res) => {

});

const createUser = asyncWrapper(async (req, res) => {
    let user = await User.findOne({ username: req.body.username });

    if (user) {
        return res
            .status(400)
            .json({ message: "The username is already taken." });
    }
    user = new User(_.pick(req.body, ["username", "password"]));
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();
    const token = user.generateAuthToken();
    res.header("x-auth-token", token);
    res.status(200).json(_.pick(user, ["_id", "username"]));
});

module.exports = {
    createUser,
    getAllPoopOfMe,
};
