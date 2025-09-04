import express from "express";
import Authentication from "./Authentication.route.js";
import productRoutes from "./product.route.js";

import GetUser from "./User.route.js";
import UpdateUser from "./Update.route.js";

const app = express.Router();

//test routes
app.get("/", (req, res) => {
  try {
    res.json({
      code: 200,
      status: "success",
      message: "Welcome to Frozen Creame API",
    });
    console.log("object");
  } catch (err) {
    console.log(`Error :: ${err.message}`);
  }
});

// routes
app.use("/auth", Authentication);
app.use("/product", productRoutes);
// app.use("/user", GetUser);
// app.use("/update", UpdateUser);

export default app;
