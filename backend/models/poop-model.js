const mongoose = require("mongoose");
const poopSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: new Date().toLocaleString()
    },
    color: {
        type: String,
        maxlength: 50,
        required: true,
    },
    type: {
        type: Number,
        default: 3,
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
