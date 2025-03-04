import express from "express";
import { PORT } from "./config/env.js";
import authRoute from "./routes/auth.routes.js";
import subscriptionRoute from "./routes/subscription.routes.js";
import usersRoute from "./routes/user.routes.js";
import { connectToDatabase } from "./database/mongodb.js";
const app = express();

// Route: api/v1/auth/sign-up,...
app.use("/api/v1/auth", authRoute);

// Route: api/v1/subscription/,...
app.use("/api/v1/subscription", subscriptionRoute);

// Route: api/v1/auth/users,...
app.use("/api/v1/user", usersRoute);

app.get("/", (req, res) => {
  res.send("server is active"); // ✅ Corrected
});

app.listen(PORT, async () => {
  console.log(`Server is running on port localhost:${PORT}`);
  await connectToDatabase();
});

export default app;
