function errorHandler(err, req, res, next) {
  let status;
  let message;
  let name;
  if (err.name == "SequelizeValidationError") {
    name = "Input Validation Error";
    status = 400;
    let errorList = err.errors.map((err) => err.message);
    message = errorList[0];
  } else if (err.name == "BadRequest") {
    name = "Bad Request";
    status = 400;
    message = err.message;
  } else if (err.name == "SequelizeUniqueConstraintError") {
    name = "Input Unique Constraint Error";
    status = 400;
    let errorList = err.errors.map((err) => err.message);
    message = errorList[0];
  } else if (err.name == "RegisteredAsEmployee") {
    name = "Registered as Employee";
    status = 400;
    message = err.message;
  } else if (err.name == "DuplicateWatchlist") {
    name = "Duplicate Error";
    status = 400;
    message = "This item is already in your watchlist.";
  } else if (err.name == "NoEmail") {
    name = "NoEmail";
    status = 400;
    message = "Email is required";
  } else if (err.name == "NoPassword") {
    name = "NoPassword";
    status = 400;
    message = "Password is required";
  } else if (err.name == "InvalidLogin") {
    name = "Invalid Login Error";
    status = 401;
    message = "Invalid email or password";
  } else if (err.name == "JsonWebTokenError") {
    name = "Authentication Error";
    status = 401;
    message = "Invalid token";
  } else if (err.name == "NotUser") {
    name = "Forbidden Error";
    status = 403;
    message = "Only 'Users' can access";
  } else if (err.name == "Forbidden") {
    name = "Forbidden Error";
    status = 403;
    message = "You are not authorized";
  } else if (err.name == "NotFound") {
    name = "Not Found Error";
    status = 404;
    message = err.message;
  } else {
    name = "Internal Server Error";
    status = 500;
    message = err.message;
  }

  res.status(status).json({ name, message });
}

module.exports = errorHandler;
