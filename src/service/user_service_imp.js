const { UserService } = require('./user_service');
const { User } = require('../entity/User');
const { UserRepository } = require('../repository/user_repository');

class UserServiceImpl extends UserService {
    /**
     * @param {UserRepository} userRepository
     */
    constructor(userRepository) {
        super();
        this.userRepository = userRepository;
    }

    async CreateUser(user) {
        try {
            return this.userRepository.CreateUser(user);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = { UserServiceImpl };