import { Router } from "express";

const usersRoute = Router();

// GET all users
usersRoute.get("/", (req, res) => {
  res.send({ message: "GET all users" });
});

// GET single user by ID
usersRoute.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send({ message: `GET user with ID: ${id}` });
});

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
