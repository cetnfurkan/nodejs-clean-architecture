const fs = require('fs');
const yaml = require('js-yaml');
const { Server } = require('./server');
const { Database } = require('./database');

/**
 * Configuration
 * @class Config
 * @property {Server} server - The server configuration
 */
class Config {
    constructor () {
        this.server = new Server();
        this.database = new Database();
    }
}

function Read() {
    const config = new Config();

    try {
        const file = fs.readFileSync('config.yml', 'utf8');
        const ymlConfig = yaml.load(file);
        Object.assign(config, ymlConfig);

        return config;
    } catch (e) {
        console.error(e);
    }
}

module.exports = {
    Config,
    Read
};
