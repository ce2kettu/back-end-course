const StatusCodes = require("http-status-codes").StatusCodes;
const ReasonPhrases = require("http-status-codes").ReasonPhrases;

class API {
    static response(res, data, status) {
        data = data || {};
        status = status || StatusCodes.OK;
        res.status(status).json({ statusCode: status, data });
    }

    static error(res, status, message) {
        status = status || StatusCodes.INTERNAL_SERVER_ERROR;
        message = message || ReasonPhrases.INTERNAL_SERVER_ERROR;
        res.status(status).json({ statusCode: status, message });
    }

    static badRequest(res, message) {
        message = message || ReasonPhrases.BAD_REQUEST;
        this.error(res, StatusCodes.BAD_REQUEST, message);
    }
}

module.exports = API;
