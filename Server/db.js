const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables

// Retrieve the MongoDB connection URL from the environment variables
const url = process.env.DATABASEURL;

// Connect to the database
module.exports.connect = () => {
    mongoose
        .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Database is connected successfully.");
        })
        .catch((error) => {
            console.error("Database connection failed:", error.message);
            process.exit(1); // Exit the process if unable to connect
        });
};
