const { User } = require('../entity/User');

class UserRepository {
    /**
     * @param {User} user
     * @returns {Promise<User>}
     */
    CreateUser(user) {}

    /**
     * @returns {Promise<Array<User>>}
     */
    GetUserList() {}
}

module.exports = { UserRepository };