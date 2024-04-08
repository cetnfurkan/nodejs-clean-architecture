const express = require('express');
const Express = express();
const knex = require('knex');
const { Config } = require('../../config');
const { UserService } = require('../../service/user_service');
const { UserServiceImpl } = require('../../service/user_service_imp');
const { CreateUser } = require('./create_user');
const { UserRepositoryImpl } = require('../../repository/user_repository_impl');

class UserController {
    /**
     * UserController constructor
     * @param {Config} config - The configuration
     * @param {Express} app - The express app
     * @param {knex.Knex} db - The database connection
     */
    constructor (config, app, db) {
        this.config = config;
        this.app = app;
        this.db = db;

        this.userRepository = new UserRepositoryImpl(db);
        /**
         * @type {UserService}
         */
        this.service = new UserServiceImpl(this.userRepository);
    }

    /**
     * Initialize the controller
     */
    Init() {
        const router = express.Router();

        this.app.use('/user', router);

        const that = this;

        router.post('/create', new CreateUser(that.config, this.app, this.db, this.service).create_user.bind(this));
    }
}

module.exports = {
    UserController
};