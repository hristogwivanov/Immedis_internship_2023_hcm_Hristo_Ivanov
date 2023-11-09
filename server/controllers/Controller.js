const errorHandler = require('../utils/errorHandler');

class Controller {
    constructor(service){
        this.service = service;
    }

    errorResponse = (resBody, error) => {
        console.log(error);
        return resBody.status(error.status || 400).json(errorHandler(error));
    }
}

module.exports = Controller;