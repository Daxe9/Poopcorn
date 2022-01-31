const express = require("express");
const app = express();
const { getAllPoops } = require("./routes/poops");
const connectDB = require("./db/connect");
const request = require("./middleware/request");
const poops = require("./routes/poops");
require("dotenv").config();
const port = process.env.PORT || 5000;
const db = process.env.DB;

app.use(express.json());
app.use(request);
app.use("/api/poops", poops);

async function start() {
    try {
        await connectDB(db);
        console.log(`Connected to MongoDB ${db}`);
        app.listen(port, () => {
            console.log(`Listening on port ${port}.`);
        });
    } catch (error) {
        console.error(error);
    }
}

start();
