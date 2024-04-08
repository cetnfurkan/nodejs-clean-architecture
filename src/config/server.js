'use strict';
class Server {
    /**
     * @param {number} port - The port number
     * @param {number} requestTimeout - The request timeout
     */
    constructor (port, requestTimeout) {
        this.port = port;
        this.requestTimeout = requestTimeout;
    }
}

module.exports = {
    Server
};