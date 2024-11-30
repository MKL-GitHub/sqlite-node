const express = require("express");
const UserController = require("../controllers/user.controller");
const User = require("../models/user.model");

const userRoutes = express.Router();

userRoutes.get("/", UserController.getAll);

userRoutes.get("/:id", UserController.getById);

userRoutes.post("/", UserController.create);

userRoutes.delete("/:id", UserController.delete);

userRoutes.put("/:id", UserController.update);

module.exports = userRoutes;
