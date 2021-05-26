require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

mongoose.connect(process.env.DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

const db = mongoose.connection;
db.on("error", console.log);
db.once("open", () => console.log("Connected to the database."));

app.use(express.json());

app.listen(port, () => console.log(`Server started on port ${port}.`));
