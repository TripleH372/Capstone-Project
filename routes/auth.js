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
        password:"*******", //Changing for now: switching back to asterisks or hashed Password
        //actualPassword: req.body.password
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
        const user=await User.findOne({email: req.body.email});//might need to change this to username
        !user && res.status(404).json("User not found"); //might need to organize parantheses appropriately
        /*const validPassword=await bcrypt.compare(req.body.password, user.password); //could try using ===
        !validPassword && res.status(403).json("Wrong Password!"); //this does actually work properly, but I might need to debug even more down the line

        res.status(200).json(user); //FIX THIS*/
        if(req.body.password === user.password && req.body.email === user.email) res.status(200).json(user); //I don't believe I need to include the req.body.email here
        else res.status(403).json("Wrong Password!");
    }
    catch(err){
        
        console.log(err);
    }
});

module.exports=router;