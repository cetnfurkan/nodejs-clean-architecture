const { UserService } = require('../../service/user_service');
const { Response } = require('../../http/response');
const { ErrorCode } = require('../../http/errors');
const { HttpError } = require('../../http/http_error');
const { UserModel } = require('../../dto/model/user');

class UserList {
    /**
     * CreateUser constructor
     * @param {UserService} userService - The user service
     * @returns {CreateUser}
     */
    constructor (userService) {
        this.userService = userService;
    }

    /**
     * @description Get user list
     * @param {Request} req - The request
     * @param {Response} res - The response
     * @returns {Promise<Array<UserModel>>}
     */
    async user_list(req, res) {
        try {
            const userList = await this.userService.GetUserList();

            return Response(res, 200, userList)
        } catch (error) {
            if (error instanceof HttpError) {
                return error.send();
            }

            return new HttpError(res).httpErrorInfo(ErrorCode.INTERVAL_SERVER_ERROR).withDetails(error?.message).send();
        }
    }
}

module.exports = { UserList };