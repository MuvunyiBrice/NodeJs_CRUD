const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/EmployeeDB",
  { useNewUrlParser: true },
  (err) => {
    if (!err) {
      console.log("Connected to MongoDB");
    } else {
      console.log("Error in connecting to DB: " + err);
    }
  }
);

require("./employee.model");
