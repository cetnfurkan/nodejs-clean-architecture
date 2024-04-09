'use strict';

class CreateUserRequest {
    constructor({ username, password }) {
        this.username = username;
        this.password = password;
    }
}

module.exports = { CreateUserRequest };