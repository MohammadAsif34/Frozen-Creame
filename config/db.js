import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("mongoDB connected"))
    .catch((err) => console.log(`Error DB connection :: ${err.message}`));
};
