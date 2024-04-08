class HttpError {
    constructor(res) {
        this.res = res;
        this.errorInfo = {};
    }

    httpErrorInfo(errorCode) {
        this.errorInfo.code = errorCode.code;
        this.errorInfo.message = errorCode.message;
        this.errorInfo.responseCode = errorCode.statusCode;
        return this;
    }

    withDetails(details) {
        this.errorInfo.details = details;
        return this;
    }

    send() {
        const response = {
            code: this.errorInfo.code,
            message: this.errorInfo.message
        };
        if (this.errorInfo?.details) {
            response.details = this.errorInfo.details;
        }
        return this.res.status(this.errorInfo.responseCode).json(response);
    }
}

module.exports = {
    HttpError
};
