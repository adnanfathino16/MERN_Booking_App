import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

// connect mongodb
import "./utils/connectDB.js";
import { routes } from "./routes/index.js";
import "dotenv/config.js";

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());
app.use("/uploads", express.static("uploads"));
app.use(
  cors({
    credentials: true,
    origin: "https://adn-booking-app.vercel.app",
    methods: "GET, PUT, POST, DELETE", // Atur metode HTTP yang diperbolehkan
    allowedHeaders: "Content-Type, Authorization", // Atur header yang diperbolehkan
  })
);

// routes
routes(app);

app.listen(port, () => console.log(`Server berjalan di port ${port}`));
