const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors = require("cors");
const { connect } = require("./db");
const router = require("./Routes/index");
const chatbotRouter = require("./Routes/chatbot");
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json());

// Root endpoint
app.get("/", (req, res) => {
  res.send("Hello! This is my backend.");
});

// Routes

app.use("/api/chatbot", chatbotRouter);


// Database Connection
connect();

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
