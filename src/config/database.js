'use strict';

/**
 * Database configuration
 * @class Database
 * @property {string} host - The host name
 * @property {number} port - The port number
 * @property {string} user - The user name
 * @property {string} password - The password
 * @property {string} name - The database name
 * @property {string} extra - The extra configuration
 */
class Database {
    /**
     * @param {string} host - The host name
     * @param {number} port - The port number
     * @param {string} user - The user name
     * @param {string} password - The password
     * @param {string} name - The database name
     * @param {any} extra - The extra configuration
     */
    constructor (host, port, user, password, name, extra) {
        this.host = host;
        this.port = port;
        this.user = user;
        this.password = password;
        this.name = name;
        this.extra = extra;
    }
}

module.exports = {
    Database
};