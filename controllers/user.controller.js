const User = require("../models/user.model");

class UserController {
  static getAll(req, res) {
    User.findAll({ raw: true })
      .then((users) => res.json(users))
      .catch((error) => res.json({ message: error }));
  }

  static getById(req, res) {
    User.findByPk(req.params.id)
      .then((user) => res.json(user))
      .catch((error) => res.json({ message: error }));
  }

  static create(req, res) {
    User.create(req.body)
      .then((res) => console.log("User creation res", res))
      .catch((err) => console.error(err));

    res.status(201).json("User was creates successfully!");
  }

  static update(req, res) {
    User.findByPk(req.params.id)
      .then((user) => {
        user.update(req.body);
        res.json({ message: "User was updated successfully!" });
      })
      .catch((error) => res.json({ message: error }));
  }

  static delete(req, res) {
    User.findByPk(req.params.id)
      .then((user) => {
        user.destroy();
        res.json({ message: "User was deleted successfully!" });
      })
      .catch((error) => res.json({ message: error }));
  }
}

module.exports = UserController;
