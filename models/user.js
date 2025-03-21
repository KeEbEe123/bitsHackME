import mongoose, { Schema, models } from "mongoose";

// Define the main user schema
const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: false }, // Since Google login is used
  role: { type: String, enum: ["user", "vendor"], default: "user" },
  onboard: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

const User = models.User || mongoose.model("User", userSchema);
export default User;
