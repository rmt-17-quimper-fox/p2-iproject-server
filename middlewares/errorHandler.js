const errorHandler = ({ name, errors }, req, res, next) => {
    let status = null;
    let message = null;
    switch (name) {
        case 'SequelizeValidationError':
            status = 400;
            message = errors[0].message;
            break;
        case 'SequelizeUniqueConstraintError':
            status = 400;
            message = 'Email must be unique';
            break;
        case 'INVALID_PARAM_ERROR':
            status = 400;
            message = errors;
            break;
        case 'Invalid email/password':
            status  = 400;
            message = name;
            break;
        case 'MulterError':
            status = 400;
            message = errors;
            break;
        case 'JsonWebTokenError':
            status = 401;
            message = 'Invalid access token';
            break;
        case 'Unauthorized':
            status = 401;
            message = 'You must login first';
            break;
        case 'Data not found':
            status = 404;
            message = name;
            break;
        case 'Forbidden':
            status = 403;
            message = 'Forbidden access';
            break;
        default:
            status = 500;
            message = 'Internal server error';
            break;
    }
    res.status(status).json({ message });
}

module.exports = errorHandler;