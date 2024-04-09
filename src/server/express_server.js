const express = require('express');
const expressWinston = require('express-winston');
const winston = require('winston');
const knex = require('knex');
const timeout = require('connect-timeout')
const Controller = require('../controller');
const { Config } = require('../config');
const { Server } = require('./server')

class ExpressServer extends Server {
    /**
     * ExpressServer constructor
     * @param {Config} config - The configuration
     * @param {knex.Knex} db - The database connection
     * @returns {Server}
     */
    constructor (config, db) {
        super();
        this.app = express();
        this.config = config;
        this.db = db;
    }

    Start () {
        this.app.listen(this.config.server.port, () => {
            console.log(`Server is running on port ${this.config.server.port}`);
        });

        this.app.use(expressWinston.logger({
            transports: [
                new winston.transports.Console()
            ],
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.json()
            )
        }));

        this.app.use(timeout(this.config.server.requestTimeout || 5000));
        this.app.use(express.json());

        Controller.Init(this.config, this.app, this.db);
    }
}

module.exports = {
    ExpressServer
};