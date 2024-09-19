// import express from "express";
// import { user } from "./users";
// const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello Node");
// });

// app.get("user/vinay", (rq, res) => {
//   res.send(user);
// });

// const port = process.env.PORT || 4000;
// app.listen(port, () => {
//   console.log(`server started on ${port}`);
// });

// server.js (Backend)
const express = require("express");
const cors = require("cors"); // To allow cross-origin requests from frontend

const app = express();
const port = 5000;

// Enable CORS for the frontend
app.use(cors());

// Mock data
const data = {
  message: "Hello from the backend!",
};

// API endpoint to send data
app.get("/api/data", (req, res) => {
  res.json(data); // Send data as JSON
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
