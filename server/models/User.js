import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    hospital: { type: mongoose.Schema.Types.ObjectId, ref: "hospital" },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: String,
    type: String,
  },
  { timestamps: true }
);

export default mongoose.model("user", userSchema);
