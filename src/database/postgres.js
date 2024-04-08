const Database = require('./database');
const { Config } = require('../config');
const knex = require('knex');

class Postgres extends Database {
    /**
     * @param {Config} config
     * @returns {knex.Knex}
     */
    constructor (config) {
        super();
        this.config = config;
        console.log(config.database);
    }

    /**
     * @description Create a new Postgres database connection
     * @returns {Postgres}
     */
    NewPostgresDatabase() {
        this.client = knex({
            client: 'pg',
            connection: {
                host: this.config.database.host,
                port: this.config.database.port,
                user: this.config.database.user,
                password: this.config.database.password.toString(),
                database: this.config.database.name
            }
        });

        return this;
    }

    /**
     * @memberof Postgres
     * @description Get the Postgres database connection
     * @returns {knex.Knex}
     */
    Get() {
        return this.client;
    }
}

module.exports = { Postgres };