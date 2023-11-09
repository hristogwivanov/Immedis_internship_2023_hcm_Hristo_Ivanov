//const { isValidObjectId } = require("mongoose");
//const { QUERY_DEFAULTS } = require("../config/constants");
//const CustomError = require("../config/constants");

class Service {
    constructor(model) {
        this.model = model;
    }
}

module.exports = Service;