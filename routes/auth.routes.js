import { Router } from "express";
import { signIn, signUp } from "../controllers/auth.controller.js";

const authRoute = Router();

// Sign Up Route
authRoute.post("/sign-up", signUp);

// Sign In Route
authRoute.post("/sign-in", signIn);

// Sign Out Route
authRoute.post("/sign-out", (req, res) => {
  res.send({ message: "Sign out successful" });
});

export default authRoute;
