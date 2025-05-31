<<<<<<< HEAD
=======
# ATBPROJECT

>>>>>>> 6b5e14ad4a44d52472b9506304c1ad7d7fe83c26
# ATB-III Project

ATB-III is a Node.js-based backend project designed to handle customer and user management using Express, MongoDB, and Mongoose. It supports API routes for registration and authentication.

---

## 🚀 Features

- User registration and login
- Customer profile creation
- MongoDB transactions for atomic operations
- RESTful API structure
- Modular route organization
-Category Model

---

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** with **Mongoose**
- **dotenv** for environment configuration
- **bcrypt** for password hashing
- **Multer** image/file uploading

---

## 📁 Project Structure

ATB-III Project/
├── routes/
│ ├── userRoutes.js
│ └── customerRoutes.js
  └── categoryRoutes.js
├── middleware/
 └─upload.js
├── models/
│ ├── User.js
│ └── Customer.js
  └──Category.js
├── controllers/
│ ├── userController.js
│ └── customerController.js
  └── categoryController.js
├── .env
├── app.js / server.js
└── package.json

