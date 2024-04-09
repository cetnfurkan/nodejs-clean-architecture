
const { UserModel } = require('../dto/model/user');
const { CreateUserRequest } = require('../dto/request/user');

class UserService {

    /**
     * @description Create user and return user model
     * @param {CreateUserRequest} reqDto
     * @returns {Promise<UserModel>}
     */
    CreateUser(reqDto) {}

    /**
     * @description Get user list and return user model list
     * @returns {Promise<Array<UserModel>>}
     */
    GetUserList(res) {}
}

module.exports = { UserService };