const { Config } = require('../config');
const Express = require('express')();
const { UserController } = require('./user');

/**
 * Controller initialization
 * @param {Config} config - The configuration
 * @param {Express} app - The express app
 */
function Init(config, app) {
    const userController = new UserController(config, app).Init();
}

module.exports = {
    Init
}