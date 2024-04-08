const knex = require('knex');
const { UserRepository } = require('./user_repository');
const { User } = require('../entity/User');

class UserRepositoryImpl extends UserRepository {
    /**
     * @param {knex.Knex} db
     */
    constructor (db) {
        super();
        this.db = db;
    }

    /**
     * @param {User} user
     * @returns {Promise<User>}
     */
    CreateUser(user) {
        return new Promise((resolve, reject) => {
            this.db.insert(user).withSchema("user").into('users').then((result) => {
                resolve(user);
            }).catch((err) => {
                reject(err);
            });
        });
    }

    /**
     * @returns {Promise<Array<User>>}
     */
    GetUserList() {
        return new Promise((resolve, reject) => {
            this.db.select().from('users').then((users) => {
                resolve(users);
            }).catch((err) => {
                reject(err);
            });
        });
    }
}

module.exports = { UserRepositoryImpl };