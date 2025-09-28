import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";

dotenv.config();
const app = express();


app.use(express.json());


connectDb();


app.get("/", (req, res) => {
  res.send("Backend chạy OK ✅");
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running in: http://localhost:${PORT}`);
});
