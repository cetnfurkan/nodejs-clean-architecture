const { UserService } = require('./user_service');
const { UserRepository } = require('../repository/user_repository');
const { User } = require('../entity/User');
const { UserModel } = require('../dto/model/user');

class UserServiceImpl extends UserService {
    /**
     * @param {UserRepository} userRepository
     */
    constructor (userRepository) {
        super();
        this.userRepository = userRepository;
    }

    async CreateUser(reqDto) {
        try {
            const user = new User(null, reqDto.username, reqDto.password);

            const createUser = await this.userRepository.CreateUser(user);

            return new UserModel(createUser.username, createUser.password);

        } catch (error) {
            throw error;
        }
    }

    async GetUserList() {
        try {
            const users = await this.userRepository.GetUserList();

            const userModelList = users.map((user) => new UserModel(user.username, user.password));

            return userModelList;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = { UserServiceImpl };