const asyncWrapper = require("../middleware/async");
const User = require("../models/user-model");
const bcrypt = require("bcrypt");

const logIn = asyncWrapper(async (req, res) => {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
        return res
            .status(400)
            .json({ message: "Invalid username or passoword." });
    }

    const isValidPassword = await bcrypt.compare(
        req.body.password,
        user.password
    );

    if (!isValidPassword) {
        return res
            .status(400)
            .json({ message: "Invalid usename or passoword." });
    }

    const token = user.generateAuthToken();

    res.status(200).json({ token });
});

module.exports = {
    logIn,
};
