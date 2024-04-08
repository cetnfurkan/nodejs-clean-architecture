const express = require('express');
const Express = express();
const knex = require('knex');
const { Config } = require('../../config');
const { UserService } = require('../../service/user_service');
const { User } = require('../../entity/User');


class CreateUser {
    /**
     * CreateUser constructor
     * @param {Config} config - The configuration
     * @param {Express} app - The express app
     * @param {knex.Knex} db - The database connection
     * @param {UserService} service - The user service
     */
    constructor (config, app, db, service) {
        this.config = config;
        this.app = app;
        this.db = db;
        this.service = service;
    }

    async create_user(req, res) {
        try {
            const { username, password } = req.body;

            if (!username || !password) {
                return res.status(400).json({ error: 'Missing required fields' });
            }

            const user = new User(null, username, password);

            const createUser = await this.service.CreateUser(res, user)

            return res.status(200).json(createUser);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    }
}

module.exports = { CreateUser };