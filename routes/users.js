const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");

router.put("/:id", async (req, res) => {
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
        $set: req.body,
      });
      res.status(200).json("Account has been updated");
    } 
    catch (err) {
      return res.status(500).json(err); //Do this if this is redone.
    }
  } 
  else return res.status(403).json("Do Not Update Other Accounts!");
});

module.exports=router;