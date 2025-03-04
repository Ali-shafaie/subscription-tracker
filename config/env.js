import { config } from "dotenv";

// Correctly call config with an options object
config({
  path: `.env.${process.env.NODE_ENV || "development"}.local`,
});

// Destructure environment variables safely
export const { PORT, NODE_ENV, DB_URI } = process.env;
