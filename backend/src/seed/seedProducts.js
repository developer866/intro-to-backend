import mongoose from "mongoose";
import dotenv from "dotenv";
import { Product } from "../models/products.js";
import connectDB from "../config/database.js";

dotenv.config();

const products = [
  {
    productName: "Matte Liquid Lipstick",
    productDescription: "Long-lasting matte lipstick with intense color payoff",
    productPrice: 4500,
    productCategory: "Makeup",
    productAvailability: true,
  },
  {
    productName: "Foundation – Natural Finish",
    productDescription: "Lightweight foundation for a smooth and natural look",
    productPrice: 12000,
    productCategory: "Face",
    productAvailability: true,
  },
  {
    productName: "Eyeshadow Palette",
    productDescription: "12-shade eyeshadow palette with matte and shimmer tones",
    productPrice: 18000,
    productCategory: "Eyes",
    productAvailability: true,
  },
  {
    productName: "Waterproof Mascara",
    productDescription: "Smudge-proof mascara for longer and fuller lashes",
    productPrice: 6500,
    productCategory: "Eyes",
    productAvailability: true,
  },
  {
    productName: "Blush Palette",
    productDescription: "Soft blush palette for a radiant glow",
    productPrice: 9000,
    productCategory: "Face",
    productAvailability: true,
  },
  {
    productName: "Makeup Brush Set",
    productDescription: "10-piece professional makeup brush set",
    productPrice: 15000,
    productCategory: "Accessories",
    productAvailability: true,
  },
  {
    productName: "Setting Spray",
    productDescription: "Long-wear setting spray to lock makeup all day",
    productPrice: 7000,
    productCategory: "Makeup",
    productAvailability: false,
  },
];


const seedProducts = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);

    await Product.deleteMany(); // optional: clears old data
    await Product.insertMany(products);

    console.log("✅ Products seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error("❌ Product seeding failed:", error.message);
    process.exit(1);
  }
};

seedProducts();
