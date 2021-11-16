function errorHandler(err, req, res, next) {
    let status = 500;
    let message = "Internal server error";
    
    if (err.name === 'SequelizeValidationError') {
        status = 400;
        message = err.errors[0].message;
    } else if (err.name === 'SequelizeUniqueConstraintError_Email') {
        status = 400;
        message = "Email must be unique";
    } else if (err.name === 'LOGIN_NOT_FOUND') {
        status = 401;
        message = "Invalid email or password";
    } else if (err.name === 'DATA_NOT_FOUND') {
        status = 404;
        message = "Data not found";
    } else if (err.name === 'INVALID_TOKEN') {
        status = 401;
        message = "Invalid token";
    } else if (err.name === 'JsonWebTokenError') {
        status = 401;
        message = err.message;
    } else if (err.name === 'FORBIDDEN') {
        status = 403;
        message = "Forbidden access";
    } else if (err.message === 'WHERE parameter "email" has invalid "undefined" value') {
        status = 400;
        message = "Email is required";
    }
    
    res.status(status).json({ message: message });
};

module.exports = errorHandler