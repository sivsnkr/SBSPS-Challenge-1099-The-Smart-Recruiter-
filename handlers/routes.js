const express = require("express");
const app = express.Router();

app.get("/", (req, res) => {
  // console.log(req.session);
  res.render("home.ejs", { user:req.session.user ,status:false ,flag:0});
});
app.get("/profile", (req, res) => {
  // console.log(req.session);
  res.render("profile.ejs", { user:req.session.user});
});

module.exports = app;
