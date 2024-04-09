const express = require('express');
const Express = express();
const knex = require('knex');
const { Config } = require('../../config');
const { UserServiceImpl } = require('../../service/user_service_imp');
const { CreateUser } = require('./create_user');
const { UserList } = require('./user_list');
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
        this.userService = new UserServiceImpl(this.userRepository);
    }

    /**
     * Initialize the controller
     */
    Init() {
        try {
            const router = express.Router();

            router.post('/create', async (req, res) => await new CreateUser(this.userService).create(req, res));
            router.get('/list', async (req, res) => await new UserList(this.userService).user_list(req, res));

            this.app.use('/user', router);
        } catch (error) {
            throw new Error('Failed to initialize the user controller', error);
        }
    }
}

module.exports = {
    UserController
};