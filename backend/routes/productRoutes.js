const express = require("express");
const authenticateToken = require("../middlewares/authMiddleware");
const authorizeRoles = require("../middlewares/roleMiddleware");
const {
  getProducts,
  createProduct,
} = require("../controllers/productController");

const router = express.Router();

router.get("/", authenticateToken, getProducts);

router.post(
  "/",
  authenticateToken,
  authorizeRoles("admin", "seller"),
  createProduct
);

module.exports = router;
