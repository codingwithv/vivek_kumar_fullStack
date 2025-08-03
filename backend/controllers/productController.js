const products = require("../models/productModel");

exports.getProducts = (req, res) => {
  const { role, id } = req.user;

  let result;
  if (role === "admin") {
    result = products;
  } else if (role === "seller") {
    result = products.filter((p) => p.createdBy === id);
  } else if (role === "buyer") {
    result = products.filter((p) => p.isPublic);
  }

  res.json(result);
};

exports.createProduct = (req, res) => {
  const { name, price, isPublic } = req.body;
  const newProduct = {
    id: products.length + 1,
    name,
    price,
    isPublic,
    createdBy: req.user.id,
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
};
