//Should be updating a user
//Should be reading a user's posts
//Should be able to delete a user --> Might be doing this in a deletion file
//Should be able to get a user

const router=require("express").Router();
const bcrypt=require("bcrypt");
const User=require("../models/user");

//router.put("/:id", async(req, res)=>{
    //if(req.body./*pass*/ === req.params.id){

    //}
    //else return res.status(403).json("You're GOOFY! GET TO YOUR OWN ACCOUNT!");
//})

module.exports=router;