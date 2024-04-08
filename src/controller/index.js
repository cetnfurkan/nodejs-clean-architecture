const Express = require('express')();
const knex = require('knex');
const { Config } = require('../config');
const { UserController } = require('./user');

/**
 * Controller initialization
 * @param {Config} config - The configuration
 * @param {Express} app - The express app
 * @param {knex.Knex} db - The database connection
 */
function Init(config, app, db) {
    new UserController(config, app, db).Init();
}

module.exports = {
    Init
}