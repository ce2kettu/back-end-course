const StatusCodes = require("http-status-codes").StatusCodes;
const ReasonPhrases = require("http-status-codes").ReasonPhrases;
const API = require("../api");

function routeNotFound(req, res, next) {
    API.error(res, StatusCodes.NOT_FOUND, ReasonPhrases.NOT_FOUND);
}

module.exports = routeNotFound;
