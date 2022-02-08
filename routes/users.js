const router=require("express").Router();

router.get("/", (req, res)=>{
    res.send("The Sidstagram Route WORKS!");
})

module.exports=router;