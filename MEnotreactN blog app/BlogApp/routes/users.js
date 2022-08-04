var express = require("express");
var router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = require("./models/userModel");

mongoose.connect("mongodb://localhost:27017", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

ACCESS_TOKEN_SECRET = "Custy Crew";

function generateAccessToken(user) {
  return jwt.sign(user, ACCESS_TOKEN_SECRET, {expiresIn: "3600m"}) 
}

router.post('/login', async (req, res) => {
  const email = req.body.email
  const password = req.body.password
  var encrptedPassword = ""
  try {
    //find user from db using email
    User.findOne({ email: email }, (err, user) => {
      if (err) res.status(500).send(err);
      if (user) {
        encrptedPassword = user.password;

        bcrypt.compare(password, encrptedPassword, (err, cmp) => {
          if (err) res.status(401).send("Wrong Username or Password");
          if (cmp) {
            const accessToken = generateAccessToken({ user: email })
             res.status(200).json({
                 accessToken: accessToken,
                 name: user.name,
                 email: email,
             });
          }
        });
      } else {
        res.status(401).send("Wrong Username or Password");
      }
    });
  } catch (e) {
    console.log(e);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/signup", async (req, res) => {
  const email = req.body.email;
  const name = req.body.name;
  const password = await bcrypt.hash(req.body.password, 10);
  // any problem with body, return 400
  if (!name || !email || !password) {
    res.status(400).send("Incorrect or empty feilds");
  }
  // if email and password are not empty
  else {
    try {
      User.findOne({ email: email }, (err, user) => {
        if (err) res.status(500).send(err);
        // check if already exists
        if (user) {
          // if already exists then return this message
          res.status(409).send("Username already exists!")
        }
        else {
            // store it into the database
           try {
             const user = new User({
                 name: name,
                 email: email,
                 password: password,
             });
             user.save((err) => {
                 if (err) res.status(500).send(err);
                 else {
                     // 201 if stored
                     const accessToken = generateAccessToken({ user: email });
                     res.status(201).json({
                         accessToken: accessToken,
                         name:name,
                         email:email
                     });
                 }
             });
           } catch (error) {
             res.status(500).send(error);
           }
            
        }
      })   
    } catch (e) {
      console.log(e);
      res.status(500).send("Internal Server Error");
    }
  }
});

module.exports = router;
