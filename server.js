import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";

// Charger les variables d'environnement
dotenv.config();

const app = express();

// PORT
const PORT = process.env.PORT || 4000;

connectDB()
connectCloudinary()

// Middleware
app.use(cors());
app.use(express.json());

app.use('/api/user', userRouter)
app.use('/api/product', productRouter)

// Route test
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});