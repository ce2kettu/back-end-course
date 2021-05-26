const StatusCodes = require("http-status-codes").StatusCodes;
const ReasonPhrases = require("http-status-codes").ReasonPhrases;
const API = require("../api");

function errorHandler(err, req, res, next) {
    console.log("An error occurred: " + err);
    API.error(res, null, "Something went wrong.");
}

module.exports = errorHandler;
