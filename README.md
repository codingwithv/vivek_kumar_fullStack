# 🔐 Role-Based JWT Authentication API

A simple Node.js + Express.js REST API that implements **JWT-based authentication** with **role-based access control (RBAC)** for `admin`, `seller`, and `buyer`.

---

## 📁 Project Structure

```
.
├── app.js
├── .env
├── users.js
├── package.json
├── routes/
│   ├── authRoutes.js
│   └── productRoutes.js
├── middlewares/
│   ├── authMiddleware.js
│   └── roleMiddleware.js
├── controllers/
│   └── productController.js
├── models/
│   └── productModel.js
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env` File

Create a `.env` file in the root directory:

```
JWT_SECRET=yourSecretKey
```

> Replace `yourSecretKey` with any strong secret string.

### 4. Start the Server

```bash
node app.js
# or if using nodemon
npm run dev
```

Server runs at:
```
http://localhost:5000
```

---

## 🧪 Dummy Users for Testing

```js
// users.js
const users = [
  {
    id: 1,
    email: "admin@example.com",
    password: "admin123", // hashed internally
    role: "admin"
  },
  {
    id: 2,
    email: "seller@example.com",
    password: "seller123",
    role: "seller"
  },
  {
    id: 3,
    email: "buyer@example.com",
    password: "buyer123",
    role: "buyer"
  }
];
```

> Passwords are hashed using bcryptjs

---

## 🔑 Authentication Flow

1. User logs in via `/login` and receives a JWT.
2. JWT is passed in `Authorization: Bearer <token>` header for protected routes.

---

## 🔄 API Endpoints

### ✅ `POST /login`

Login with email and password.

**Request Body:**
```json
{
  "email": "seller@example.com",
  "password": "seller123"
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsIn..."
}
```

---

### ✅ `GET /products` (Protected)

Return products based on user role.

| Role   | Returned Products                       |
|--------|------------------------------------------|
| Admin  | All products                             |
| Seller | Only products created by that seller     |
| Buyer  | Only products marked `isPublic: true`    |

**Headers:**
```
Authorization: Bearer <JWT Token>
```

---

### ✅ `POST /products` (Protected)

Add a product (admin and seller only).

**Headers:**
```
Authorization: Bearer <JWT Token>
```

**Request Body:**
```json
{
  "name": "Product A",
  "price": 100,
  "isPublic": true
}
```

---

## 🔐 Role Access Summary

| Endpoint         | Method | Role Access         |
|------------------|--------|---------------------|
| `/login`         | POST   | Public              |
| `/products`      | GET    | All roles           |
| `/products`      | POST   | Admin, Seller only  |

---

## 🧪 Testing with Postman

1. Use `POST /login` to get your token.
2. For protected endpoints:
   - Go to the **Authorization** tab.
   - Choose **Bearer Token**.
   - Paste the token received from `/login`.

---

## 🛠 Tech Stack

- Node.js
- Express.js
- JWT (`jsonwebtoken`)
- Password Hashing with `bcryptjs`
- Environment Config with `dotenv`

---

## 📄 License

This project is for educational and internship assessment purposes only.
