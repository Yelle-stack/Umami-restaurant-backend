# 👩🏼‍🍳 Umami Restaurant Backend

Backend API for the Umami Restaurant web application.

## ⚛️ Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Cloudinary
- JWT Authentication
- Multer
- Nodemon

---

## Features

- Admin authentication with JWT
- MongoDB database connection
- Cloudinary image configuration
- REST API structure
- File upload middleware with Multer
- Environment variables support with dotenv

---

## Project Structure

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
