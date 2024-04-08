const fs = require('fs');
const yaml = require('js-yaml');
const { Server } = require('./server');
const { Database } = require('./database');

/**
 * Configuration
 * @Description Configuration object for the application
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
        if (!fs.existsSync('config.yml')) {
            throw new Error('The configuration file is missing');
        }

        const file = fs.readFileSync('config.yml', 'utf8');
        const ymlConfig = yaml.load(file);
        Object.assign(config, ymlConfig);

        return config;
    } catch (e) {
        throw new Error('Failed to read the configuration file' + e)
    }
}

module.exports = {
    Config,
    Read
};
