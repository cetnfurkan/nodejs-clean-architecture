const express = require('express');
const app = express();
const Controller = require('../controller');
const { Config } = require('../config');
const { Server } = require('./server')

// /**
//  * Controller initialization
//  * @param {Config} config - The configuration
//  */
// function Init(config) {
//     app.listen(config.server.port, () => {
//         console.log(`Server is running on port ${config.server.port}`);
//     });

//     Controller.Init(config, app);
// }

class ExpressServer extends Server {
    /**
     * ExpressServer constructor
     * @param {Config} config - The configuration
     * @constructor
     * @returns {Server}
     */
    constructor (config) {
        super();
        this.app = app;
        this.config = config;
    }

    Start () {
        this.app.listen(this.config.server.port, () => {
            console.log(`Server is running on port ${this.config.server.port}`);
        });

        this.app.use(express.json());

        Controller.Init(this.config, app);
    }
}

module.exports = {
    ExpressServer
};