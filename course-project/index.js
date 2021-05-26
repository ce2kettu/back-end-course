require("dotenv").config();

const errorHandler = require("./src/middlewares/errorHandler");
const routeNotFound = require("./src/middlewares/routeNotFound");
const express = require("express");
const mongoose = require("mongoose");

const port = process.env.PORT || 5000;
const app = express();

mongoose.connect(process.env.DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

const db = mongoose.connection;
db.on("error", console.log);
db.once("open", () => console.log("Connected to the database."));

// pretty print json
app.set("json spaces", 2);

// parse json payloads
app.use(express.json());

// display 'not found' for any routes not defined
app.use(routeNotFound);

// handle errors in async execution
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}.`));
