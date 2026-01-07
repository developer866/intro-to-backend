import express from "express";
import userRoutes from "./routes/user.route.js";
import productRoutes from "./routes/product.routes.js";

const app = express();

app.use(express.json());

// routes
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/products", productRoutes);


export default app;
