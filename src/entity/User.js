'use strict';
const { v4 } = require('uuid');

class User {
    constructor (id = null, username, password) {
        this.id = id || v4();
        this.username = username;
        this.password = password;
    }
}

module.exports = { User };