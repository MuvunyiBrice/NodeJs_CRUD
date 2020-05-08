const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const Employee = mongoose.model("Employee");

router.get("/", (req, res) => {
  res.render("employee/addOrEdit", { viewTitle: "Insert Employee" });
});

router.post("/", (req, res) => {
  insertRecord(req, res);
});

const insertRecord = (req, res) => {
  const employee = new Employee();
  employee.fullName = req.body.fullName;
  employee.email = req.body.email;
  employee.mobile = req.body.mobile;
  employee.city = req.body.city;
  employee.save((err, doc) => {
    if (!err) {
      res.redirect("employee/list");
    } else {
      console.log("Error during record insertion: " + err);
    }
  });
};

router.get("/list", (req, res) => {
  res.json("back from page");
});

module.exports = router;
