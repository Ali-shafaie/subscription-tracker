import express from "express";
import authRoute from "./routes/auth.routes.js";
import subscriptionRoute from "./routes/subscription.routes.js";
import usersRoute from "./routes/user.routes.js";
import { connectToDatabase } from "./database/mongodb.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import cookieParser from "cookie-parser";
import { PORT } from "./config/env.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// Route: api/v1/auth/sign-up,...
app.use("/api/v1/auth", authRoute);

// Route: api/v1/subscription/,...
app.use("/api/v1/subscription", subscriptionRoute);

// Route: api/v1/auth/users,...
app.use("/api/v1/users", usersRoute);

// middleware error
app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.send("server is active"); // ✅ Corrected
});

app.listen(PORT, async () => {
  console.log(`Server is running on port localhost:${PORT}`);
  await connectToDatabase();
});

export default app;
