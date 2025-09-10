import express from "express";
import {
  createProduct,
  getAllProduct,
  getSingleProduct,
  publishProduct,
  updateAdmin,
  updateProductdetails,
} from "../controllers/admin/product.controller.js";
import upload from "../config/multer.js";
import { verifyAdmin } from "../middlewarers/verifyAdmin.middleware.js";
const router = express.Router();

router.post("/product/upload", upload.single("picture"), createProduct); // create new product        -- works -works
router.post("/product/update/:id", updateProductdetails); // update product details                   -- works -works
router.post("/product/update/imgae", updateProductdetails); // update product image                   --

router.post("/product/publish/:id/", publishProduct); // publish (type from body)                     -- works - works

router.get("/product/:id", getSingleProduct); // get single product                                   -- works - works
router.get("/products", verifyAdmin, getAllProduct); // get all products                              -- works - works

router.post("/me/update", verifyAdmin, updateAdmin); // get all products                              -- works - works

export default router;
