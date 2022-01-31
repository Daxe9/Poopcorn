const mongoose = require("mongoose");

module.exports = function (url) {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: false,
    });
};
