const jwt = require("jsonwebtoken");
const { User, Movie } = require("../models");

let adminOnly = async (req, res, next) => {
  try {
    let select = await Movie.findByPk(req.params.id);

    if (req.user.role !== "Admin") {
      if (req.user.id !== select.AuthorId) {
        throw { name: "forbidden", message: "No Access" };
      }
    }

    next();
  } catch (err) {
    if (err.name === "forbidden") {
      next(err);
    }
  }
};

let userAut = async (req, res, next) => {
  try {
    let { access_token } = req.headers;

    if (!access_token) {
      throw { name: "unauthorized", message: "You are unauthorized" };
    }
    const payload = jwt.verify(access_token, "fao");
    const response = await User.findByPk(payload.id);

    if (!response) {
      throw { name: "unauthorized", message: "You are unauthorized" };
    }
    req.user = {
      id: response.id,
      email: response.email,
      role: response.role,
    };

    next();
  } catch (err) {
    if (err.name === "unauthorized") {
      next(err);
    }
  }
};

let errorHandler = (err, req, res, next) => {
  let status;
  let message;

  switch (err.name) {
    case "SequelizeValidationError":
      status = 400;
      message = err.errors[0].message;
      break;
    case "SequelizeValidationError":
      status = 400;
      message = err.errors[0].message;
      break;
    case "notFound":
      status = 404;
      message = err.message;
      break;
    case "unauthorized":
      status = 401;
      message = err.message;
      break;
    case "forbidden":
      status = 403;
      message = err.message;
      break;
    case "badRequest":
      status = 400;
      message = err.message;
      break;
    case "InternalServerError":
      status = 500;
      message = err.message;
      break;
  }
  res.status(status).json({ message });
};

module.exports = {
  adminOnly,
  userAut,
  errorHandler,
};
