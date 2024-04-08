const Database = require('./database');
const { Config } = require('../config');
const knex = require('knex');

class Postgres extends Database {
    /**
     * @param {Config} config
     */
    constructor (config) {
        super();
        this.config = config;
    }

    /**
     * @description Create a new Postgres database connection
     * @returns {Postgres}
     */
    NewPostgresDatabase() {
        try {
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

            this.pingConnection().then((result) => {
                if (result) {
                    console.log('Postgres database connection successful');
                } else {
                    console.log('Postgres database connection failed');
                }
            });

            return this;
        } catch (error) {
            throw new Error('Failed to create Postgres database connection' + error);
        }
    }

    /**
     * @description Get the Postgres database client
     * @returns {knex.Knex}
     */
    Get() {
        return this.client;
    }

    pingConnection() {
        return new Promise((resolve, reject) => {
            this.client.raw('SELECT 1')
                .then(() => resolve(true))
                .catch(() => resolve(false));
        });
    }
}

module.exports = { Postgres };