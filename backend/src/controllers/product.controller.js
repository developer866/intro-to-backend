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
      !productCategory ||
      !productAvailability
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
    res.status(200).json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProduct = await Product.findByIdAndDelete(id);
    if (!deleteProduct) {
      return res.status(404).json({
        message: "Product not found",
      });
    }
    res.status(200).json({
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const updateProduct = await Product.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });
    if(!updateProduct){
      return res.status(404).json({
        message: "Product not found",
      });
    }
    res.status(200).json({
      message: "Product updated successfully",
      data: updateProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};
export { createProduct, getProducts, deleteProduct,updateProduct };
