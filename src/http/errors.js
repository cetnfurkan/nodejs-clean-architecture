// errors.js
const HttpErrorCode = {
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500
};

class CustomError extends Error {
    constructor(code, message, statusCode = HttpErrorCode.INTERNAL_SERVER_ERROR) {
        super(message);
        this.name = this.constructor.name;
        this.code = code;
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
}

const ErrorCode = {
    DATABASE_ERROR: new CustomError("DATABASE_ERROR", "Database error occurred", HttpErrorCode.INTERNAL_SERVER_ERROR),
    INTERVAL_SERVER_ERROR: new CustomError("INTERNAL_SERVER_ERROR", "Internal server error occurred", HttpErrorCode.INTERNAL_SERVER_ERROR),
    GENERIC_ERROR: new CustomError("GENERIC_ERROR", "Generic error occurred", HttpErrorCode.INTERNAL_SERVER_ERROR),
    GRPC_ERROR: new CustomError("GRPC_ERROR", "gRPC error occurred", HttpErrorCode.INTERNAL_SERVER_ERROR),
    INVALID_EMAIL: new CustomError("INVALID_EMAIL", "Invalid email provided", HttpErrorCode.BAD_REQUEST),
    INVALID_PARAMETERS: new CustomError("INVALID_PARAMETERS", "Invalid parameters provided", HttpErrorCode.BAD_REQUEST),
};

module.exports = {
    ErrorCode,
    HttpErrorCode,
    CustomError
};