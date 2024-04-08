const Express = require('express');
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

    CreateUser(res, user) {
        return this.userRepository.CreateUser(user);
    }
}

module.exports = { UserServiceImpl };