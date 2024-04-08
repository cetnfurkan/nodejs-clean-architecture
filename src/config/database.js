'use strict';
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

module.exports = { Database };