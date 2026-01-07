import { Router } from "express";
import {
  createProduct,
  getProducts,
} from "../controllers/product.controller.js";

const router = Router();
router.post("/createProduct", createProduct);
router.get("/", getProducts);

router.get("/testproduct", (req, res) => {
  res.json({ message: "Product route working" });
});
export default router;