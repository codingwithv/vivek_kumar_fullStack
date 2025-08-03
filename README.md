🔐 Role-Based JWT Authentication API
A simple Express.js-based REST API implementing JWT-based login and Role-Based Access Control (RBAC).

📁 Project Structure
bash
Copy
Edit
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
🚀 How to Run
1. Clone the Repository
bash
Copy
Edit
git clone <your-repo-url>
cd your-project-name
2. Install Dependencies
bash
Copy
Edit
npm install
3. Set Environment Variables
Create a .env file in the root directory:

ini
Copy
Edit
JWT_SECRET=yourSecretKey
Replace yourSecretKey with any secure string.

4. Run the Server
bash
Copy
Edit
node app.js
# or if using nodemon
npm run dev
The server will run at:
📍 http://localhost:5000

🧪 Dummy Users
Use these users to test the login:

Role	Email	Password
Admin	admin@example.com	admin123
Seller	seller@example.com	seller123
Buyer	buyer@example.com	buyer123

Passwords are hashed using bcryptjs.

🔑 Authentication Flow
Login to get JWT token

Send JWT token in Authorization header for protected routes

🔄 API Endpoints
✅ POST /login
Authenticate user and get JWT.

Body:

json
Copy
Edit
{
  "email": "seller@example.com",
  "password": "seller123"
}
Response:

json
Copy
Edit
{
  "token": "eyJhbGciOiJIUzI1NiIsIn..."
}
✅ GET /products
Return products based on role:

Role	Products Returned
Admin	All products
Seller	Products created by that seller
Buyer	Only products marked as isPublic: true

Headers:

makefile
Copy
Edit
Authorization: Bearer <your_token>
✅ POST /products (admin & seller only)
Add a new product.

Headers:

makefile
Copy
Edit
Authorization: Bearer <your_token>
Body:

json
Copy
Edit
{
  "name": "Product Name",
  "price": 500,
  "isPublic": true
}
Response:

json
Copy
Edit
{
  "id": 4,
  "name": "Product Name",
  "price": 500,
  "isPublic": true,
  "createdBy": 2
}
🔐 Role Access Summary
Route	Method	Access
/login	POST	Public
/products	GET	All roles
/products	POST	Admin, Seller only

🧪 Testing in Postman
POST to /login → Copy token from response

For all protected routes:

Go to Authorization tab

Choose Bearer Token

Paste token

📦 Technologies Used
Node.js

Express.js

JSON Web Token (jsonwebtoken)

Bcrypt (bcryptjs)

Dotenv

📄 License
This project is for educational and internship assessment purposes.
