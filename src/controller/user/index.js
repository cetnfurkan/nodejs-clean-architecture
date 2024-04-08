const { Config } = require('../../config');
const express = require('express');
const Express = express();

class UserController {
    /**
     * UserController constructor
     * @param {Config} config - The configuration
     * @param {Express} app - The express app
     * @constructor
     * @returns {UserController}
     */
    constructor (config, app) {
        this.config = config;
        this.app = app;
    }

    /**
     * Initialize the controller
     */
    Init () {
        const router = express.Router();

        this.app.use('/user', router);

        router.get('/', (req, res) => {
            res.send('Hello World');
        });
    }
}

module.exports = {
    UserController
};