import { Router } from "express";

const authRoute = Router();

// Sign Up Route
authRoute.post("/sign-up", (req, res) => {
  res.send({ message: "Sign up successful" });
});

// Sign In Route
authRoute.post("/sign-in", (req, res) => {
  res.send({ message: "Sign in successful" });
});

// Sign Out Route
authRoute.post("/sign-out", (req, res) => {
  res.send({ message: "Sign out successful" });
});

export default authRoute;
