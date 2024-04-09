const knex = require('knex');
const { UserRepository } = require('./user_repository');

class UserRepositoryImpl extends UserRepository {
    /**
     * @param {knex.Knex} db
     */
    constructor (db) {
        super();
        this.db = db;
    }

    CreateUser(user) {
        return new Promise((resolve, reject) => {
            this.db.insert(user).withSchema("user").into('users').then((result) => {
                resolve(user);
            }).catch((err) => {
                reject(err);
            });
        });
    }

    GetUserList() {
        return new Promise((resolve, reject) => {
            this.db.select().withSchema("user").from('users').then((users) => {
                resolve(users);
            }).catch((err) => {
                reject(err);
            });
        });
    }
}

module.exports = { UserRepositoryImpl };