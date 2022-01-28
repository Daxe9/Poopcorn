const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.status(200).send("Ciao Mondo");
});
app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});
