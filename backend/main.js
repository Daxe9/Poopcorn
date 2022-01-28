const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const db = process.env.DB;
mongoose
    .connect(db, {
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log(`Connected to ${db}.`);
    })
    .catch((e) => {
        console.error("Error ", e);
    });
app.get("/", (req, res) => {
    res.status(200).send("Ciao Mondo");
});
app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});
