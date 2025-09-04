import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import appRoute from "./routes/app.js";

import { corsConfig } from "./config/corsConfig.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsConfig));

connectDB();

app.listen(process.env.PORT, () => {
  try {
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
  } catch (err) {
    console.log(`Error :: ${err.message}`);
  }
});

app.use("/api/v1", appRoute);
