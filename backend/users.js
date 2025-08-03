const bcrypt = require("bcryptjs");

const users = [
  {
    id: 1,
    email: "admin@example.com",
    password: bcrypt.hashSync("admin123", 8),
    role: "admin",
  },
  {
    id: 2,
    email: "seller@example.com",
    password: bcrypt.hashSync("seller123", 8),
    role: "seller",
  },
  {
    id: 3,
    email: "buyer@example.com",
    password: bcrypt.hashSync("buyer123", 8),
    role: "buyer",
  },
];

module.exports = users;
