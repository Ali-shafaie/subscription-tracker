import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";
import authorize from "../middlewares/auth.middleware.js";

const usersRoute = Router();

// GET all users
usersRoute.get("/", getUsers);

// GET single user by ID
usersRoute.get("/:id", authorize, getUser);

// CREATE a new user
usersRoute.post("/", (req, res) => {
  const userData = req.body;
  res.send({ message: "User created successfully", data: userData });
});

// UPDATE a user by ID
usersRoute.put("/:id", (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  res.send({
    message: `User with ID ${id} updated successfully`,
    data: updatedData,
  });
});

// DELETE a user by ID
usersRoute.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.send({ message: `User with ID ${id} deleted successfully` });
});

export default usersRoute;
