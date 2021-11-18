const { checkPassword } = require("../helpers/bcrypt");
const { sign } = require("../helpers/jwt");
const { User, Task } = require("../models");
class Controller {
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email) {
        throw { name: "NoEmail" };
      }
      if (!password) {
        throw { name: "NoPassword" };
      }
      const response = await User.findOne({ where: { email } });
      if (!response || !checkPassword(password, response.password)) {
        throw { name: "Invalid" };
      }
      const payload = sign({ name: response.name, email: response.email });
      res.status(200).json(payload);
    } catch (err) {
      next(err);
    }
  }
  static async register(req, res, next) {
    try {
      let { name, email, password } = req.body;
      let newUser = await User.create({ name: name, email: email, password: password });
      res.status(201).json({ name: newUser.name, email: newUser.email });
    } catch (err) {
      next(err);
    }
  }
  static async getTasks(req, res, next) {
    try {
      const { id, name, email } = req.user;
      let tasks = Task.findAll({ where: { UserId: id }, attributes: { exclude: ["createdAt", "updatedAt"] } });
      res.status(200).json(tasks);
    } catch (err) {
      next(err);
    }
  }
  static async postTask(req, res, next) {
    try {
      const { id } = req.user;
      const { name, location, date, description } = req.body;
      const newTask = { UserId: id, name, location, date, description };
      await Task.create(newTask);
      res.status(201).json({ message: "Task successfully created!" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
