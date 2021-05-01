import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("user", userSchema);
