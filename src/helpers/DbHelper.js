const connectDB = require("../configs/mongodb.config");

const dbHelper = {
  connect: connectDB,
  handleError: (err, res) =>
    res.status(500).json({ message: "Database error", error: err.message }),
};

module.exports = dbHelper;
