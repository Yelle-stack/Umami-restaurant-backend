# 👩🏼‍🍳 Umami Restaurant Backend

Backend API for the **Umami Restaurant** web application 🚀

---

# 🛠️ Tech Stack

- 🟢 Node.js
- ⚡ Express.js
- 🍃 MongoDB Atlas
- 🧩 Mongoose
- ☁️ Cloudinary
- 🔐 JWT Authentication
- 📂 Multer
- 🔄 Nodemon

---

# ✨ Features

✅ Admin authentication with JWT  
✅ MongoDB database connection  
✅ Cloudinary image management  
✅ REST API architecture  
✅ File upload middleware with Multer  
✅ Environment variables with dotenv  

---

# 📁 Project Structure

```bash
backend/
│
├── config/
│   ├── cloudinary.js
│   └── mongodb.js
│
├── controllers/
│   └── userControllers.js
│
├── middleware/
│   └── multer.js
│
├── routes/
│   └── userRoute.js
│
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
⚙️ Installation
📥 Clone the repository
git clone https://github.com/Yelle-stack/Umami-restaurant-backend.git
📂 Go to the project folder
cd Umami-restaurant-backend
📦 Install dependencies
npm install
🔑 Environment Variables

Create a .env file in the root directory:

PORT=4000

MONGO_URI=your_mongodb_connection_string

CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key

ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password

JWT_SECRET=your_jwt_secret
▶️ Run the Server
🚀 Development mode with Nodemon
npm run server
🌐 Server URL
http://localhost:4000
📡 API Routes
🔐 Admin Login
POST /api/user/admin
📤 Request Body
{
  "email": "admin@example.com",
  "password": "yourpassword"
}
✅ Success Response
{
  "success": true,
  "token": "jwt_token"
}
🛡️ Security Notes

✅ .env protected with .gitignore
✅ Sensitive credentials stored in environment variables
✅ JWT used for authentication
✅ MongoDB Atlas credentials secured
✅ Cloudinary secrets hidden

📚 Future Improvements

🚧 Add menu CRUD
🚧 Add food image upload
🚧 Add order management
🚧 Add payment integration
🚧 Add protected admin routes
🚧 Deploy backend to Render or Railway

👩‍💻 Author

Developed with ❤️ by Jelena
