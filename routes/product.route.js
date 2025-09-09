import express from "express";
import { updateUser } from "../middlewarers/Update.middleware.js";
// import {
//   allProducts,
//   allPublishProducts,
//   createProduct,
//   getProduct,
//   publishProduct,
//   updateProduct,
// } from "../controllers/product.controller.js";
import upload from "../config/multer.js";

const router = express.Router();

// router.get("/cake", allProducts);
// router.get("/cake/published", allPublishProducts);
// router.get("/cake/:id", getProduct);
// router.post("/upload/new", upload.single("picture"), createProduct);
// router.post("/update/:id", updateProduct);
// router.put("/update/:id/publish", publishProduct);

export default router;
