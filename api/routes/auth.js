const router = require("express").Router();
const userModel = require("../models/Users.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newuserModel = new userModel({
      username: req.body.username,
      accId: req.body.accId,
      password: hashedPass,
    });

    const user = await newuserModel.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await userModel.findOne({ username: req.body.username });
    !user && res.status(400).json("Invalid userModelname or Password!");

    const validate = await bcrypt.compare(req.body.password, user.password);
    !validated && res.status(400).json("Invalid userModelname or Password!");

    const { password, ...others } = user._doc;
    res.status(200).json(user);

    //Token Generate
    if (username === process.env.USERNAME) {

      jwt.sign(
        { password }, process.env.JWT_SECRET, { expireIn }, (err, token)
      );
      return res.status(200).json({
        message: "Generate Token: Success",
        username,
        token,
      });
    } else {
      return res.status(500).json.send({
        message: "Generate Token: Failed",
        error: err,
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET USER
router.get("/:id", async (req, res) => {
  try{
      const user = await userModel.findById(req.params.id);
      res.status(200).json(others);
  } catch (err){
      res.status(500).json(err);
  }
});

module.exports = router;