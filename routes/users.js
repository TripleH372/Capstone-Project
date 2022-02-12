const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");

router.put("/:id", async (req, res) => { //update user
  if (req.body.userId === req.params.id || req.body.isAdmin) { //Might take out the part where we check for admin
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } //Have to use the salt again.
      catch (err) {
        return res.status(500).json(err);
      }
    }
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body, //Works like a settor method.
      });
      res.status(200).json("Account has been updated");
    } 
    catch (err) {
      return res.status(500).json(err); //Do this if this is redone.
    }
  } 
  else return res.status(403).json("Do Not Update Other Accounts!");
});

router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
      try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("Account has been deleted");
      } 
      catch (err) {
        return res.status(500).json(err);
      }
    } 
    else return res.status(403).json("DON\'T TOUCH ANOTHER PERSON\'S ACCOUNT!");
}); //delete a user

router.put("/:id/follow", async(req, res) =>{
    if(req.body.userId===req.params.id) return res.status(403).json("Error: "+req.body.userId+" should not follow himself or herself."); //Might not need to be a return function.
    else{
        //Code Later
    }
});
router.put("/:id/unfollow", async(req, res)=>{ //This may be integrated with the follow button or merged with the follow button in another function.
    if(req.body.userId===req.params.id) return res.status(403).json("Error: "+req.body.userId+" cannot unfollow himself or herself."); //Might not need to be a return function.
    else{
        //Code Later
    }
});

//Should we get a user?


module.exports=router;