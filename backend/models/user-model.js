const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true
    },
})

userSchema.methods.generateAuthToken = function () {
    return jwt.sign({
        _id: this.id,
        username: this.username
    },
        process.env.JWTPRIVATETOKEN);

}

const User = mongoose.model("User", userSchema);

module.exports = User;