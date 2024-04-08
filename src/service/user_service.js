const { User } = require('../entity/User');

class UserService {

    /**
     * @param {User} user
     * @returns {Promise<User>}
     */
    CreateUser(user) {}

    /**
     * @returns {Promise<Array<User>>}
     */
    GetUserList(res) {}
}

module.exports = { UserService };