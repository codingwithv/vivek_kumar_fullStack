const express = require("express");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Mount routes
app.use("/login", authRoutes); // Handles POST /login
app.use("/products", productRoutes); // Handles GET/POST /products

// Start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
