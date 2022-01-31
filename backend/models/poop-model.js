const mongoose = require("mongoose");

const poopSchema = new mongoose.Schema({
    color: {
        type: String,
        maxlength: 50,
        required: true,
    },
    form: {
        type: String,
    },
    vegetable: {
        type: Boolean,
        default: false,
    },
    fruit: {
        type: Boolean,
        default: false,
    },
    description: {
        type: String,
        maxlength: 256,
        default: "A poop",
    },
});

const Poop = mongoose.model("Poop", poopSchema);

module.exports.Poop = Poop;
