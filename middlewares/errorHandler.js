async function errorHandler(err, req, res, next) {
  switch (err.name) {
    case "SequelizeUniqueConstraintError":
    case "SequelizeValidationError":
      res.status(400).json({ message: err.errors[0].message });
      break;
    case "Invalid":
      res.status(401).json({ message: "Invalid email/password" });
      break;
    case "JsonWebTokenError":
    case "Unauthorized": {
      res.status(401).json({ message: "Invalid token" });
      break;
    }
    case "NoEmail":
      res.status(400).json({ message: "Email is required" });
      break;
    case "NoPassword":
      res.status(400).json({ message: "Password is required" });
      break;
    case "NotFound": {
      res.status(404).json({ message: "Hero not found" });
      break;
    }
    case "Forbidden": {
      res.status(403).json({ message: "You are not authorized" });
      break;
    }
    default:
      console.log(err);
      res.status(500).json({ message: "Internal server error" });
      break;
  }
}

module.exports = errorHandler;
