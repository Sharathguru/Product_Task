import express from "express";
import {
  createProduct,
  getProductById,
  getProducts,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controllers.js";

const router = express.Router();

// Create a new product
router.post("/", createProduct);

// Get all products
router.get("/", getProducts);

// Get a product by ID
router.get("/:id", getProductById);

// Update a product by ID
router.put("/:id", updateProduct);

// Delete a product by ID
router.delete("/:id", deleteProduct);

export default router;