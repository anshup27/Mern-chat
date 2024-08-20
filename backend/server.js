const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();
dotenv.config();
connectDB();

app.use(express.json()); // to accept json data

app.get("/", (req, res) => {
  res.send("API is Running");
});

app.use("/api/user", userRoutes);
 
// console.log(process.env.PORT);

const PORT = process.env.PORT || 8000;
app.listen(8000, console.log("Server Started on Port 8000"));
