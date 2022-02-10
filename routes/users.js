//Should be updating a user
//Should be reading a user's posts
//Should be reading a user's followers
//Should be reading a user's following
//Should be able to delete a user --> Might be doing this in a deletion file
//Should be able to get a user

const router=require("express").Router();

router.get("/", (req, res)=>{
    res.send("The Sidstagram Route WORKS!");
})

module.exports=router;