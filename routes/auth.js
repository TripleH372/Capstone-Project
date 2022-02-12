const router=require("express").Router();
const { db } = require("../models/user");
const User=require("../models/user");
const bcrypt=require("bcrypt");

router.post("/register", async (req, res)=>{//change to post request
    try {
        
        const salt = await bcrypt.genSalt(10); //trying bcrypt with a salt generated
        const hashedPassword = await bcrypt.hash(req.body.password, salt); //Used the tutorial in my sources
    
        //create new user
        const newUser = new User({
          username: req.body.username,
          email: req.body.email,
          password: hashedPassword,
        });
        const user = await newUser.save();
        res.status(200).json(user);
    } 
    catch (err) {
        res.status(500).json(err)
    }
});

router.post("/login", async(req, res)=>{
    try {
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(404).json("user not found");
    
        const validPassword = await bcrypt.compare(req.body.password, user.password)
        !validPassword && res.status(400).json("wrong password")
    
        res.status(200).json(user)
      } 
      catch (err) {
        res.status(500).json(err)
      }
    });
    
module.exports = router;