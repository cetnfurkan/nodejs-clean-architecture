const { User } = require('../entity/User');

class UserRepository {
    /**
     * @description Create user and return user
     * @param {User} user
     * @returns {Promise<User>}
     */
    CreateUser(user) {}

    /**
     * @description Get user list and return user list
     * @returns {Promise<Array<User>>}
     */
    GetUserList() {}
}

module.exports = { UserRepository };