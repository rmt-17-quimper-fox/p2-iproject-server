const authorizeUser = async (req, res, next) => {
  const role = req.user.role;
  try {
    if (role !== "User") throw { name: "NotUser" };
    next()
  } catch (err) {
    next(err);
  }
};

module.exports = { authorizeUser };
