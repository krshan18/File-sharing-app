require("dotenv").config();
const mongoose = require("mongoose");

function connectDB() {
  // Database Connection
  mongoose.connect(process.env.MONGO_CONNECTION_URL, {
    useNewUrlPArser: true,
    useUnifiedTopology: true,
  });
  const connection = mongoose.connection;

  connection
    .once("open", function () {
      console.log("Database Connected");
    })
    .on("error", function (err) {
      console.log("Connection Failed");
    });
}

module.exports = connectDB;
