const express = require("express");

const router = express.Router();
const passport = require("../config/passport");

const db = require("../models");

// Using the passport.authenticate middleware with our local strategy.
// If the user has valid login credentials, send them to the members page.
// Otherwise the user will be sent an error
router.post("/login", passport.authenticate("local"), function (req, res) {
  // Sending back a password, even a hashed password, isn't a good idea
  res.json({
    email: req.user.email,
    id: req.user.id
  });
});

// Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
// how we configured our Sequelize user Model. If the user is created successfully, proceed to log the user in,
// otherwise send back an error
router.post("/signup", async function (req, res) {
  try {
    await db.user.create({
      email: req.body.email,
      password: req.body.password
    });
    res.redirect(307, "/login");
  } catch (error) {
    res.status(401).json(error);
  }
});

// Route for logging user out
router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

// Route for getting some data about our user to be used client side
router.get("/current", function (req, res) {
  if (!req.user) {
    // The user is not logged in, send back an empty object
    res.json({});
  } else {
    // Otherwise send back the user's email and id
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  }
});

module.exports = router;