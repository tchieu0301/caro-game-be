import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      required: true,
      type: String,
    },
    password: {
      required: true,
      type: String,
    },
    accessToken: String,
    refreshToken: String,
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);
export default User;
