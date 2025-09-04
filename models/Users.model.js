import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    fullname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: Number, default: "" },
    dob: { type: Date, required: true },
    gender: {
      type: String,
      enum: ["male", "female", "transgender", "none"],
      default: "none",
    },
    picture: {
      type: String,
      default:
        "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    },
    location: { type: String, default: "" },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const User = mongoose.model("users", UserSchema);
export default User;
