import mongoose from "mongoose";

// Define the user schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "User name is required"], // Use 'required' instead of 'require'
      trim: true,
      minLength: 2,
      maxLength: 50,
    },
    email: {
      type: String,
      required: [true, "User email is required"], // Use 'required' instead of 'require'
      unique: true,
      trim: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, "Please fill a valid email address"],
    },
    password: {
      type: String,
      required: [true, "User password is required"], // Use 'required' instead of 'require'
      minLength: 6,
    },
  },
  { timestamps: true } // Corrected option for timestamps
);

// Create the User model
const User = mongoose.model("User", userSchema);

export default User;
