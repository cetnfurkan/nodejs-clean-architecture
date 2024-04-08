'use strict';

/**
 * Server configuration
 * @class Server
 * @property {number} port - The port number
 * @property {number} requestTimeout - The request timeout
 * @example
 * const server = new Server(3000, 5000);
 */
class Server {
    constructor (port, requestTimeout) {
        this.port = port;
        this.requestTimeout = requestTimeout;
    }
}

module.exports = {
    Server
};