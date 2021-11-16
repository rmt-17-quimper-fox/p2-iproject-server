const errorHandler = (err, req, res, next) => {
  let code = 500;
  let msg = 'Internal server error';

  if (
    err.name === 'SequelizeValidationError' ||
    err.name === 'SequelizeUniqueConstraintError'
  ) {
    code = 400;
    msg = err.errors[0].message;
  } else if (err.name === 'invalid_user') {
    code = 401;
    msg = 'Invalid email/password';
  }

  res.status(code).json({
    message: msg,
  });
};

module.exports = errorHandler;
