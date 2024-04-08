const { User } = require('../entity/User');
const Express = require('express');

class UserService {

    /**
     * @param {Express.Response} res
     * @param {User} user
     * @returns {Promise<User>}
     */
    CreateUser(res, user) {}

    /**
     * @param {Express.Response} res
     * @returns {Promise<Array<User>>}
     */
    GetUserList(res) {}
}

module.exports = { UserService };