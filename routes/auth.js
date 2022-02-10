const router=require("express").Router();
const { db } = require("../models/user");
const User=require("../models/user");
const bcrypt=require("bcrypt");

router.post("/register", async (req, res)=>{//change to post request
    //console.log(req.body);
    //const user1=await User.create(req.body);
    const user1=await new User({ //maybe shouldn't use await
        username:req.body.username,
        email:req.body.email,
        password:"**********" //might need to use a hashed password or req.body.password
    });
    //user1.User.deleteMany({}); //Put this back if needed to delete

    try{
        const user=await user1.save();
        res.status(200).json(user);
    }
    catch(err){
        console.log(err);
    }
});

router.post("/login", async(req, res)=>{
    try{
        const user=await User.findOne({email: req.body.email});
        !user && res.status(404).json("User not found"); //might need to organize parantheses appropriately
        const validPassword=await bcrypt.compare(req.body.password, user.password);
        !validPassword && res.status(400).json("Wrong Password!");
    }
    catch(err){
        console.log(err);
    }
})

module.exports=router;