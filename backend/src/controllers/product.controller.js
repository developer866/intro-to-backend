import { Product } from "../models/products.js";

const createProduct = async (req, res) => {
  try {
    const {
      productName,
      productDescription,
      productPrice,
      productCategory,
      productAvailability,
    } = req.body;
    // basic validation
    if (
      !productName ||
      !productDescription ||
      !productPrice ||
      !productCategory|| !productAvailability
    ) {
      return res.status(400).json({ message: "All fields are important!" });
    }
    // check if product exist
    const existing = await Product.findOne({ productName: productName.trim() });
    if (existing) {
      return res.status(409).json({ message: "Product Already exist" });
    }
    const product = await Product.create({
      productName: productName.trim(),
      productDescription,
      productPrice,
      productCategory,
      productAvailability,
    });
    res.status(201).json({
      message: "Product Created",
      product: {
        productName: product.productName,
        productCategory: product.productCategory,
      },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
export { createProduct, getProducts };