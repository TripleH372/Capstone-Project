const router=require("express").Router();

router.get("/", (req, res)=>{
    res.send("The Authentication Route WORKS!");
})

module.exports=router;