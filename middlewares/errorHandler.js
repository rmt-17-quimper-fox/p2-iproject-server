function errorHandler(error, req, res, next) {
    let message = "Internal Server Error"
    let status = 500
    switch (error.name) {
        case "SequelizeUniqueConstraintError":
        case "SequelizeValidationError":
            message = error.errors[0].message
            status = 400    
            break;
    
        default:
            break;
    }
    res.status(status).json({ message })
}

module.exports = {
    errorHandler
}