'use strict';

const { UserModel } = require('../model/user');

class UserListResponse {
    constructor(users) {
        this.users = users.map((user) => new UserModel(user.username, user.password));
    }
}

module.exports = { UserListResponse };