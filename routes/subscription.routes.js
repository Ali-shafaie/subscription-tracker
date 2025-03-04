import { Router } from "express";

const subscriptionRoute = Router();

// GET all subiscription
subscriptionRoute.get("/", (req, res) => {
  res.send({ message: "GET all Subscription" });
});
//GET subscription details
subscriptionRoute.get("/:id", (req, res) => {
  res.send({ message: "GET single Subscription" });
});
// DELETE
subscriptionRoute.delete("/:id", (req, res) => {
  res.send({ message: "delete a Subscription" });
});
// CREATE
subscriptionRoute.post("/", (req, res) => {
  res.send({ message: "CREATE all Subscription" });
});
// UPDATE
subscriptionRoute.put("/:id", (req, res) => {
  res.send({ message: "Update a Subscription" });
});

// GET all users subscription
subscriptionRoute.get("/users/:id", (req, res) => {
  res.send({ message: "GET all user Subscription" });
});

// update cancle subscription
subscriptionRoute.put("/:id/cancel", (req, res) => {
  res.send({ message: "Cancel a Subscription" });
});
// GET
subscriptionRoute.get("/upcoming-renewals", (req, res) => {
  res.send({ message: "GET upcoming renewals" });
});
export default subscriptionRoute;
