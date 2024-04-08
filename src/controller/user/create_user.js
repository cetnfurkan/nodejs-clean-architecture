const { User } = require('../../entity/User');
const { UserService } = require('../../service/user_service');
const { Response } = require('../../http/response');
const { ErrorCode } = require('../../http/errors');
const { HttpError } = require('../../http/http_error');

class CreateUser {
    /**
     * CreateUser constructor
     * @param {UserService} userService - The user service
     * @returns {CreateUser}
     */
    constructor (userService) {
        this.userService = userService;
    }

    async create(req, res) {
        try {
            const { username, password } = req.body;

            if (!username || !password) {
                return new HttpError(res).httpErrorInfo(ErrorCode.INVALID_PARAMETERS).send();
            }

            const user = new User(null, username, password);
            const createdUser = await this.userService.CreateUser(user);

            return Response(res, 200, createdUser)
        } catch (error) {
            if (error instanceof HttpError) {
                return error.send();
            }

            return new HttpError(res).httpErrorInfo(ErrorCode.INTERVAL_SERVER_ERROR).withDetails(error?.message).send();
        }
    }
}

module.exports = { CreateUser };