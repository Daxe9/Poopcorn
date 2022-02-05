const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const request = require("./middleware/request");
const poops = require("./routes/poops");
const users = require("./routes/users");
const login = require("./routes/login");
require("dotenv").config();
const port = process.env.PORT || 5000;
const db = process.env.DB;

app.use(express.json());
app.use(request);
app.use("/api/poops", poops);
app.use("/api/users", users);
app.use("/api/login", login);

async function start() {
    try {
        // define the key
        if (!process.env.JWTPRIVATETOKEN) {
            console.log("FATAL ERROR, 'jwtPrivateKey' not defined.");
            process.exit(1);
        }
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
